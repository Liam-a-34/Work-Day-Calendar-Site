let current_day = dayjs().format("dddd, MMMM DD")
const current_day_text = document.querySelector("#current-day");
const nineAmEl = document.querySelector("#nineAm")
const tenAmEl = document.querySelector("#tenAm")
const elevenAmEl = document.querySelector("#elevenAm")
const twelvePmEl = document.querySelector("#twelvePm")
const onePmEl = document.querySelector("#onePm")
const twoPmEl = document.querySelector("#twoPm")
const threePmEl = document.querySelector("#threePm")
const fourPmEl = document.querySelector("#fourPm")
const fivePmEl = document.querySelector("#fivePm")


current_day_text.textContent = current_day;
console.log(current_day)
console.log(dayjs().format("h"))

if (dayjs().format("h") == "9"){
    nineAmEl.setAttribute("style", "background-color: red");
    tenAmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    elevenAmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twelvePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    onePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twoPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "10") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: red")
    elevenAmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twelvePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    onePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twoPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "11") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: red")
    twelvePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    onePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twoPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "12") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: red")
    onePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    twoPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "1") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    onePmEl.setAttribute("style", "background-color: red")
    twoPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "2") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    onePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twoPmEl.setAttribute("style", "background-color: red")
    threePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "3") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    onePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twoPmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    threePmEl.setAttribute("style", "background-color: red")
    fourPmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
} else if (dayjs().format("h") == "4") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    onePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twoPmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    threePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    fourPmEl.setAttribute("style", "background-color: red")
    fivePmEl.setAttribute("style", "background-color: rgb(19, 192, 19)")
}else if (dayjs().format("h") == "5") {
    nineAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)");
    tenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    elevenAmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twelvePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    onePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    twoPmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    threePmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    fourPmEl.setAttribute("style", "background-color: rgb(196, 191, 191)")
    fivePmEl.setAttribute("style", "background-color: red")
}

// let nineInput = nineAmEl.value;
let tenInput = tenAmEl.value;
let elevenInput = elevenAmEl.value;
let twelveInput = twelvePmEl.value;
let oneInput = onePmEl.value;
let twoInput = twoPmEl.value;
let threeInput = threePmEl.value;
let fourInput = fourPmEl.value;
let fiveInput = fivePmEl.value; 

// localStorage.setItem("nineText", nineInput);
localStorage.setItem("tenText", tenInput);
localStorage.setItem("elevenText", elevenInput);
localStorage.setItem("twelveText", twelveInput);
localStorage.setItem("oneText", oneInput);
localStorage.setItem("twoText", twoInput);
localStorage.setItem("threeText", threeInput);
localStorage.setItem("fourText", fourInput);
localStorage.setItem("fiveText", fiveInput);


document.querySelector("#nineButton").addEventListener("click", function(){
    let nineInput = nineAmEl.value;
    localStorage.setItem("nineText", nineInput);
    var content9 = localStorage.getItem("nineText");
    nineAmEl.textContent = content9;
    console.log(content9);
})
document.querySelector("#tenButton").addEventListener("click", function(){
    var content10 = localStorage.getItem("tenText");
    tenAmEl.textContent = content10;
    console.log(content10);
})
document.querySelector("#elevenButton").addEventListener("click", function(){

    elevenAmEl.textContent =  localStorage.getItem("elevenText")
    console.log(localStorage.getItem("elevenText"))
})
document.querySelector("#twelveButton").addEventListener("click", function(){

    twelvePmEl.textContent = localStorage.getItem("twelveText")
    console.log(localStorage.getItem("twelveText"))
})
document.querySelector("#oneButton").addEventListener("click", function(){

    onePmEl.textContent = localStorage.getItem("oneText")
    console.log(localStorage.getItem("oneText"))
})
document.querySelector("#twoButton").addEventListener("click", function(){

    twoPmEl.textContent = localStorage.getItem("twoText")
    console.log(localStorage.getItem("twoText"))
})
document.querySelector("#threeButton").addEventListener("click", function(){

    threePmEl.textContent = localStorage.getItem("threeText")
    console.log(localStorage.getItem("threeText"))
})
document.querySelector("#fourButton").addEventListener("click", function(){

    fourPmEl.textContent = localStorage.getItem("fourText")
    console.log(localStorage.getItem("fourText"))
})
document.querySelector("#fiveButton").addEventListener("click", function(){

    fivePmEl.textContent = localStorage.getItem("fiveText")
    console.log(localStorage.getItem("fiveText"))
})






