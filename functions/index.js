const functions = require('firebase-functions')
const admin = require('firebase-admin')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// exports.migraine = functions.https.onCall((data, context) => {
//   const db = admin.firestore()
//   return db.collection('userProfiles').where(uid, '==', context.auth.uid)
//     .limit(1)
//     .get()
//     .then((snapshot) => {
//       return db.collection('migraines').add({
//         startDayNumber: data.startDayNumber,
//         startDayDay: data.startDayDay,
//         startDayMonth: data.startDayMonth,
//         startHour: data.startHour,
//         endDayNumber: data.endDayNumber,
//         endDayDay: data.endDayDay,
//         endDayMonth: data.endDayMonth,
//         endHour: data.endHour,
//         medicationTaken: data.medicationTaken,
//         medicationName: data.medicationName,
//         medicationQuantity: data.medicationQuantity,
//         medicationEfficiency: data.medicationEfficiency,
//         activityAtStart: data.activityAtStart,
//         hypoglycemic: data.hypoglycemic,
//         physicalActivity: data.physicalActivity,
//         stressed: data.stressed,
//         angry: data.angry,
//         hoursOfSleep: data.hoursOfSleep,
//         minutesOfSleep: data.minutesOfSleep,
//         intensity: data.intensity,
//         user: snapshot.docs[0].ref
//       })
//     })
// })
