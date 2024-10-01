// Function to handle image upload and display the matched photo
document.getElementById('uploadBtn').addEventListener('click', function() {
    const uploadPhoto = document.getElementById('uploadPhoto').files[0];

    if (uploadPhoto) {
        // Create a FormData object to send the uploaded image to the backend
        const formData = new FormData();
        formData.append('image', uploadPhoto);

        // Simulating an API call to the backend
        simulateImageMatch(formData);
    } else {
        alert("Please upload a photo before submitting.");
    }
});

// Function to simulate backend processing and matching
function simulateImageMatch(formData) {
    // Simulate a delay for image matching (this would be replaced by an actual API call)
    setTimeout(function() {
        // Mocked response (this would come from the backend in a real scenario)
        const matchedPhotoURL = 'matched.jpg'; // This is a placeholder
        const matchedPhotoData = 'Matched Photo Name: Sample Image'; // Placeholder data

        // Display the matched photo and its data
        displayMatchedPhoto(matchedPhotoURL, matchedPhotoData);
    }, 2000); // Simulating a 2 second delay
}

// Function to display the matched photo and its data
function displayMatchedPhoto(photoURL, photoData) {
    document.getElementById('matchedPhoto').src = photoURL;
    document.getElementById('matchedPhotoData').innerText = photoData;
    document.getElementById('resultSection').style.display = 'block';
}
