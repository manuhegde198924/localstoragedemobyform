document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("user-form");
    const userCard = document.getElementById("user-card");
    const themeSelector = document.getElementById("theme");

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const village = document.getElementById("village").value;
        const city = document.getElementById("city").value;

        const userData = {
            name,
            phone,
            village,
            city,
        };

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Display user data
        displayUserData(userData);
    });

    themeSelector.addEventListener("change", function () {
        const selectedTheme = themeSelector.value;
        document.body.className = selectedTheme;
    });

    // Check if user data exists in local storage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
        const userData = JSON.parse(storedData);
        displayUserData(userData);
    }
});

function displayUserData(data) {
    const userCard = document.getElementById("user-card");
    userCard.style.display = "block";
    userCard.innerHTML = `
        <h2>User Card</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone Number:</strong> ${data.phone}</p>
        <p><strong>Village:</strong> ${data.village}</p>
        <p><strong>City:</strong> ${data.city}</p>
    `;
}
function darkTheme() {
    document.getElementById('MyPage').style.backgroundColor = "black";
    document.getElementById('MyPage').style.color = "white";
  }

  function lightTheme() {
    document.getElementById('MyPage').style.backgroundColor = "lightgrey";
    document.getElementById('MyPage').style.color = "darkred";
  }