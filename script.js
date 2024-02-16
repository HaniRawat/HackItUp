// Mock data for skill listings
let skills = [
    { id: 1, name: 'Web Development', user: 'User1', description: 'HTML, CSS, JavaScript' },
    { id: 2, name: 'Graphic Design', user: 'User2', description: 'Adobe Photoshop, Illustrator' }
    // Add more skills as needed
];

// Function to display skill details
function showSkillDetails(skillId) {
    const skillDetailsContent = document.getElementById('skill-details-content');
    const skill = skills.find(skill => skill.id === skillId);
    if (skill) {
        skillDetailsContent.innerHTML = `
            <h3>${skill.name}</h3>
            <p>Offered by: ${skill.user}</p>
            <p>Description: ${skill.description}</p>
        `;
    } else {
        skillDetailsContent.innerHTML = 'Skill not found.';
    }
}

// Function to handle form submission for creating user profile
function handleFormSubmission(event) {
    event.preventDefault();
    
    const username = event.target.username.value;
    const email = event.target.email.value;
    const location = event.target.location.value;
    const bio = event.target.bio.value;

    if (username && email) {
        // Create user profile (implementation details depend on backend)
        console.log('User profile created:', { username, email, location, bio });
        event.target.reset();
    } else {
        alert('Please fill out all required fields.');
    }
}

// Display initial data
// This section can be updated with dynamic data retrieval if needed

// Add event listener for form submission
const userProfileForm = document.getElementById('user-profile-form');
userProfileForm.addEventListener('submit', handleFormSubmission);
function redirectToExternalSite() {
    // Redirect to another website
    window.location.href = 'index2.html'; // Replace 'https://www.example.com' with the URL you want to redirect to
    return false; // Prevent default form submission
}
