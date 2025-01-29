// Get the host screen element
var hostScreen = document.getElementById("hostScreen");

// Variable to store the last tap time
var lastTap = 0;

// Function to handle the double-tap event
hostScreen.addEventListener("click", function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        // If the time between taps is less than 500 milliseconds, it's a double-tap
        // Toggle a CSS class to enlarge the host screen
        hostScreen.classList.toggle("enlarged");

        // If enlarged, add close button
        if (hostScreen.classList.contains("enlarged")) {
            addCloseButton();
        } else {
            removeCloseButton();
        }
    }
    lastTap = currentTime;
});

// Function to add close button to enlarged screen
function addCloseButton() {
    var closeButton = document.createElement("span");
    closeButton.classList.add("closeBtn");
    closeButton.innerHTML = "×";
    closeButton.onclick = closeEnlarged;
    hostScreen.appendChild(closeButton);
}

// Function to remove close button from enlarged screen
function removeCloseButton() {
    var closeButton = document.querySelector(".closeBtn");
    if (closeButton) {
        closeButton.remove();
    }
}

// Function to close the enlarged screen
function closeEnlarged() {
    hostScreen.classList.remove("enlarged");
    removeCloseButton();
}

//Rendering the msg from chat box to chatbox.
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const chatbox = document.querySelector('.box');

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const message = this.value.trim(); // Retrieve the text from the input element
            if (message !== '') {
                appendMessage(message); // Append the message to the chatbox
                this.value = ''; // Clear the input field
            }
        }
    });

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
    }
});

function startCall() {
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

function endCall() {
    const meFrame = document.querySelector('.screen2');
    // Remove the local video stream from the "Me" frame
    meFrame.querySelector('video').remove();
}

// WebRTC
document.addEventListener('DOMContentLoaded', function() {
    // Start the call (camera and voice)
    startCall();

    // Function to start the call (camera and voice)
    function startCall() {
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

                // Send the offer to the other peer (through signaling server)
                // Example: using WebSocket or another communication method
                // This part needs to be implemented based on your signaling server setup
            })
            .catch(error => console.error('Error accessing media devices:', error));
    }

    // Other functions related to chat functionalities
    // ...
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        console.log('getUserMedia() success:', stream);
        // Rest of your code to handle the stream
    })
    .catch(error => {
        console.error('Error accessing media devices:', error);
    });

    