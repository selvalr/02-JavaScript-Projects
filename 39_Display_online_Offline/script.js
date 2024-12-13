let offline = document.getElementById('offline');
let online = document.getElementById('online');



// When the device goes offline
window.addEventListener("offline", () => {
    console.log(offline);
    offline.style.background = 'red';  // Set background to red when offline
    online.style.background = '';  // Reset online background when offline
});

// When the device goes online
window.addEventListener("online", () => {
    console.log(offline);
    
    online.style.background = 'green';  // Set background to green when online
    offline.style.display = 'block';  // Reset offline background when online
});
