const formEl = document.getElementById("form-box");
const inputEl = document.querySelector("input");
const closeBtn = document.getElementById("close-btn");
const btnSearch = document.getElementById("btn-search");
const AddedObject = document.querySelector(".answer-box");
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    switch(inputEl.value.toLowerCase()){
        case "car":
            const boxEl = document.createElement("div")
AddedObject.appendChild(boxEl)
const imgBox = document.createElement("div")
boxEl.appendChild(imgBox)
const textBox = document.createElement("div")
boxEl.appendChild(textBox)
const iconBox = document.createElement("div")
textBox.appendChild(iconBox)
const iconEl = document.createElement("p")
iconBox.appendChild(iconEl)
const h1El = document.createElement("h1")
textBox.appendChild(h1El)
const ulEl = document.createElement("ul")
textBox.appendChild(ulEl)
const liEL = document.createElement("li")
ulEl.appendChild(liEL)
const liEL2 = document.createElement("li")
ulEl.appendChild(liEL2)
const pEl = document.createElement("p")
textBox.appendChild(pEl)
h1El.innerText = inputEl.value
liEL.innerText = "This is a type of vehicle to get a destination"
liEL2.innerText = "The synonim is 'transport'"
pEl.innerText = "Example: The road was long, so I got in a car to get the place"
boxEl.className = "main-box"
imgBox.className = "img-box"
textBox.className = "text-box"
h1El.className = "word"
iconEl.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBox.className = "icon-delete"
iconEl.addEventListener("click", () => {
    boxEl.remove();
})
break;
case "president":
        const boxEltwo = document.createElement("div")
AddedObject.appendChild(boxEltwo)
const imgBoxtwo = document.createElement("div")
boxEltwo.appendChild(imgBoxtwo)
const textBoxtwo = document.createElement("div")
boxEltwo.appendChild(textBoxtwo)
const iconBoxtwo = document.createElement("div")
textBoxtwo.appendChild(iconBoxtwo)
const iconEltwo = document.createElement("p")
iconBoxtwo.appendChild(iconEltwo)
const h1Eltwo = document.createElement("h1")
textBoxtwo.appendChild(h1Eltwo)
const ulEltwo = document.createElement("ul")
textBoxtwo.appendChild(ulEltwo)
const liELtwo = document.createElement("li")
ulEltwo.appendChild(liELtwo)
const liEL2two = document.createElement("li")
ulEltwo.appendChild(liEL2two)
const pEltwo = document.createElement("p")
textBoxtwo.appendChild(pEltwo)
h1Eltwo.innerText = inputEl.value
liELtwo.innerText = "This is a person guiding his country"
liEL2two.innerText = "The synonim is 'leader'"
pEltwo.innerText = "Example: we are voting for a new president"
boxEltwo.className = "main-box"
imgBoxtwo.className = "img-box-two"
textBoxtwo.className = "text-box"
h1Eltwo.className = "word"
iconEltwo.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxtwo.className = "icon-delete"
iconEltwo.addEventListener("click", () => {
boxEltwo.remove();
    })
    break;
    case "doctor":
        const boxElthree = document.createElement("div")
AddedObject.appendChild(boxElthree)
const imgBoxthree = document.createElement("div")
boxElthree.appendChild(imgBoxthree)
const textBoxthree = document.createElement("div")
boxElthree.appendChild(textBoxthree)
const iconBoxthree = document.createElement("div")
textBoxthree.appendChild(iconBoxthree)
const iconElthree = document.createElement("p")
iconBoxthree.appendChild(iconElthree)
const h1Elthree = document.createElement("h1")
textBoxthree.appendChild(h1Elthree)
const ulElthree = document.createElement("ul")
textBoxthree.appendChild(ulElthree)
const liELthree = document.createElement("li")
ulElthree.appendChild(liELthree)
const liEL2three = document.createElement("li")
ulElthree.appendChild(liEL2three)
const pElthree = document.createElement("p")
textBoxthree.appendChild(pElthree)
h1Elthree.innerText = inputEl.value
liELthree.innerText = "This is a type of profession"
liEL2three.innerText = "The synonim is 'scientist'"
pElthree.innerText = "Example: My teeth hurted, so I went to a dentist"
boxElthree.className = "main-box"
imgBoxthree.className = "img-box-three"
textBoxthree.className = "text-box"
h1Elthree.className = "word"
iconElthree.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxthree.className = "icon-delete"
iconElthree.addEventListener("click", () => {
boxElthree.remove();
})
break;
case "gun":
    const boxElfour = document.createElement("div")
AddedObject.appendChild(boxElfour)
const imgBoxfour = document.createElement("div")
boxElfour.appendChild(imgBoxfour)
const textBoxfour = document.createElement("div")
boxElfour.appendChild(textBoxfour)
const iconBoxfour = document.createElement("div")
textBoxfour.appendChild(iconBoxfour)
const iconElfour = document.createElement("p")
iconBoxfour.appendChild(iconElfour)
const h1Elfour = document.createElement("h1")
textBoxfour.appendChild(h1Elfour)
const ulElfour = document.createElement("ul")
textBoxfour.appendChild(ulElfour)
const liELfour = document.createElement("li")
ulElfour.appendChild(liELfour)
const liEL2four = document.createElement("li")
ulElfour.appendChild(liEL2four)
const pElfour = document.createElement("p")
textBoxfour.appendChild(pElfour)
h1Elfour.innerText = inputEl.value
liELfour.innerText = "The stuff killing someone"
liEL2four.innerText = "The synonim is 'weapon'"
pElfour.innerText = "Example: Soldiers shoot down with weapons"
boxElfour.className = "main-box"
imgBoxfour.className = "img-box-four"
textBoxfour.className = "text-box"
h1Elfour.className = "word"
iconElfour.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxfour.className = "icon-delete"
iconElfour.addEventListener("click", () => {
boxElfour.remove();
})
break;
case "homeland":
    const boxElfive = document.createElement("div")
AddedObject.appendChild(boxElfive)
const uniteBox = document.createElement("div")
boxElfive.appendChild(uniteBox)
const imgBoxfive = document.createElement("div")
uniteBox.appendChild(imgBoxfive)
const textBoxfive = document.createElement("div")
uniteBox.appendChild(textBoxfive)
const iconBoxfive = document.createElement("div")
textBoxfive.appendChild(iconBoxfive)
const iconElfive = document.createElement("p")
iconBoxfive.appendChild(iconElfive)
const h1Elfive = document.createElement("h1")
textBoxfive.appendChild(h1Elfive)
const ulElfive = document.createElement("ul")
textBoxfive.appendChild(ulElfive)
const liELfive = document.createElement("li")
ulElfive.appendChild(liELfive)
const liEL2five = document.createElement("li")
ulElfive.appendChild(liEL2five)
const pElfive = document.createElement("p")
textBoxfive.appendChild(pElfive)
const video = document.createElement("div")
boxElfive.appendChild(video)
h1Elfive.innerText = inputEl.value
liELfive.innerText = "This is a place, where you were born or when you are a citizen of a country"
liEL2five.innerText = "The synonim is 'home'"
pElfive.innerText = 'Example: My homeland is Uzbekistan '
video.innerHTML = '<div class="video"> <iframe width="500"  height="315" src="https://www.youtube.com/embed/2V-2ABkUREE?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
boxElfive.className = "main-box-video"
imgBoxfive.className = "img-box-five"
textBoxfive.className = "text-box"
h1Elfive.className = "word"
iconElfive.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxfive.className = "icon-delete"
uniteBox.className = "unite-box"
iconElfive.addEventListener("click", () => {
boxElfive.remove();
})
break;
case "laptop":
    const boxElsix = document.createElement("div")
AddedObject.appendChild(boxElsix)
const imgBoxsix = document.createElement("div")
boxElsix.appendChild(imgBoxsix)
const textBoxsix = document.createElement("div")
boxElsix.appendChild(textBoxsix)
const iconBoxsix = document.createElement("div")
textBoxsix.appendChild(iconBoxsix)
const iconElsix = document.createElement("p")
iconBoxsix.appendChild(iconElsix)
const h1Elsix = document.createElement("h1")
textBoxsix.appendChild(h1Elsix)
const ulElsix = document.createElement("ul")
textBoxsix.appendChild(ulElsix)
const liELsix = document.createElement("li")
ulElsix.appendChild(liELsix)
const liEL2six = document.createElement("li")
ulElsix.appendChild(liEL2six)
const pElsix = document.createElement("p")
textBoxsix.appendChild(pElsix)
h1Elsix.innerText = inputEl.value
liELsix.innerText = "This is a type of gadget to play a game or to work"
liEL2six.innerText = "The synonim is 'computer'"
pElsix.innerText = "Example: I surfed the net using my laptop"
boxElsix.className = "main-box"
imgBoxsix.className = "img-box-six"
textBoxsix.className = "text-box"
h1Elsix.className = "word"
iconElsix.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxsix.className = "icon-delete"
iconElsix.addEventListener("click", () => {
boxElsix.remove();
})
break;
case "supermarket":
    const boxElseven = document.createElement("div")
AddedObject.appendChild(boxElseven)
const imgBoxseven = document.createElement("div")
boxElseven.appendChild(imgBoxseven)
const textBoxseven = document.createElement("div")
boxElseven.appendChild(textBoxseven)
const iconBoxseven = document.createElement("div")
textBoxseven.appendChild(iconBoxseven)
const iconElseven = document.createElement("p")
iconBoxseven.appendChild(iconElseven)
const h1Elseven = document.createElement("h1")
textBoxseven.appendChild(h1Elseven)
const ulElseven = document.createElement("ul")
textBoxseven.appendChild(ulElseven)
const liELseven = document.createElement("li")
ulElseven.appendChild(liELseven)
const liEL2seven = document.createElement("li")
ulElseven.appendChild(liEL2seven)
const pElseven = document.createElement("p")
textBoxseven.appendChild(pElseven)
h1Elseven.innerText = inputEl.value
liELseven.innerText = "This is a place, where you are able to buy a product "
liEL2seven.innerText = "The synonim is 'shop'"
pElseven.innerText = "Example: we buy stuff in the local market"
boxElseven.className = "main-box"
imgBoxseven.className = "img-box-seven"
textBoxseven.className = "text-box"
h1Elseven.className = "word"
iconElseven.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxseven.className = "icon-delete"
iconElseven.addEventListener("click", () => {
boxElseven.remove();
})
break;
case "plane":
    const boxEleight = document.createElement("div")
AddedObject.appendChild(boxEleight)
const imgBoxeight = document.createElement("div")
boxEleight.appendChild(imgBoxeight)
const textBoxeight = document.createElement("div")
boxEleight.appendChild(textBoxeight)
const iconBoxeight = document.createElement("div")
textBoxeight.appendChild(iconBoxeight)
const iconEleight = document.createElement("p")
iconBoxeight.appendChild(iconEleight)
const h1Eleight = document.createElement("h1")
textBoxeight.appendChild(h1Eleight)
const ulEleight = document.createElement("ul")
textBoxeight.appendChild(ulEleight)
const liELeight = document.createElement("li")
ulEleight.appendChild(liELeight)
const liEL2eight = document.createElement("li")
ulEleight.appendChild(liEL2eight)
const pEleight = document.createElement("p")
textBoxeight.appendChild(pEleight)
h1Eleight.innerText = inputEl.value
liELeight.innerText = "This is a type of vehicle to get a destination"
liEL2eight.innerText = "The synonim is 'airplane'"
pEleight.innerText = "Example: I got on a plane to fly to Australia"
boxEleight.className = "main-box"
imgBoxeight.className = "img-box-eight"
textBoxeight.className = "text-box"
h1Eleight.className = "word"
iconEleight.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxeight.className = "icon-delete"
iconEleight.addEventListener("click", () => {
boxEleight.remove();
})
break;
case "football":
    const boxElnine = document.createElement("div")
AddedObject.appendChild(boxElnine)
const imgBoxnine = document.createElement("div")
boxElnine.appendChild(imgBoxnine)
const textBoxnine = document.createElement("div")
boxElnine.appendChild(textBoxnine)
const iconBoxnine = document.createElement("div")
textBoxnine.appendChild(iconBoxnine)
const iconElnine = document.createElement("p")
iconBoxnine.appendChild(iconElnine)
const h1Elnine = document.createElement("h1")
textBoxnine.appendChild(h1Elnine)
const ulElnine = document.createElement("ul")
textBoxnine.appendChild(ulElnine)
const liELnine = document.createElement("li")
ulElnine.appendChild(liELnine)
const liEL2nine = document.createElement("li")
ulElnine.appendChild(liEL2nine)
const pElnine = document.createElement("p")
textBoxnine.appendChild(pElnine)
h1Elnine.innerText = inputEl.value
liELnine.innerText = "This is a type of sport"
liEL2nine.innerText = "The synonim is 'soccer'"
pElnine.innerText = "Example: I made a descision to play football"
boxElnine.className = "main-box"
imgBoxnine.className = "img-box-nine"
textBoxnine.className = "text-box"
h1Elnine.className = "word"
iconElnine.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxnine.className = "icon-delete"
iconElnine.addEventListener("click", () => {
boxElnine.remove();
})
break;
case "food":
    const boxElten = document.createElement("div")
AddedObject.appendChild(boxElten)
const imgBoxten = document.createElement("div")
boxElten.appendChild(imgBoxten)
const textBoxten = document.createElement("div")
boxElten.appendChild(textBoxten)
const iconBoxten = document.createElement("div")
textBoxten.appendChild(iconBoxten)
const iconElten = document.createElement("p")
iconBoxten.appendChild(iconElten)
const h1Elten = document.createElement("h1")
textBoxten.appendChild(h1Elten)
const ulElten = document.createElement("ul")
textBoxten.appendChild(ulElten)
const liELten = document.createElement("li")
ulElten.appendChild(liELten)
const liEL2ten = document.createElement("li")
ulElten.appendChild(liEL2ten)
const pElten = document.createElement("p")
textBoxten.appendChild(pElten)
h1Elten.innerText = inputEl.value
liELten.innerText = "This makes you fed up, when you are hungry"
liEL2ten.innerText = "The synonim is 'nourishment'"
pElten.innerText = "Example: I am a big fan of eating warm food"
boxElten.className = "main-box"
imgBoxten.className = "img-box-ten"
textBoxten.className = "text-box"
h1Elten.className = "word"
iconElten.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxten.className = "icon-delete"
iconElten.addEventListener("click", () => {
boxElten.remove();
})
}
closeBtn.addEventListener("click", () => {
    inputEl.value = "";
})})
const searchEl = document.getElementById("btn-reaserch");
searchEl.addEventListener("click", () => {
    switch(inputEl.value.toLowerCase()){
        case "car":
            const boxEl = document.createElement("div")
AddedObject.appendChild(boxEl)
const imgBox = document.createElement("div")
boxEl.appendChild(imgBox)
const textBox = document.createElement("div")
boxEl.appendChild(textBox)
const iconBox = document.createElement("div")
textBox.appendChild(iconBox)
const iconEl = document.createElement("p")
iconBox.appendChild(iconEl)
const h1El = document.createElement("h1")
textBox.appendChild(h1El)
const ulEl = document.createElement("ul")
textBox.appendChild(ulEl)
const liEL = document.createElement("li")
ulEl.appendChild(liEL)
const liEL2 = document.createElement("li")
ulEl.appendChild(liEL2)
const pEl = document.createElement("p")
textBox.appendChild(pEl)
h1El.innerText = inputEl.value
liEL.innerText = "This is a type of vehicle to get a destination"
liEL2.innerText = "The synonim is 'transport'"
pEl.innerText = "Example: The road was long, so I got in a car to get the place"
boxEl.className = "main-box"
imgBox.className = "img-box"
textBox.className = "text-box"
h1El.className = "word"
iconEl.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBox.className = "icon-delete"
iconEl.addEventListener("click", () => {
    boxEl.remove();
})
break;
case "president":
        const boxEltwo = document.createElement("div")
AddedObject.appendChild(boxEltwo)
const imgBoxtwo = document.createElement("div")
boxEltwo.appendChild(imgBoxtwo)
const textBoxtwo = document.createElement("div")
boxEltwo.appendChild(textBoxtwo)
const iconBoxtwo = document.createElement("div")
textBoxtwo.appendChild(iconBoxtwo)
const iconEltwo = document.createElement("p")
iconBoxtwo.appendChild(iconEltwo)
const h1Eltwo = document.createElement("h1")
textBoxtwo.appendChild(h1Eltwo)
const ulEltwo = document.createElement("ul")
textBoxtwo.appendChild(ulEltwo)
const liELtwo = document.createElement("li")
ulEltwo.appendChild(liELtwo)
const liEL2two = document.createElement("li")
ulEltwo.appendChild(liEL2two)
const pEltwo = document.createElement("p")
textBoxtwo.appendChild(pEltwo)
h1Eltwo.innerText = inputEl.value
liELtwo.innerText = "This is a person guiding his country"
liEL2two.innerText = "The synonim is 'leader'"
pEltwo.innerText = "Example: we are voting for a new president"
boxEltwo.className = "main-box"
imgBoxtwo.className = "img-box-two"
textBoxtwo.className = "text-box"
h1Eltwo.className = "word"
iconEltwo.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxtwo.className = "icon-delete"
iconEltwo.addEventListener("click", () => {
boxEltwo.remove();
    })
    break;
    case "doctor":
        const boxElthree = document.createElement("div")
AddedObject.appendChild(boxElthree)
const imgBoxthree = document.createElement("div")
boxElthree.appendChild(imgBoxthree)
const textBoxthree = document.createElement("div")
boxElthree.appendChild(textBoxthree)
const iconBoxthree = document.createElement("div")
textBoxthree.appendChild(iconBoxthree)
const iconElthree = document.createElement("p")
iconBoxthree.appendChild(iconElthree)
const h1Elthree = document.createElement("h1")
textBoxthree.appendChild(h1Elthree)
const ulElthree = document.createElement("ul")
textBoxthree.appendChild(ulElthree)
const liELthree = document.createElement("li")
ulElthree.appendChild(liELthree)
const liEL2three = document.createElement("li")
ulElthree.appendChild(liEL2three)
const pElthree = document.createElement("p")
textBoxthree.appendChild(pElthree)
h1Elthree.innerText = inputEl.value
liELthree.innerText = "This is a type of profession"
liEL2three.innerText = "The synonim is 'scientist'"
pElthree.innerText = "Example: My teeth hurted, so I went to a dentist"
boxElthree.className = "main-box"
imgBoxthree.className = "img-box-three"
textBoxthree.className = "text-box"
h1Elthree.className = "word"
iconElthree.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxthree.className = "icon-delete"
iconElthree.addEventListener("click", () => {
boxElthree.remove();
})
break;
case "gun":
    const boxElfour = document.createElement("div")
AddedObject.appendChild(boxElfour)
const imgBoxfour = document.createElement("div")
boxElfour.appendChild(imgBoxfour)
const textBoxfour = document.createElement("div")
boxElfour.appendChild(textBoxfour)
const iconBoxfour = document.createElement("div")
textBoxfour.appendChild(iconBoxfour)
const iconElfour = document.createElement("p")
iconBoxfour.appendChild(iconElfour)
const h1Elfour = document.createElement("h1")
textBoxfour.appendChild(h1Elfour)
const ulElfour = document.createElement("ul")
textBoxfour.appendChild(ulElfour)
const liELfour = document.createElement("li")
ulElfour.appendChild(liELfour)
const liEL2four = document.createElement("li")
ulElfour.appendChild(liEL2four)
const pElfour = document.createElement("p")
textBoxfour.appendChild(pElfour)
h1Elfour.innerText = inputEl.value
liELfour.innerText = "The stuff killing someone"
liEL2four.innerText = "The synonim is 'weapon'"
pElfour.innerText = "Example: Soldiers shoot down with weapons"
boxElfour.className = "main-box"
imgBoxfour.className = "img-box-four"
textBoxfour.className = "text-box"
h1Elfour.className = "word"
iconElfour.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxfour.className = "icon-delete"
iconElfour.addEventListener("click", () => {
boxElfour.remove();
})
break;
case "homeland":
    const boxElfive = document.createElement("div")
AddedObject.appendChild(boxElfive)
const uniteBox = document.createElement("div")
boxElfive.appendChild(uniteBox)
const imgBoxfive = document.createElement("div")
uniteBox.appendChild(imgBoxfive)
const textBoxfive = document.createElement("div")
uniteBox.appendChild(textBoxfive)
const iconBoxfive = document.createElement("div")
textBoxfive.appendChild(iconBoxfive)
const iconElfive = document.createElement("p")
iconBoxfive.appendChild(iconElfive)
const h1Elfive = document.createElement("h1")
textBoxfive.appendChild(h1Elfive)
const ulElfive = document.createElement("ul")
textBoxfive.appendChild(ulElfive)
const liELfive = document.createElement("li")
ulElfive.appendChild(liELfive)
const liEL2five = document.createElement("li")
ulElfive.appendChild(liEL2five)
const pElfive = document.createElement("p")
textBoxfive.appendChild(pElfive)
const video = document.createElement("div")
boxElfive.appendChild(video)
h1Elfive.innerText = inputEl.value
liELfive.innerText = "This is a place, where you were born or when you are a citizen of a country"
liEL2five.innerText = "The synonim is 'home'"
pElfive.innerText = 'Example: My homeland is Uzbekistan '
video.innerHTML = '<div class="video"> <iframe width="500"  height="315" src="https://www.youtube.com/embed/2V-2ABkUREE?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
boxElfive.className = "main-box-video"
imgBoxfive.className = "img-box-five"
textBoxfive.className = "text-box"
h1Elfive.className = "word"
iconElfive.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxfive.className = "icon-delete"
uniteBox.className = "unite-box"
iconElfive.addEventListener("click", () => {
boxElfive.remove();
})
break;
case "laptop":
    const boxElsix = document.createElement("div")
AddedObject.appendChild(boxElsix)
const imgBoxsix = document.createElement("div")
boxElsix.appendChild(imgBoxsix)
const textBoxsix = document.createElement("div")
boxElsix.appendChild(textBoxsix)
const iconBoxsix = document.createElement("div")
textBoxsix.appendChild(iconBoxsix)
const iconElsix = document.createElement("p")
iconBoxsix.appendChild(iconElsix)
const h1Elsix = document.createElement("h1")
textBoxsix.appendChild(h1Elsix)
const ulElsix = document.createElement("ul")
textBoxsix.appendChild(ulElsix)
const liELsix = document.createElement("li")
ulElsix.appendChild(liELsix)
const liEL2six = document.createElement("li")
ulElsix.appendChild(liEL2six)
const pElsix = document.createElement("p")
textBoxsix.appendChild(pElsix)
h1Elsix.innerText = inputEl.value
liELsix.innerText = "This is a type of gadget to play a game or to work"
liEL2six.innerText = "The synonim is 'computer'"
pElsix.innerText = "Example: I surfed the net using my laptop"
boxElsix.className = "main-box"
imgBoxsix.className = "img-box-six"
textBoxsix.className = "text-box"
h1Elsix.className = "word"
iconElsix.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxsix.className = "icon-delete"
iconElsix.addEventListener("click", () => {
boxElsix.remove();
})
break;
case "supermarket":
    const boxElseven = document.createElement("div")
AddedObject.appendChild(boxElseven)
const imgBoxseven = document.createElement("div")
boxElseven.appendChild(imgBoxseven)
const textBoxseven = document.createElement("div")
boxElseven.appendChild(textBoxseven)
const iconBoxseven = document.createElement("div")
textBoxseven.appendChild(iconBoxseven)
const iconElseven = document.createElement("p")
iconBoxseven.appendChild(iconElseven)
const h1Elseven = document.createElement("h1")
textBoxseven.appendChild(h1Elseven)
const ulElseven = document.createElement("ul")
textBoxseven.appendChild(ulElseven)
const liELseven = document.createElement("li")
ulElseven.appendChild(liELseven)
const liEL2seven = document.createElement("li")
ulElseven.appendChild(liEL2seven)
const pElseven = document.createElement("p")
textBoxseven.appendChild(pElseven)
h1Elseven.innerText = inputEl.value
liELseven.innerText = "This is a place, where you are able to buy a product "
liEL2seven.innerText = "The synonim is 'shop'"
pElseven.innerText = "Example: we buy stuff in the local market"
boxElseven.className = "main-box"
imgBoxseven.className = "img-box-seven"
textBoxseven.className = "text-box"
h1Elseven.className = "word"
iconElseven.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxseven.className = "icon-delete"
iconElseven.addEventListener("click", () => {
boxElseven.remove();
})
break;
case "plane":
    const boxEleight = document.createElement("div")
AddedObject.appendChild(boxEleight)
const imgBoxeight = document.createElement("div")
boxEleight.appendChild(imgBoxeight)
const textBoxeight = document.createElement("div")
boxEleight.appendChild(textBoxeight)
const iconBoxeight = document.createElement("div")
textBoxeight.appendChild(iconBoxeight)
const iconEleight = document.createElement("p")
iconBoxeight.appendChild(iconEleight)
const h1Eleight = document.createElement("h1")
textBoxeight.appendChild(h1Eleight)
const ulEleight = document.createElement("ul")
textBoxeight.appendChild(ulEleight)
const liELeight = document.createElement("li")
ulEleight.appendChild(liELeight)
const liEL2eight = document.createElement("li")
ulEleight.appendChild(liEL2eight)
const pEleight = document.createElement("p")
textBoxeight.appendChild(pEleight)
h1Eleight.innerText = inputEl.value
liELeight.innerText = "This is a type of vehicle to get a destination"
liEL2eight.innerText = "The synonim is 'airplane'"
pEleight.innerText = "Example: I got on a plane to fly to Australia"
boxEleight.className = "main-box"
imgBoxeight.className = "img-box-eight"
textBoxeight.className = "text-box"
h1Eleight.className = "word"
iconEleight.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxeight.className = "icon-delete"
iconEleight.addEventListener("click", () => {
boxEleight.remove();
})
break;
case "football":
    const boxElnine = document.createElement("div")
AddedObject.appendChild(boxElnine)
const imgBoxnine = document.createElement("div")
boxElnine.appendChild(imgBoxnine)
const textBoxnine = document.createElement("div")
boxElnine.appendChild(textBoxnine)
const iconBoxnine = document.createElement("div")
textBoxnine.appendChild(iconBoxnine)
const iconElnine = document.createElement("p")
iconBoxnine.appendChild(iconElnine)
const h1Elnine = document.createElement("h1")
textBoxnine.appendChild(h1Elnine)
const ulElnine = document.createElement("ul")
textBoxnine.appendChild(ulElnine)
const liELnine = document.createElement("li")
ulElnine.appendChild(liELnine)
const liEL2nine = document.createElement("li")
ulElnine.appendChild(liEL2nine)
const pElnine = document.createElement("p")
textBoxnine.appendChild(pElnine)
h1Elnine.innerText = inputEl.value
liELnine.innerText = "This is a type of sport"
liEL2nine.innerText = "The synonim is 'soccer'"
pElnine.innerText = "Example: I made a descision to play football"
boxElnine.className = "main-box"
imgBoxnine.className = "img-box-nine"
textBoxnine.className = "text-box"
h1Elnine.className = "word"
iconElnine.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxnine.className = "icon-delete"
iconElnine.addEventListener("click", () => {
boxElnine.remove();
})
break;
case "food":
    const boxElten = document.createElement("div")
AddedObject.appendChild(boxElten)
const imgBoxten = document.createElement("div")
boxElten.appendChild(imgBoxten)
const textBoxten = document.createElement("div")
boxElten.appendChild(textBoxten)
const iconBoxten = document.createElement("div")
textBoxten.appendChild(iconBoxten)
const iconElten = document.createElement("p")
iconBoxten.appendChild(iconElten)
const h1Elten = document.createElement("h1")
textBoxten.appendChild(h1Elten)
const ulElten = document.createElement("ul")
textBoxten.appendChild(ulElten)
const liELten = document.createElement("li")
ulElten.appendChild(liELten)
const liEL2ten = document.createElement("li")
ulElten.appendChild(liEL2ten)
const pElten = document.createElement("p")
textBoxten.appendChild(pElten)
h1Elten.innerText = inputEl.value
liELten.innerText = "This makes you fed up, when you are hungry"
liEL2ten.innerText = "The synonim is 'nourishment'"
pElten.innerText = "Example: I am a big fan of eating warm food"
boxElten.className = "main-box"
imgBoxten.className = "img-box-ten"
textBoxten.className = "text-box"
h1Elten.className = "word"
iconElten.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
iconBoxten.className = "icon-delete"
iconElten.addEventListener("click", () => {
boxElten.remove();
})
}
closeBtn.addEventListener("click", () => {
    inputEl.value = "";
})
})