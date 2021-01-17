// initialize a variable db
let db;
// create a new db request for a "budget" database
const request = indexedDB.open("budget", 1);
// create object store called "pending" and set autoIncrement to true
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};
//handles onsuccess and checks if the navigator is onLine, if so runs checkDatabase function
request.onsuccess = function (event) {
    db = event.target.result;
    //check if app is online before reading from db
    if (navigator.onLine) {
        checkDatabase();
    } 
};

//handles request errors
request.onerror = function (event) {
    console.log("Error: " + event.target.errorCode);
};
//save a record to the indexedDB
function saveRecord(record) {
    //open a transaction on the pending object store in the budget db with readwrite access
    const transaction = db.transaction(["pending"], "readwrite");
    //access the pending object store
    const store = transaction.objectStore("pending");
    //add a record to the store with add method
    store.add(record);
}
//This posts all the pending transactions to the mongodb when connection is back online
function checkDatabase() {
    //open a transaction on the pending object store in the budget db
    const transaction = db.transaction(["pending"], "readwrite");
    //access the pending object store
    const store = transaction.objectStore("pending");
    //get all records from store and set to a variable
    const getAll = store.getAll();
    //handle onsuccess of store.getAll();
    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(() => {
                    //if successful, open a transaction on your pending db
                    const transaction = db.transaction(["pending"], "readwrite");
                    //access your pending object store
                    const store = transaction.objectStore("pending");
                    //clear all items in your store
                    store.clear();
                });
        }
    };
}

//listen for app coming back online
window.addEventListener("online", checkDatabase);