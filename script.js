let titleChangerButtom = document.getElementById("main-topic-button");
let messageList = document.getElementById("listContainer");
let forms = document.getElementById("form");

titleChangerButtom.addEventListener("click", (event)=> {
    titleChangerButtom.style.display = "none";
    messageList.style.display = "block";
    forms.style.display = "block";

    document.body.style.backgroundColor = "#555555";

    let secondTitle = document.getElementById("second-title")
    secondTitle.innerHTML = ("Welcome to your secret todo list!")

    let info = document.getElementById("info")
    info.innerHTML = `Screen Information:`

    let info1 = document.getElementById("info1")
    info1.innerHTML = `The screen heigh is ${screen.height}`
    
    let info2 = document.getElementById("info2")
    info2.innerHTML = `The screen width is ${screen.width}`

    let mainTopic = document.getElementById("main-topic");

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

    messageList.lastElementChild.style.textDecoration = "underline";
    // .lastChild.style.color = "green"

    // let par = document.getElementById("container").lastChild
    // par.style.color = "green"

    let submit = document.querySelector("#submit");
    submit.addEventListener("click", formAdder)

    let input = document.getElementById('input')
        
    function formAdder(event) {
        // input.attributes.minlength = ​"5"
        
        
        if (input.value.trim() != "" ){
            let inputText = input.value

            let li = document.createElement("li")
            li.innerText = inputText 
            messageList.prepend(li)
        
            input.value = ""
        }
        event.preventDefault()
    }

    titleChanger()
    event.preventDefault()
})

