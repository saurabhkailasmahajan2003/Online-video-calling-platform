// Get references to the necessary elements
const acceptTermsCheckbox = document.getElementById('acceptTerms');
const categoryRadios = document.querySelectorAll('input[name="category"]');
const proceedBtn = document.getElementById('proceedBtn');

// Function to check if all conditions are met to enable the Proceed button
function checkConditions() {
    let allConditionsMet = acceptTermsCheckbox.checked; // Check if terms are accepted
    
    // Check if a category is selected
    categoryRadios.forEach(radio => {
        if (radio.checked) {
            allConditionsMet = allConditionsMet && true;
        }
    });

    // Enable/disable the Proceed button based on conditions
    proceedBtn.disabled = !allConditionsMet;
}

// Add event listeners to the checkbox and radio buttons to trigger checkConditions function
acceptTermsCheckbox.addEventListener('change', checkConditions);
categoryRadios.forEach(radio => {
    radio.addEventListener('change', checkConditions);
});

// Initially check conditions to set the initial state of the Proceed button
checkConditions();



// Function to handle the Proceed button click event
function proceed() {
    // Check if the terms are accepted and a category is selected
    if (document.getElementById('acceptTerms').checked && document.querySelector('input[name="category"]:checked')) {
        // Redirect the user to the second page
        window.location.href = "file:///C:/Users/saura/OneDrive/Desktop/omg/web.html";
    } else {
        alert("Please accept the terms and select a category before proceeding.");
    }
}

function proceed() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const localVideo = document.createElement('video');
            localVideo.srcObject = stream;
            localVideo.autoplay = true;
            
            // Append the local video stream to the "Me" frame
            const meFrame = document.querySelector('.screen2');
            meFrame.appendChild(localVideo);

            const configuration = {};
            const peerConnection = new RTCPeerConnection(configuration);
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

            peerConnection.createOffer()
                .then(offer => peerConnection.setLocalDescription(offer))
                .then(() => {
                    // Send the offer to the other peer (through signaling server)
                    // Example: using WebSocket or another communication method
                })
                .catch(error => console.error('Error creating offer:', error));
        })
        .catch(error => console.error('Error accessing media devices:', error));
}
// Function to handle the Proceed button click event
function proceed() {
    // Check if the terms are accepted and a category is selected
    if (document.getElementById('acceptTerms').checked && document.querySelector('input[name="category"]:checked')) {
        // Redirect the user to the second page
        window.location.href = "file:///C:/Users/saura/OneDrive/Desktop/omg/web.html";

        // After redirecting, call the startCall function
        setTimeout(startCall, 1000); // Delaying by 1 second to ensure page redirect completes
    } else {
        alert("Please accept the terms and select a category before proceeding.");
    }
}
