const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yandeh-hub.firebaseio.com"
});

exports.post = (req, res, next) => {

    //Envia mensagem pré-configurada
    var message = {
        webpush: {
            notification: {
                title: 'This is...',
                body: 'Piraporaaaaaa, piraporaaaa!!',
                icon: 'https://i.ytimg.com/vi/sQs1cASjUD0/hqdefault.jpg'
            }
        },
        data: {
            score: '850',
            time: '2:45'
        },
        token: req.query.token
    }

    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
            return response;
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });

};
