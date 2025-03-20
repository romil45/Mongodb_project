
use("online_review_db");

db.users.updateOne({ _id: 1 }, { $set: { email: "romil@gmail.com" } })

db.reviews.updateOne({ user_id: 2 }, { $set: { review: "bad it was not wroth it buy" } })

