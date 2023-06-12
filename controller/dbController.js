// mongodb package is required to connect to database

let mongo = require('mongodb');
let {MongoClient} = require('mongodb');  // importing client
let mongoUrl = "mongodb+srv://puma_website:oXt7YWLL4Z299Btz@cluster0.ttokmgk.mongodb.net/?retryWrites=true&w=majority";  // specifying url
"mongodb+srv://puma_website:oXt7YWLL4Z299Btz@cluster0.ttokmgk.mongodb.net/?retryWrites=true&w=majority"
let client = new MongoClient(mongoUrl);  // connect with client

// its a function to connect with the client
async function dbConnect(){
    await client.connect()
}

// it will tell database name
let db = client.db('puma_data');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    } catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data);
    }
    catch(err){
        output = {"response":"Error in postData"}
    }
    return output;
}

async function updateOrder(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {"response":"Error in update data"}
    }
    return output
}

async function deleteOrder(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    } catch(err){
        output = {"response":"Error in deleting data"}
    }
    return output
}

module.exports = {
    dbConnect,
    getData,
    postData,
    updateOrder,
    deleteOrder
}