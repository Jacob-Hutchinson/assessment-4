const dbDogs = require('./db.json')

    const dogNames = ['doug', 'jerry', 'buddy', 'kya', 'airbud', 'clyde']
    let globalID = dbDogs[dbDogs.length - 1].id + 1

module.exports = {
    DogNames: (req, res) => {
        let randomIndex = Math.floor(Math.random() * dogNames.length);
        let randomDog = dogNames[randomIndex]
        res.status(200).send(randomDog)
    },
    getDogs2: (req,res) => {
          res.status(200).send(dbDogs)
      },
    createDog: (req, res) => {
          const {dogname, trainLvl, breed} = req.body
          let newDog = {
              id: globalID,
              dogname,
              trainLvl,
              breed
            }
            dbDogs.push(newDog)
            res.status(200).send(dbDogs)
            globalID++ 
        },
    changeDog: (req, res) => {
        const {id} = req.params
        const {name, trainingLvl, breed} = req.body
        let updatedDog = {
            name,
            trainingLvl,
            breed,
            id
        }
        let index = dbDogs.findIndex(dog => dog.id === +id)
        dbDogs.splice(index, 1, updatedDog)
        res.status(200).send(dbDogs)
        },
    deleteDog: (req, res) => {
        let {id} = req.params
        let index = dbDogs.findIndex(elem => elem.id === +id)
          dbDogs.splice(index, 1)
  
          res.status(200).send(dbDogs)
      }
}