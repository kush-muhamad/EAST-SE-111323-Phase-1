// write your code here

// deliverable 1

const url ='http://localhost:3000/foods'
const restaurantMenu = document.getElementById('restaurant-menu')

fetch(url)
.then(response =>response.json()) //parses the data as response and converts it to json
.then(foods =>{ //stores the value into a variable foods 
    
    displayFoodDetails(foods[0])

   foods.forEach(food => {
    addFoodImageToRestaurantMenu(food)
   });
})
// deliverable 2 and 3
function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement("img")
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)

    // deliverable 6
    imgElement.addEventListener("click",()=>{
        displayFoodDetails(food)

    })

    
}
//deliverable 4 and 5
function displayFoodDetails(food){
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}
