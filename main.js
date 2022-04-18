//the base url for the server
const baseURL = 'http://localhost:4000/api'

//for the random dog arr alert
const randomButton = document.getElementById('dogs')


//the form logic from html
const addDog = document.querySelector('#addDog')
const dogDisplay = document.getElementById('doglist')
const editForm = document.getElementsByClassName('edit-dogs')
const gotcha = document.getElementById('gotcha')


//removes previous obj and makes new ones 
const handleDisplay = (arr) => {
    dogDisplay.innerHTML = ""
    console.log('hello')

    for(let i =0; i< arr.length; i++){
        displayDogs(arr[i])
    }
}

//creates the html dog elements from the data
const displayDogs = (dog) => {
    console.log(dog)
    let dogContainer = document.createElement("div")
    dogContainer.innerHTML = `<h2>name:</h2> <p>${dog.name}</p>
    <h2>traininglvl</h2> <p>${dog.trainingLvl}</p>
    <h2>breed</h2> <p>${dog.breed}</p>
    <button class="edit-dog-button" id="dog-id${dog.id}">edit</button>
    <button class="delete-dog-button" id="delete-id${dog.id}">delete</button>
    `
    
    console.log(dogDisplay)
    // dogDisplay.innerHTML = dogContainer
    dogDisplay.appendChild(dogContainer)
}
//get dogs from server and render them

const getDogs2 = () => {
    axios.get(`${baseURL}/dbdogs`)
    .then((res) => {
        // console.log(res)
       handleDisplay(res.data)
        }
        )
    .catch(err => console.log(err))
}

//adding a dog obj to the server and calling a function to render the data
const createDog = (e) => {
    e.preventDefault()
    // taking the value from the input fields 
    const addDog = {
        dogName: document.getElementById('new-name').value,
        trainLvl: document.getElementById('new-lvl').value,
        breed: document.getElementById('new-breed').value
    }
    //moving the obj to the sever and invocing the rendering display with handleDisplay
    axios.post(`${baseURL}/dbdogs`, addDog)
    .then((res) => {
        handleDisplay(res.data)
    })
    .catch(err => console.log(err))
    
    //makes the input fields clear when they enter info
    // document.getElementById('new-name').value = ""
    // document.getElementById('new-lvl').value = ""
    // document.getElementById('new-breed').value = ""
}

addDog.addEventListener('submit', createDog)



const editDogs = dog => {
    const neweditForm = document.createElement("form")
    neweditForm.className = 'edit-form'
    neweditForm.innerHTML = `
              <input id='name-input' placeholder="name" class="form-input" value="${dog.name}"/>
              <input id='trainLvl-input' placeholder="lvl" class="form-input" value="${dog.trainingLvl}"/>
              <input id='breed-input' placeholder="breed" class="form-input" value="${dog.breed}"/>
              <button>save changes</button>
      `
  
    gotcha.innerHTML = neweditForm
  
    neweditForm.addEventListener("submit", e => {
      e.preventDefault()
  
      let updates = {
        name: document.getElementById("name-input").value,
        trainingLvl: document.getElementById("trainingLvl-input").value,
        breed: document.getElementById("breed-input").value,
      }
  
      axios
        .put(`http://localhost:4000/api/dbDogs/${dog.id}`, updates)
        .then(res => {
          handleDisplay(res.data)
          editForm.remove()
        })
        .catch(err => console.log(err))
    })
  }

  const deletedog = (id) => {
      
  }


//the button functions to trigger alerts 
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};

document.getElementById("fortuneButton").addEventListener('click', () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
});

const RandomdogName= () => {
    axios.get(`${baseURL}/random/`)
    .then((res) => {
        const dogData = res.data
        alert(dogData)
        // console.log(dogData)
        
        
    })
}
randomButton.addEventListener('click', RandomdogName)

//function to call the dogs list to the page
getDogs2()



//leave for now not sure if im going to use it later.