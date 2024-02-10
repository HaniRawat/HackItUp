// Mock data for skill listings and user profiles
let skills = [
    { id: 1, name: 'Web Development', user: 'User1', description: 'HTML, CSS, JavaScript' },
    { id: 2, name: 'Graphic Design', user: 'User2', description: 'Adobe Photoshop, Illustrator' }
    // Add more skills as needed
];

let users = [];

// Function to add new skill
function addNewSkill() {
    const skillName = prompt('Enter the name of the new skill:');
    if (skillName) {
        const skill = {
            id: skills.length + 1,
            name: skillName,
            user: 'Your username', // Set the user dynamically based on logged-in user
            description: '' // Add an empty description initially
        };
        skills.push(skill);
        displaySkills();
    }
}

// Function to filter skills by user
function filterSkillsByUser() {
    const user = prompt('Enter username to filter skills:');
    if (user) {
        const filteredSkills = skills.filter(skill => skill.user === user);
        if (filteredSkills.length > 0) {
            const skillListings = document.getElementById('skill-listings');
            skillListings.innerHTML = '';
            filteredSkills.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.innerHTML = `<p>${skill.name} - Offered by ${skill.user}</p>`;
                skillListings.appendChild(skillElement);
            });
        } else {
            alert('No skills found for the specified user.');
        }
    }
}

// Function to sort skills alphabetically
function sortSkills() {
    skills.sort((a, b) => a.name.localeCompare(b.name));
    displaySkills();
}

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

// Function to show detailed skill information
function showSkillDetails(skillId) {
    const skillDetailsContent = document.getElementById('skill-details-content');
    const skill = skills.find(skill => skill.id === skillId);
    if (skill) {
        skillDetailsContent.innerHTML = `<h3>${skill.name}</h3><p>Offered by ${skill.user}</p><p>Description: ${skill.description}</p>`;
    } else {
        skillDetailsContent.innerHTML = 'Skill not found.';
    }
}

// Function to handle search for skills
function handleSkillSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchInput));
    const skillListings = document.getElementById('skill-listings');
    skillListings.innerHTML = '';
    filteredSkills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.innerHTML = `<p>${skill.name} - Offered by ${skill.user}</p>`;
        skillListings.appendChild(skillElement);
    });
}

// Display initial data
displaySkills();

// Add event listener for form submission
const userProfileForm = document.getElementById('user-profile-form');
userProfileForm.addEventListener('submit', handleFormSubmission);

// Add event listener for skill search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', handleSkillSearch);
