const API = 'http://localhost:3000/foods'
const restaurantMenu = document.getElementById('restaurant-menu')

fetch(API)
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    addFoodImageToRestaurantMenu(newFood)

    // write your code here

    // lecture notes 
//     - [ ] Understand how to send a `POST` request

// - [ ] Explain the difference between optimistic and pessimistic rendering
//when you refresh the page the new data added goes away - optimistic
//when you refresh the page the new data persists - pessimistic rendering 

    fetch(API, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newFood)
    })
    .then(response => {
        if(response.ok === true){
            alert(" Success: New Food added Succesfully")
        }
        else{
            alert("Error: Unable to add new Food")
        }
        
    })

    newFoodForm.reset()

})

// example of a post request



    
