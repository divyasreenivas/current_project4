let myleads = []
const inputEl = document.getElementById("input-el")
const inputEl2=document.getElementById("input-el-2")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const pEl=document.getElementById("p-el")
const tdEl1=document.getElementById("td-id-1")
const tdEl2=document.getElementById("td-id-2")
const tableBodyEl=document.getElementById("table-body")
const deletebtn =document.getElementById("delete-btn")
const leadsfromlocalstorage =JSON.parse(localStorage.getItem("myleads"))
// console.log(leadsfromlocalstorage)
const tabbtn = document.getElementById("save-btn")

if (leadsfromlocalstorage){
    myleads =leadsfromlocalstorage
    render(myleads)
}
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
    })
function render(leads){
    let tableRows = "";
    for (let i = 0; i < leads.length; i++) {
        tableRows += `
        <tr>
            <td>
                <a target='_blank' href='${leads[i][0]}'>${leads[i][0]}</a>
            </td>
            <td>
                ${leads[i][1]}
            </td>
            <td>
                <button onclick="updateRow(${i})">Update</button>
                <button onclick="deleteRow(${i})">Delete</button>
            </td>
        </tr>`;
    }

        tableBodyEl.innerHTML = tableRows;
}

function updateRow(index){
    const newName=prompt("Enter a new name for this link:")
    if(newName!==null){
        myleads[index][1]=newName
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    }
}

function deleteRow(index){
    myleads.splice(index,1)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
}

deletebtn.addEventListener("dblclick",function(){
      localStorage.clear()
      myleads=[]
      render(myleads)
})

inputbtn.addEventListener("click",function(){
    myleads.push([inputEl.value,inputEl2.value])
    inputEl.value=""
    inputEl2.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    
})


