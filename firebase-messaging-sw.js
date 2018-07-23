importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {

  messagingSenderId: "752023878587"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  console.log('onMessage: ', payload);
});
