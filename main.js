const baseURL = 'http://localhost:4000/api/compliment/'

const dogButton = document.getElementById('dogs')
const addDogName = document.querySelector('#dogName')
const dogList = document.querySelector('#dogList')
const dogdelete = document.querySelector('#delete')

const RandomdogName= () => {
    axios.get(`${baseURL}`)
    .then((res) => {
        const dogData = res.data
    //     const dogCard = document.createElement('div')
    //     dogCard.innerHTML= `<h2 id="dogName">
    //     ${dogData}
    //     <button id="delete">delete</button>
    //   </h2>`
        alert(dogData)
        console.log(dogData)
        
        
    })
}
dogButton.addEventListener('click', dogList)

const getDogs2 = () => {
    axios.get(`${baseURL}`)
    .then((res) => {
        const dogList = res.data
        alert(dogList)
    })
}

dogList.addEventListener('click', getDogs2)

const createDog = (str) => {
    axios.post(`${baseURL}`, str)
    .then()
}

addDogName.addEventListener('click', createDog)



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };