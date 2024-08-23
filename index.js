document.addEventListener('DOMContentLoaded', function () {
  console.log('JS connected');

  const button = document.getElementById('myButton');
  var unityInstance;

  console.log('Script started');

  var unityFrame = document.getElementById('unityFrame');
  if (unityFrame) {
      unityFrame.onload = function() {
          console.log('iframe loaded');

          try {
              var unityWindow = unityFrame.contentWindow;
              console.log('iframe contentWindow:', unityWindow);

              // Attempt to access the unityInstance
              unityInstance = unityWindow.unityInstance;

              // Check if unityInstance is properly set
              if (unityInstance) {
                  button.disabled = false;
                  console.log('Unity instance initialized.');
              } else {
                  console.log('Unity instance is not available in contentWindow.');
              }
          } catch (e) {
              console.error('Error accessing iframe content:', e);
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
      if (unityInstance) {
          unityInstance.SendMessage('GameObjectName', 'ReceiveMessage', 'Hello from JavaScript');
          console.log('Message sent to Unity.');
      } else {
          console.log('Unity instance not yet initialized.');
      }
  }
});
