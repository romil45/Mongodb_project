use("online_review_db");

db.users.insertOne({
    _id: 11,
    name: "Bhavesh",
    email: "alice@example.com",
    joined: new Date()
})

db.users.insertMany([
    {_id: 12, name: "jash", email: "jash@example.com", joined: new Date() },
    { user_id: 13, name: "hemasnsi", email: "hemashi@example.com",  joined: new Date() }
])

