document.addEventListener('DOMContentLoaded', function () {
    console.log('JS connected');

    const button = document.getElementById('myButton');
    var MyGameInstance;

    console.log('Script started');

    // Wait for the iframe to load
    var unityFrame = document.getElementById('unityFrame');
    if (unityFrame) {
        unityFrame.onload = function() {
            console.log('iframe loaded');

            MyGameInstance = unityFrame.contentWindow.unityInstance;
            console.log('iframe contentWindow:', unityFrame.contentWindow);

            if (MyGameInstance) {
                button.disabled = false;
                console.log('Unity instance initialized.');
            } else {
                console.log('Unity instance not yet initialized.');
            }
        };
    } else {
        console.log('iframe with id "unityFrame" not found');
    }

    button.addEventListener('click', function() {
        console.log('Button Clicked');
        sendMessageToUnity();
    });

    function sendMessageToUnity() {
        if (MyGameInstance) {
            MyGameInstance.SendMessage('WebGLTestObject', 'ReceiveMessage', 'Hello from JavaScript');
            console.log('Message sent to Unity.');
        } else {
            console.log('Unity instance not yet initialized.');
        }
    }
});
