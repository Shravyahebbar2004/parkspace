document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const mainContent = document.getElementById("main-content");
    const loginContainer = document.getElementById("login-container");
    const statusDisplay = document.getElementById("status");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        if (role === "security") {
            alert("Access denied for security guards.");
            return;
        }

        if (username && password && role) {
            loginContainer.style.display = "none";
            mainContent.style.display = "flex";
            loadParkingSpots(role);
        } else {
            alert("Please fill in all fields.");
        }
    });

    function loadParkingSpots(role) {
        const parkingSpots = [
            { id: 1, top: '50px', left: '50px', status: 'available', safety: 'safe' },
            { id: 2, top: '100px', left: '150px', status: 'occupied', safety: 'safe' },
            { id: 3, top: '200px', left: '250px', status: 'available', safety: 'unsafe' },
            // More spots can be added here
        ];

        const map = document.getElementById("map");

        parkingSpots.forEach(spot => {
            const spotElement = document.createElement("div");
            spotElement.className = "parking-spot";
            if (spot.status === 'occupied') {
                spotElement.classList.add("occupied");
            } else if (spot.safety === 'safe') {
                spotElement.classList.add("safe");
            }
            spotElement.style.top = spot.top;
            spotElement.style.left = spot.left;
            spotElement.addEventListener("click", () => {
                statusDisplay.textContent = `Spot ${spot.id} is ${spot.status} and ${spot.safety}.`;
            });
            map.appendChild(spotElement);
        });
    }
});
