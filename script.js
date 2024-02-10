// Mock data for skill listings and user profiles
let skills = [
    { id: 1, name: 'Web Development', user: 'User1' },
    { id: 2, name: 'Graphic Design', user: 'User2' }
    // Add more skills as needed
];

let users = [];

// Function to display skill listings
function displaySkills() {
    const skillListings = document.getElementById('skill-listings');
    skillListings.innerHTML = '';
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.innerHTML = `<p>${skill.name} - Offered by ${skill.user}</p>`;
        skillListings.appendChild(skillElement);
    });
}

// Function to display user profiles
function displayUsers() {
    const userProfileSection = document.getElementById('user-profile-section');
    userProfileSection.innerHTML = '';
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.innerHTML = `<h2>${user.username}</h2><p>Skills: ${user.skills.join(', ')}</p>`;
        userProfileSection.appendChild(userElement);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    const username = event.target.username.value;
    const skillsInput = event.target.skills.value.split(',').map(skill => skill.trim());

    if (username && skillsInput.length > 0) {
        const newUser = {
            id: users.length + 1,
            username,
            skills: skillsInput
        };
        users.push(newUser);
        displayUsers();
        event.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Display initial data
displaySkills();

// Add event listener for form submission
const userProfileForm = document.getElementById('user-profile-form');
userProfileForm.addEventListener('submit', handleFormSubmission);

