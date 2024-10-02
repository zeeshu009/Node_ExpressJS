const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //await mongoose.connect('mongodb+srv://zeeshu_009:test123@cluster0.llwld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&ssl=true');

    await mongoose.connect(
      "mongodb://zeeshu_009:test123@cluster0-shard-00-00.llwld.mongodb.net:27017,cluster0-shard-00-01.llwld.mongodb.net:27017,cluster0-shard-00-02.llwld.mongodb.net:27017/?ssl=true&replicaSet=atlas-lpmw4h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    )
    console.log("Connected to DB SuccessFully ");
  } catch (err) {
    console.log('Can not connect to DB', err);
  }
};

module.exports = connectDB;


//MzSnGnU6ZxOETaLQ