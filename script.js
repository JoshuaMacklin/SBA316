console.log("SBA 316");

let mainTopic = document.getElementById("main-topic")

function titleChanger() {
    setTimeout(()=> {mainTopic.innerHTML = "S"})
    setTimeout(()=> {mainTopic.innerHTML = "SB"}, 1000)
    setTimeout(()=> {mainTopic.innerHTML = "SBA"}, 2000)
    setTimeout(()=> {mainTopic.innerHTML = "SBA 3"}, 3000)
    setTimeout(()=> {mainTopic.innerHTML = "SBA 31"}, 4000)
    setTimeout(()=> {mainTopic.innerHTML = "SBA 316"}, 5000)
    setTimeout(()=> {mainTopic.innerHTML = ":D"}, 6000)
    setTimeout(()=> {titleChanger()}, 7000)

}

titleChanger()

let allLi = document.querySelectorAll("li")
allLi.forEach( (listItem) => {
    listItem.addEventListener("click", () => {
        if (listItem.style.color == "red") {
            listItem.style.color = "grey"
            listItem.style.textDecoration = "line-through"
        } else if (listItem.style.color == "grey") {
            listItem.style.color = "black"
            listItem.style.textDecoration = "none"
        }else {
            listItem.style.color = "red"
            listItem.style.textDecoration = "none"
        }
    })
})
let messageList = document.getElementById("listContainer")
// bottomText.lastChild.style.color = "green"

// let par = document.getElementById("container").lastChild
// par.style.color = "green"

let submit = document.querySelector("#submit");

submit.addEventListener("click", formAdder)

function formAdder(event) {
    let input = document.getElementById('input')
    let inputText = input.value

    let li = document.createElement("li")
    li.innerText = inputText 
    messageList.prepend(li)

    input.value = ""

    event.preventDefault()
}

