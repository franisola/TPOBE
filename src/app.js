const express = require('express');

const mongoose = require('mongoose');
const mongodb = "mongodb://127.0.0.1/TPOAPI";


const app = express();




async function main(){
    await mongoose.connect(mongodb);
} 

main()
.then(() => {
    console.log("Connected to database")
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
})
.catch(err => console.log(err)); 

