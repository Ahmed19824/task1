

var but = document.querySelector(".btn1")

var content = document.querySelector(".title1")

var title2 = document.querySelector(".title2")
var but1 = document.querySelector(".btn2")
var title3 = document.querySelector(".title3")
var but3 = document.querySelector(".btn3")
var title4 = document.querySelector(".title4")
var but4 = document.querySelector(".btn4")

var title5 = document.querySelector(".title5")
var but5 = document.querySelector(".btn5")
var title6 = document.querySelector(".title6")
var but6 = document.querySelector(".btn6")
var title7 = document.querySelector(".title7")
var but7 = document.querySelector(".btn7")
var title8 = document.querySelector(".title8")
var btn8 = document.querySelector(".btn8")

but.onclick = () => {
    content.style.display = "block"

}
but.onclick = () => {
    content.style.display = "block"

}

but1.onclick = () => {
    title2.style.display = "block"

}
but3.onclick = () => {
    title3.style.display = "block"

}
but4.onclick = () => {
    title4.style.display = "block"

}
but5.onclick = () => {
    title5.style.display = "block"

}
but6.onclick = () => {
    title6.style.display = "block"

}
but7.onclick = () => {
    title7.style.display = "block"

}
btn8.onclick = () => {
    title8.style.display = "block"

}
let totalPrice = 0

var allProducts = document.querySelectorAll(".allproducts  h4")
var btnp = document.querySelector(".btnp")
var total = document.querySelector(".total")
console.log(allProducts);

allProducts.forEach(function (item) {

    totalPrice += +(item.textContent)


})
console.log(totalPrice);


btnp.onclick = () => {
    total.innerHTML = totalPrice
}
