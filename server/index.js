const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {DogNames, getDogs2, changeDog, createDog, deleteDog} = require('./controller')
const sample = require('./sampleController')




app.get('/api/dbdogs', getDogs2)

app.post("/api/dbdogs", createDog)

app.put("/api/dbdogs/:id", changeDog)

app.delete("/api/dbdogs/:id", deleteDog)


//alert buttons 
app.get("/api/compliment", sample.compliment);
app.get("/api/fortune", sample.fortune);
app.get("/api/random", DogNames)

app.listen(4000, () => console.log("Server running on 4000"));
