// Initialize Firebase
var config = {
  apiKey: "AIzaSyACgMmgrHwr_L8dPT-c2GznjdxzuQ9fq6M",
  authDomain: "yandeh-hub.firebaseapp.com",
  databaseURL: "https://yandeh-hub.firebaseio.com",
  projectId: "yandeh-hub",
  storageBucket: "yandeh-hub.appspot.com",
  messagingSenderId: "752023878587"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
  return messaging.getToken();
}).then(function (token) {
  // console.log(token);
  const param = {
    'token': token
  }
  //Bate na api enviando o token
  fetch(`http://127.0.0.1:3000/sendMessage?token=${token}`, {
    method: 'POST',
    mode: 'no-cors'
  }).then(function (response) {
    return response;
  })

}).catch(function (err) {
  console.log('Permission denied', err);
});

messaging.onMessage(function (payload) {
  console.log('onMessage: ', payload);
});



