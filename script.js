let myleads =[]
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
console.log(localStorage.getItem("myleads"))
console.log(myleads)

inputbtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    rendercode()
    console.log(localStorage.getItem("myleads"))
})

function rendercode(){
let listItems =""
for (let i =0 ;i<myleads.length;i++){
    listItems += `
    <li>
       <a target ='_blank' href='${myleads[i]}'> 
       ${ myleads[i]} 
      </a>
     </li>`
    
    console.log(listItems)
}
ulEl.innerHTML=listItems

}
