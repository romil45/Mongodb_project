Here it is CRUD and some basic query which i have attached in here

To Show user data

==> db.users.find().pretty()

To Show product data

==> db.products.find().pretty()

To Show review data

==> db.reviews.find().pretty()

Get Reviews for a Specific Product

==> db.reviews.find({ "product_id": 101 }).pretty()

To show user details

==> db.users.find({ "_id": 1 }).pretty()

-------------CRUD------------------

===CREATE user===

 ==> use("online_review_db");

 ==> db.users.insertOne({
    _id: 11,
    name: "Ashok",
    email: "Ashok@example.com",
    joined: new Date()
})

==> db.users.insertMany
([
    {_id: 12, name: "Krishsa", email: "krisha@example.com", joined: new Date() },

    
    { user_id: 13, name: "hemasnsi", email: "hemashi@example.com",  joined: new Date() }
])


=====UPDATE DATA=======


==> use("online_review_db");

==> db.users.updateOne({ _id: 1 }, { $set: { email: "romilMORADIYA@gmail.com" } })

==> db.reviews.updateOne({ user_id: 2 }, { $set: { review: "IT IS BEST PRODUCT FOR USE" } })


=====DELETE DATA=======

==> use("online_review_db");

==> db.users.deleteOne({ _id: 3 })

