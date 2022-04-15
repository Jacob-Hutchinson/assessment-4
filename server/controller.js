const dbDogs = require('./db.json')

    const dogNames = ['doug', 'jerry', 'buddy', 'kya', 'airbud', 'clyde']
    const globalID = 6

module.exports = {
    getDogs: (req, res) => {
        let randomIndex = Math.floor(Math.random() * dogNames.length);
        let randomDog = dogNames[randomIndex]
        res.status(200).send(randomDog)
    },
    getDogs2: (req,res) => {
          res.status(200).send(dbDogs)

      },
      changeDog: (req, res) => {

      },
      createDog: (req, res) => {
          const {name} = req.body
          let newDog = {
              id: globalID,
              name: name
          }
          dbDogs.push(newDog)
          globalID++
          res.status(200).send(dbDogs)

      },
      deleteDog: (req, res) => {
        let index = dbDogs.findIndex(elem => elem.id === +req.params.id)
          dbDogs.splice(index, 1)

      }
}