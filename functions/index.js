const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.trackEvent = functions.https.onRequest((req, res) => {
    const eventData = req.body;
    console.log('Event received:', eventData);
    admin.firestore().collection('events').add(eventData)
        .then(() => {
            res.status(200).send('Event tracked successfully');
        })
        .catch((error) => {
            res.status(500).send('Error tracking event');
        });
});