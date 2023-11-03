document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const findFoodButton = document.getElementById("findFoodButton");
    const results = document.getElementById("results");

    findFoodButton.addEventListener("click", function () {
        const location = locationInput.value;
        if (location) {
            // Get the user's geolocation
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = "YOUR_YELP_API_KEY";

                    // Make an API request to Yelp
                    fetch(`https://api.yelp.com/v3/businesses/search?term=food&latitude=${latitude}&longitude=${longitude}`, {
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            // Display the results
                            displayResults(data.businesses);
                        })
                        .catch((error) => {
                            console.error("Error fetching data: " + error);
                        });
                });
            } else {
                alert("Geolocation is not supported in your browser.");
            }
        } else {
            alert("Please enter a location.");
        }
    });

    function displayResults(businesses) {
        results.innerHTML = "";
        if (businesses.length === 0) {
            results.innerHTML = "No food places found near your location.";
        } else {
            businesses.forEach((business) => {
                const businessInfo = document.createElement("div");
                businessInfo.innerHTML = `
                    <h2>${business.name}</h2>
                    <p>Rating: ${business.rating}</p>
                    <p>Address: ${business.location.address1}</p>
                `;
                results.appendChild(businessInfo);
            });
        }
    }
});
findFoodButton.addEventListener("click", function () {
    // Display a loading indicator
    results.innerHTML = "Searching for food near your location...";

    const location = locationInput.value;
    if (location) {
        // ... (rest of the code remains the same)
    } else {
        alert("Please enter a location.");
        results.innerHTML = "";
    }
});
navigator.geolocation.getCurrentPosition(
    function (position) {
        // ... (rest of the geolocation code)
    },
    function (error) {
        alert("Geolocation error: " + error.message);
    }
);
