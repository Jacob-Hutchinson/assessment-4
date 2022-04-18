
module.exports = {
    
    compliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },

      fortune: (req, res) => {
          const fortunes = ['you will win the lottery', 'you will build the next big thing', 'you will recive good news', 'you will be very lucky', 'good things are in store for you'];

          let randomIndex = Math.floor(Math.random() * fortunes.length);
          let randomFortune = fortunes[randomIndex];
        
          res.status(200).send(randomFortune);
      }
}

