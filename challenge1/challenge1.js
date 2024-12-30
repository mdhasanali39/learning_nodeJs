 const {LocalStorage } = require('node-localstorage')
 const localStorage = new LocalStorage('./scratch')

const eventEmitter = require('events');

const emitter = new eventEmitter();


const eventCounts = JSON.parse(localStorage.getItem("eventCounts")) || {
    userLogin: 0,
    userLogout: 0,
    userPurchase: 0,
    profileUpdate: 0
}

// Save to local storage 
localStorage.setItem("eventCounts", JSON.stringify(eventCounts));

// define all events 
emitter.on("userLogin", (loginInfo) =>{
    eventCounts.userLogin++;
    localStorage.setItem("eventCounts", JSON.stringify(eventCounts));
    console.log(`${loginInfo.username} logged in successfully, password: ${loginInfo.password}`)
})
emitter.on("userLogout", (name) =>{
    eventCounts.userLogout++;
    localStorage.setItem("eventCounts", JSON.stringify(eventCounts));
    console.log(name + "Logout successfully")
})
emitter.on("userPurchase", (purchasedData) =>{
    eventCounts.userPurchase++;
    localStorage.setItem("eventCounts", JSON.stringify(eventCounts));
    console.log(`purchased successfully, username: ${purchasedData.username}, product: ${purchasedData.product}, price: ${purchasedData.price}`)
})
emitter.on("profileUpdate", (name) =>{
    eventCounts.profileUpdate++;
    localStorage.setItem("eventCounts", JSON.stringify(eventCounts));
    console.log(name + "Profile updated successfully")
})




// fire all events 
emitter.emit("userLogin", {username: "Rakib Hossen", password: "12345"});
emitter.emit("userPurchase", {username: "Rakib Hossen",product: "Laptop", price: 50000});
emitter.emit("profileUpdate", "Rakib Hossen");
emitter.emit("userLogout", "Rakib Hossen");

// get existing data from local storage
const exitsEventCounts = JSON.parse(localStorage.getItem("eventCounts")) || "";
console.log(exitsEventCounts);

