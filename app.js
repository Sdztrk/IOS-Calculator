

//Selectors

const items = document.getElementsByTagName("button")
const screen = document.querySelector(".screen")
console.log(items)
console.log(typeof items)


// converting items to an array

const itemsArray = Array.from(items)


//addidng eventlisteners to each button

const addingEventListeners = () => {

    itemsArray.map((e) => {
        e.addEventListener("click", () => {
            if (!e.textContent.includes("=")) {
                screen.textContent += e.textContent
            }
            if (e.textContent.includes("+/-")){
                let textContent = screen.textContent.slice(0,-3)
                textContent = eval(textContent*(-1))
                screen.textContent = textContent
                console.log(textContent)
            }
            if(e.textContent.includes(".")) {
                console.log(e.textContent)
            }
            
        })
    })
}

addingEventListeners()



//adding calculation for sum division multiplication
const sum = (number1,number2 ) =>  number1 + number2;
const division = (number1,number2 ) =>  number1 / number2;
const multiplication = (number1,number2 ) =>  number1 * number2;
const subtraction = (number1,number2 ) =>  number1 - number2;



//adding eventlistener to the equal button
const equal = document.querySelector(".item20")

equal.addEventListener("click", (number1, number2, calculation ) => {
    console.log(screen.textContent)
    const result = eval(screen.textContent)
    console.log(result)
    screen.textContent = result
    // number1 = parseInt(screen.textContent)
    // number2 = parseInt(screen.textContent)
    // calculation = screen.textContent
    // if (calculation.includes("+")) {
    //     screen.textContent = sum(number1,number2)
    //     console.log(number1)
    //     console.log(number2)
    // }
    // else if (calculation.includes("/")) {
    //     screen.textContent = division(number1,number2)
    // }
    // else if (calculation.includes("*")) {
    //     screen.textContent = multiplication(number1,number2)
    // }
    // else if (calculation.includes("-")) {
    //     screen.textContent = subtraction(number1,number2)
    // }
} )

//adding eventlistener to the clear button
const clear = document.querySelector(".item2")
clear.addEventListener("click", () => {
    screen.textContent = ""
})








// const screen = document.querySelector(".screen")

// const displayButton = () => {
//     console.log(items)

// }

// displayButton()





// screen.textContent = ""

// const item14 = document.querySelector(".item14")
// item14.textContent

// item14.addEventListener("click", () => {
//     screen.textContent += item14.textContent
//     console.log("sth")
// })


// const addClickListenerToNumbers = () => {
//     container.map((e) => {

//     })
// }