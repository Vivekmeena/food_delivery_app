const mongoose = require('mongoose')

const mongoURI ='mongodb+srv://foodapp:Foodie123@cluster0.t1593vh.mongodb.net/foodapp?retryWrites=true&w=majority'
//'mongodb+srv://foodapp:Foodie123@cluster0.t1593vh.mongodb.net/?retryWrites=true&w=majority'
//'mongodb+srv://vivekmeena182000:jaishreeram@cluster0.0h84e7a.mongodb.net/GoFood?retryWrites=true&w=majority' // Customer change url to your db you created in atlas

module.exports = async function (callback) {
    try {
        await mongoose.connect('mongodb+srv://foodapp:Foodie123@cluster0.t1593vh.mongodb.net/foodapp?retryWrites=true&w=majority');
            //'mongodb+srv://vivekmeena182000:jaishreeram@cluster0.0h84e7a.mongodb.net/GoFood?retryWrites=true&w=majority');

        console.log("Connected to MongoDB");

        const foodCollection = await mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("food_Category");
        const Catdata = await categoryCollection.find({}).toArray();

        callback(null, data, Catdata);

    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
        callback(err);
    }
};

//'mongodb+srv://vivekmeena182000:jaishreeram@cluster0.0h84e7a.mongodb.net/GoFood?retryWrites=true&w=majority'