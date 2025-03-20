


use("online_review_db");

db.reviews.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user_details"
        }
    },
    { $unwind: "$user_details" }
]).pretty()


db.reviews.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "product_details"
        }
    },
    { $unwind: "$product_details" }
]).pretty()


