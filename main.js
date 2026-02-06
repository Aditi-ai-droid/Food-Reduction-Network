document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
});

    document.addEventListener("DOMContentLoaded", function () {
        const loginBtn = document.getElementById("login");
        const registerBtn = document.getElementById("register");
        const loginForm = document.querySelector(".login-form");
        const registerForm = document.querySelector(".register-form");

        // Remember active form using session storage
        const activeForm = sessionStorage.getItem("activeForm") || "register";
        if (activeForm === "login") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }

        loginBtn.addEventListener("click", function () {
            registerForm.style.opacity = "0";
            setTimeout(function () {
                registerForm.style.display = "none";
                loginForm.style.display = "block";
                sessionStorage.setItem("activeForm", "login");
                setTimeout(() => (loginForm.style.opacity = "1"), 10);
            }, 300);
        });

        registerBtn.addEventListener("click", function () {
            loginForm.style.opacity = "0";
            setTimeout(function () {
                loginForm.style.display = "none";
                registerForm.style.display = "block";
                sessionStorage.setItem("activeForm", "register");
                setTimeout(() => (registerForm.style.opacity = "1"), 10);
            }, 300);
        });

        // Handle form submission redirection
        const signInButtons = document.querySelectorAll(".input-submit");
        signInButtons.forEach((button) =>
            button.addEventListener("click", () => {
                window.location.href = "index.html"; // Update with your homepage URL
            })
        );
    });


// Get the elements
const openSearch = document.getElementById('open-search');
const closeSearch = document.getElementById('close-search');
const searchOverlay = document.getElementById('search-overlay');
const searchIcon = document.querySelector('.search-icon');
const loadingSpinner = document.getElementById('loading-spinner');
const searchInput = document.getElementById('search-input');

// Open search overlay with animation
openSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('hidden');
    setTimeout(() => {
        searchOverlay.classList.add('show');
    }, 10);
});

// Close search overlay with animation
closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('show');
    setTimeout(() => {
        searchOverlay.classList.add('hidden');
    }, 500);  // Delay to allow fade-out animation
});

// Simulate search loading spinner on clicking the search button
searchIcon.addEventListener('click', () => {
    if (searchInput.value !== "") {
        loadingSpinner.classList.remove('hidden');
        setTimeout(() => {
            loadingSpinner.classList.add('hidden');  // Hide spinner after 2 seconds
            alert('Search complete: ' + searchInput.value);  // Simulated search result
        }, 2000);
    }
});

let totalGoal = 100000;
let currentAmount = 0;

function updateDonation() {
    let donationInput = document.getElementById('donation-amount').value;

    if (donationInput && donationInput > 0) {
        currentAmount += parseInt(donationInput);

        if (currentAmount > totalGoal) {
            currentAmount = totalGoal; // Cap at the goal
        }

        // Update progress bar width
        let progressPercent = (currentAmount / totalGoal) * 100;
        document.getElementById('progress-bar').style.width = progressPercent + '%';

        // Update displayed amount
        document.getElementById('current-amount').textContent = `₹${currentAmount}`;

        // Clear input field
        document.getElementById('donation-amount').value = '';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    // Handle login button click
    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        
        // Show login form and hide register form
        loginForm.style.display = "block";
        loginForm.style.opacity = "1";
        registerForm.style.opacity = "0";
        setTimeout(() => {
            registerForm.style.display = "none";
        }, 300); // Match the duration of the transition (0.3s)
    });

    // Handle register button click
    registerBtn.addEventListener('click', () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');

        // Show register form and hide login form
        registerForm.style.display = "block";
        registerForm.style.opacity = "1";
        loginForm.style.opacity = "0";
        setTimeout(() => {
            loginForm.style.display = "none";
        }, 300); // Match the duration of the transition (0.3s)
    });
});

// Parallax Scrolling Effect
document.addEventListener("scroll", function () {
    const layers = document.querySelectorAll(".parallax-layer");
    layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const yOffset = window.pageYOffset * speed;
        layer.style.transform = `translateY(${yOffset}px)`;
    });
});

// Scroll-triggered Animation
const scrollElements = document.querySelectorAll("[data-scroll='fade-up']");
window.addEventListener("scroll", () => {
    scrollElements.forEach((el) => {
        const elementPosition = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight - 100) {
            el.classList.add("active");
        }
    });
});
const progressBar = document.querySelector('.progress-bar');
const donationInfo = document.querySelector('.donation-info');
const goal = 1000; // Total donation goal

document.querySelector('button').addEventListener('click', function () {
    const input = document.querySelector('input');
    const donation = Number(input.value);

    if (donation > 0) {
        const currentRaised = parseInt(progressBar.style.width) * goal / 100 || 0;
        const newRaised = Math.min(currentRaised + donation, goal);
        const percentage = (newRaised / goal) * 100;

        progressBar.style.width = `${percentage}%`;
        donationInfo.innerHTML = `INR ${newRaised} raised out of INR ${goal} goal.`;
        input.value = ''; // Clear input field
    }
});
