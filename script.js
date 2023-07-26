// Function to fetch data from an API using Promises
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display Random User data
function displayRandomUserData() {
    const randomUserList = document.querySelector('.random-user-list');
    const randomUserBtn = document.querySelector('.random-user-btn');

    randomUserBtn.addEventListener('click', () => {
        fetchData('https://randomuser.me/api/?results=1')
            .then((data) => {
                const user = data.results[0];

                // Clear existing data from the list
                randomUserList.innerHTML = '';

                // Create list items for each user attribute with clear labels and formatting
                const listItemName = document.createElement('li');
                listItemName.innerHTML = `<strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}`;

                const listItemGender = document.createElement('li');
                listItemGender.innerHTML = `<strong>Gender:</strong> ${user.gender}`;

                const listItemLocation = document.createElement('li');
                listItemLocation.innerHTML = `<strong>Location:</strong> ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}, Latitude: ${user.location.coordinates.latitude}, Longitude: ${user.location.coordinates.longitude}`;

                const listItemEmail = document.createElement('li');
                listItemEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;

                const listItemDateOfBirth = document.createElement('li');
                listItemDateOfBirth.innerHTML = `<strong>Date of Birth:</strong> ${user.dob.date.slice(0, 10)}, Age: ${user.dob.age}`;

                const listItemPhone = document.createElement('li');
                listItemPhone.innerHTML = `<strong>Phone:</strong> Cell: ${user.cell}, Home: ${user.phone}`;

                const listItemNationality = document.createElement('li');
                listItemNationality.innerHTML = `<strong>Nationality:</strong> ${user.nat}`;

                const listItemPicture = document.createElement('li');
                listItemPicture.innerHTML = `<strong>Picture:</strong><br><img src="${user.picture.large}" alt="User Picture">`;

                // Append the list items to the list
                randomUserList.appendChild(listItemName);
                randomUserList.appendChild(listItemGender);
                randomUserList.appendChild(listItemLocation);
                randomUserList.appendChild(listItemEmail);
                randomUserList.appendChild(listItemDateOfBirth);
                randomUserList.appendChild(listItemPhone);
                randomUserList.appendChild(listItemNationality);
                randomUserList.appendChild(listItemPicture);
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomUserData();
})