const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// write your code here

//getElemntbyId - finds the element by its id
const restaurantMenu = document.getElementById("restaurant-menu")


// .querySelector - finds the first element by either its className or id
const detailImage = document.querySelector(".detail-image")

//get querySelectorAll- finds  a group of elements
const divElements = document.querySelectorAll("div")
//console.log(divElements)

// for(let index = 0; index < divElements.length; index++){
//     console.log(divElements[index])

// }

//getElementbyClassName -gets element by className
// const nameElements = document.getElementsByClassName("name")
//  console.log(nameElements[index])

// for(index = 0; index < nameElements.length; index++){
//     console.log(nameElements[index])
// }

// nameElements.forEach((name)=>{
//     console.log(name)

// })

//forloop vs .forEach()
//forloop

// for(let i = 0; i < burgers.length; i++){
//     console.log(burgers[i])
// }

//.forEach()
// divElements.forEach((div)=>{
//     console.log(div)

// })

//  burgers.forEach((burger)=>{
//    console.log(burger.description)

//  })
//  removing an element from the dom
// const headerElement = document.querySelector("header")
// console.log(headerElement)
// headerElement.remove()


//deliverable 1

for(let burger = 0; burger < burgers.length; burger++){
    const imgElement = document.createElement('img')
    imgElement.className = 'burger'
    imgElement.src = burgers[burger].image
    restaurantMenu.appendChild(imgElement)

}
// deliverable 2

otherFoods.forEach((food) => {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)
})

//deliverable 3 
const detailImg = document.getElementsByClassName('detail-image')
detailImage.src = burgers[0].image

//deliverable 4
const nameElement = document.querySelector(".name")
nameElement.textContent = burgers[0].name

//deliverable 5
const discriptionElement = document.querySelector("#description-display")
discriptionElement.textContent = burgers[0].description

//deliverable 6
const restaurantMenuImages = document.querySelectorAll("div, #restaurant-menu , img")

restaurantMenuImages.forEach((image)=>{
    image.style = "border-style: solid; border-color: orange; border-width: 3px"
})

//deliverable 7
const BurgerImage = document.getElementsByClassName('burger')

for(let burger = 0; burger < BurgerImage.length; burger++ ){
    BurgerImage[burger].style.borderColor = "blue"
}