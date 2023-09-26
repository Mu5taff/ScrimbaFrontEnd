// Firebase Config
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const appSettinngs = {
    databaseURL: "https://playground-17371-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettinngs);
const database = getDatabase(app);
const championsDatabase = ref(database, "champions");

// Global Variables
const publishEl = document.getElementById("publish-btn");
const endorseValue = document.getElementById("input-field");

// Event Listeners
publishEl.addEventListener("click", addEndorsementToDB);
endorseValue.addEventListener("keydown", handleEnterKey);

//Databse reader and writer
onValue(championsDatabase, function(snapshot) {
    const endorseList = document.getElementById("endorseList");
    if(snapshot.exists()){
        clearList(endorseList);
        const data = snapshot.val();
        const arrayData = Object.values(data);
        for(let i = 0; i < arrayData.length; i++ ){
            let endorsement = arrayData[i];
            appendListItems(endorseList, endorsement);
        }    
    }
    else{
        clearList(endorseList);
    } 
})


//Abstracted functions
function addEndorsementToDB() {
    push(championsDatabase, endorseValue.value);
    clearValue(endorseValue);
}

function handleEnterKey(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    publishEl.click();
  }
}

function clearValue(input){
    input.value = "";
}

function clearList(list){
    list.innerHTML = "";
}

function appendListItems(list, item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
}