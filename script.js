let myleads = []
let EmptyArray = []
let inputEl = document.getElementById("input-el")
// let newlead = "www.niceleads.com"
let listEl = document.getElementById("list")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const buy = document.getElementById("buy")
// localStorage.setItem("myleads","www.google.com")
// localStorage.setItem("sahil","www.youtube.com")
// localStorage.clear()

function getLeads() {
    // JSON.parse(myleads)
    // console.log(leadsFromLS)
}

const leadsFromLS = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLS)
if (leadsFromLS) {
    console.log("the value of leads is truthy")
    myleads = leadsFromLS
    renderLeads()
} else {
    console.log("there is nothing in myLeads")
    myleads = EmptyArray
}

//----------------------------------------------------------------Double clicled function started
let lastClick = 0;
deleteBtn.addEventListener('click', function(e) {
    const currentTime = new Date().getTime();
    const clickTimeDiff = currentTime - lastClick;
    
    if (clickTimeDiff < 300) { // there is a 300ms buffer time periood for double click
        console.log('Double click detected!');
        // double click use start here.
        deletButtonFunc()
    }
    
    lastClick = currentTime;
});
//------------------------------------------------------------------double clicled function ended

function deletButtonFunc(){
    localStorage.clear()
    myleads = []
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)

    localStorage.setItem("myleads", JSON.stringify(myleads))
    console.log(localStorage.getItem("myleads"))
    // console.log(localStorage.getItem("sahil"))
    // localStorage.clear()

    renderLeads()
    // getLeads()
})

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myleads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myleads[i]}'>
            ${myleads[i]}
            </a>
        </li>
        `

        console.log("render the whole list")
    }
    listEl.innerHTML = listItems
    inputEl.value = ''
}