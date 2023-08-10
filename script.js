let myleads =["www","divya","sreee"]
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)

inputbtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    console.log(myleads)
})

for (let i =0 ;i<myleads.length;i++){
    ulEl.innerHTML+= "<li>"+myleads[i]+ " " +"</.li>"
}