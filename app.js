let express = require('express');
let app = express();
let port = process.env.PORT||2121;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData,updateOrder,deleteOrder} = require('./controller/dbController');

// Middleware(supporting library)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

// This is api
app.get('/',(req,res)=>{
    res.send('hii from express')
})

// Get goals list
app.get('/goals',async (req,res)=>{
    let query = {};
    let collection = "goals";
    let output = await getData(collection,query)
    res.send(output)
})

// Get category list
app.get('/category',async (req,res)=>{
    let query = {};
    let collection = "category";
    let output = await getData(collection,query)
    res.send(output)
})

// Get sub_category list
app.get('/sub_category',async (req,res)=>{
    let query = {};
    let collection = "sub_category";
    let output = await getData(collection,query)
    res.send(output)
})

// Get accessories list
app.get('/accessories',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id){
        query = {sub_category_id: Number(req.query.sub_category_id)}
    }else{
        query = {}
    }
    let collection = "accessories";
    let output = await getData(collection,query)
    res.send(output)
})

// Get women wear list
app.get('/women_wear',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id){
        query = {sub_category_id: Number(req.query.sub_category_id)}
    }
    else if(req.query.Shoes_category_id){
        query = {"Shoes_category_id": Number(req.query.Shoes_category_id)}
    }
    else if(req.query.Clothing_category_id){
        query = {"Clothing_category_id": Number(req.query.Clothing_category_id)}
    }
    else{
        query = {}
    }
    let collection = "women_wear";
    let output = await getData(collection,query)
    res.send(output)
})

// Get men wear list
app.get('/men_wear',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id){
        query = {sub_category_id: Number(req.query.sub_category_id)}
    }
    else if(req.query.Shoes_category_id){
        query = {"Shoes_category_id": Number(req.query.Shoes_category_id)}
    }
    else if(req.query.Clothing_category_id){
        query = {"Clothing_category_id": Number(req.query.Clothing_category_id)}
    }
    else{
        query = {}
    }
    let collection = "men_wear";
    let output = await getData(collection,query)
    res.send(output)
})

// Get kids wear list
app.get('/kids_wear',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id){
        query = {sub_category_id: Number(req.query.sub_category_id)}
    }else{
        query = {}
    }
    let collection = "kids_wear";
    let output = await getData(collection,query)
    res.send(output)
})

// Get sports wear list
app.get('/sports',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id){
        query = {sub_category_id: Number(req.query.sub_category_id)}
    }else{
        query = {}
    }
    let collection = "sports";
    let output = await getData(collection,query)
    res.send(output)
})

// Get merchandise list according to price
app.get('/filter1/:category_id', async(req,res) => {
    let category_id = Number(req.params.category_id);
    let sub_category_id = Number(req.query.sub_category_id)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(sub_category_id){
        query = {
            "category_id":category_id,
            "sub_category_id":sub_category_id
        }
    } else if(lcost && hcost){
        query = {
            "category_id":category_id,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "accessories";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/filter2/:category_id', async(req,res) => {
    let category_id = Number(req.params.category_id);
    let sub_category_id = Number(req.query.sub_category_id)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(sub_category_id){
        query = {
            "category_id":category_id,
            "sub_category_id":sub_category_id
        }
    } else if(lcost && hcost){
        query = {
            "category_id":category_id,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "women_wear";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/filter3/:category_id', async(req,res) => {
    let category_id = Number(req.params.category_id);
    let sub_category_id = Number(req.query.sub_category_id)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(sub_category_id){
        query = {
            "category_id":category_id,
            "sub_category_id":sub_category_id
        }
    } else if(lcost && hcost){
        query = {
            "category_id":category_id,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "men_wear";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/filter4/:category_id', async(req,res) => {
    let category_id = Number(req.params.category_id);
    let sub_category_id = Number(req.query.sub_category_id)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(sub_category_id){
        query = {
            "category_id":category_id,
            "sub_category_id":sub_category_id
        }
    } else if(lcost && hcost){
        query = {
            "category_id":category_id,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "kids_wear";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/filter5/:category_id', async(req,res) => {
    let category_id = Number(req.params.category_id);
    let sub_category_id = Number(req.query.sub_category_id)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(sub_category_id){
        query = {
            "category_id":category_id,
            "sub_category_id":sub_category_id
        }
    } else if(lcost && hcost){
        query = {
            "category_id":category_id,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "sports";
    let output = await getData(collection,query);
    res.send(output)
})

// Get merchandise list according to size
app.get('/women_wear_shoesize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: Number(req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "women_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/women_wear_clothsize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: (req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "women_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/men_wear_shoesize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: Number(req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "men_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/men_wear_clothsize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: (req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "men_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/kids_wear_shoesize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: Number(req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "kids_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/kids_wear_clothsize',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: (req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "kids_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/sports_size',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.size){
        query = {sub_category_id: Number(req.query.sub_category_id), size: Number(req.query.size)}
    }
    else{
        query = {}
    }
    let collection = "sports";
    let output = await getData(collection,query)
    res.send(output)
})

// Details of selected merchandise
app.get('/accessory_details',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.merchandise_id){
        query = {sub_category_id: Number(req.query.sub_category_id), merchandise_id: Number(req.query.merchandise_id)}
    }
    else{
        query = {}
    }
    let collection = "accessories";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/women_wear_details',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.merchandise_id){
        query = {sub_category_id: Number(req.query.sub_category_id), merchandise_id: Number(req.query.merchandise_id)}
    }
    else{
        query = {}
    }
    let collection = "women_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/men_wear_details',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.merchandise_id){
        query = {sub_category_id: Number(req.query.sub_category_id), merchandise_id: Number(req.query.merchandise_id)}
    }
    else{
        query = {}
    }
    let collection = "men_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/kids_wear_details',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.merchandise_id){
        query = {sub_category_id: Number(req.query.sub_category_id), merchandise_id: Number(req.query.merchandise_id)}
    }
    else{
        query = {}
    }
    let collection = "kids_wear";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/sports_wear_details',async (req,res)=>{
    let query = {};
    if(req.query.sub_category_id && req.query.merchandise_id){
        query = {sub_category_id: Number(req.query.sub_category_id), merchandise_id: Number(req.query.merchandise_id)}
    }
    else{
        query = {}
    }
    let collection = "sports";
    let output = await getData(collection,query)
    res.send(output)
})

// Details of all selected merchandise
app.post('/selected_merchandise',async(req,res) =>{
    if(Array.isArray(req.body.id)){
        let query = {merchandise_id:{$in:req.body.id}};
        let collection = "accessories";
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Please pass data in array form')
    }
})

// Place order
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = "orders";
    console.log(">>>",data)
    let response = await postData(collection,data)
    res.send(response)
})


// List of all orders
app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query={email:req.query.email}
    }else{
        query = {}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})

// Update order details
app.put('/updateOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

// Delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})

//This is server
app.listen(port,(err)=>{
    dbConnect()
    if(err) throw err;
    console.log(`server in running on port ${port}`)
})