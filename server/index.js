const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getDogs, getDogs2, changeDog, createDog, deleteDog} = require('./controller')



app.get("/api/compliment", getDogs)

app.get('/api/compliment', getDogs2)

app.put("/api/compliment", changeDog)

app.post("/api/compliment", createDog)

app.delete("/api/compliment/:id", deleteDog)



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
