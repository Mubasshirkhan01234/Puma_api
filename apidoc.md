//PAGE 1
> List of category
* http://localhost:2121/category

> List of sub_category
* http://localhost:2121/sub_category

> List of Accessories 
* http://localhost:2121/accessories

> List of Women wear
* http://localhost:2121/women_wear

> List of Men wear
* http://localhost:2121/men_wear

> List of Kids wear
* http://localhost:2121/kids_wear

> List of Sports wear
* http://localhost:2121/sports


//PAGE 2
> List of merchandise wrt to Product type

//Accessories
* http://localhost:2121/accessories?sub_category_id=1
* http://localhost:2121/accessories?sub_category_id=2
* http://localhost:2121/accessories?sub_category_id=3
* http://localhost:2121/accessories?sub_category_id=4
//Women wear(shoes)
* http://localhost:2121/women_wear?Shoes_category_id=1
* http://localhost:2121/women_wear?Shoes_category_id=2
* http://localhost:2121/women_wear?Shoes_category_id=3
//Women wear(clothing)
* http://localhost:2121/women_wear?Clothing_category_id=1
* http://localhost:2121/women_wear?Clothing_category_id=2
* http://localhost:2121/women_wear?Clothing_category_id=3
* http://localhost:2121/women_wear?Clothing_category_id=4
* http://localhost:2121/women_wear?Clothing_category_id=5
* http://localhost:2121/women_wear?Clothing_category_id=6
//Men wear(shoes)
* http://localhost:2121/men_wear?Shoes_category_id=4
* http://localhost:2121/men_wear?Shoes_category_id=5
* http://localhost:2121/men_wear?Shoes_category_id=6
//men wear(clothing)
* http://localhost:2121/men_wear?Clothing_category_id=7
* http://localhost:2121/men_wear?Clothing_category_id=8
* http://localhost:2121/men_wear?Clothing_category_id=9
* http://localhost:2121/men_wear?Clothing_category_id=10
* http://localhost:2121/men_wear?Clothing_category_id=11
//Kids wear(shoes)
* http://localhost:2121/kids_wear?sub_category_id=9
//Kids wear(clothing)
* http://localhost:2121/kids_wear?sub_category_id=10
//Sports wear(running)
* http://localhost:2121/sports?sub_category_id=11
//Sports wear(training)
* http://localhost:2121/sports?sub_category_id=12
//Sports wear(cricket)
* http://localhost:2121/sports?sub_category_id=13
//Sports wear(football)
* http://localhost:2121/sports?sub_category_id=14


> List of merchandise wrt to Price

//Accessories
* http://localhost:2121/filter/1?lcost=1000&hcost=2000
//Women wear
* http://localhost:2121/filter2/2?lcost=1000&hcost=5000
//Men wear
* http://localhost:2121/filter3/3?lcost=1000&hcost=5000
//Kids wear
 http://localhost:2121/filter4/4?lcost=1000&hcost=5000
//Sports
* http://localhost:2121/filter5/5?lcost=1000&hcost=5000

> List of merchandise wrt to Size

//Women wear
* http://localhost:2121/women_wear_shoesize?sub_category_id=5&&size=6
* http://localhost:2121/women_wear_clothsize?sub_category_id=6&&size=M
//Men wear
* http://localhost:2121/men_wear_shoesize?sub_category_id=7&&size=6
* http://localhost:2121/men_wear_clothsize?sub_category_id=8&&size=M
//Kids wear
* http://localhost:2121/kids_wear_shoesize?sub_category_id=9&&size=1
* http://localhost:2121/kids_wear_clothsize?sub_category_id=10&&size=M
//Sports wear
* http://localhost:2121/sports_size?sub_category_id=11&&size=6
* http://localhost:2121/sports_size?sub_category_id=12&&size=6

//PAGE 3
> Details of selected merchandise

//Accessories
* http://localhost:2121/accessory_details?sub_category_id=1&&merchandise_id=2
//Women wear
* http://localhost:2121/women_wear_details?sub_category_id=5&&merchandise_id=1
//Men wear
* http://localhost:2121/men_wear_details?sub_category_id=7&&merchandise_id=1
//Kids wear
* http://localhost:2121/kids_wear_details?sub_category_id=9&&merchandise_id=1
//Sports
* http://localhost:2121/sports_wear_details?sub_category_id=11&&merchandise_id=1

//PAGE 4
> Details of all selected merchandise
* http://localhost:2121/selected_merchandise {"id":[1,2,3,4]}

> Place order
* http://localhost:2121/placeOrder  {
    "_id": "6486a58d0e94e8a37c7a1a2a",
    "order_id": 1,
    "custome_name": "Mubasshir Khan",
    "address": "1331/B Khati baba",
    "city": "Jhansi",
    "state": "Uttar Pradesh",
    "e-mail": "mubasshirkhan0123@gmail.com",
    "contact": 7233929479,
    "category_id": 1,
    "sub_category_id": 1,
    "sub_category_name": "Caps & Beanies",
    "merchandise_id": 1,
    "merchandise_name": "LIGA-Unisex-Football-Cap (1)",
    "price": 1299,
    "image": "https://i.ibb.co/jTpjdb0/LIGA-Unisex-Football-Cap-1.webp",
    "status": "order placed"
  }

//PAGE 5
> List of all Orders
* http://localhost:2121/orders

> Update order details
* http://localhost:2121/updateOrder {
    "_id": "6486a58d0e94e8a37c7a1a2a",
    "status": "Out for delivery"
}

> Delete order
* http://localhost:2121/deleteOrder

<!-- > Payment Gateway -->