import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxvXvYTc1NQwzOBJh-4Ix1iRyBStaPKDQ",
    authDomain: "expensify-5f2ea.firebaseapp.com",
    databaseURL: "https://expensify-5f2ea.firebaseio.com",
    projectId: "expensify-5f2ea",
    storageBucket: "expensify-5f2ea.appspot.com",
    messagingSenderId: "348755020117"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };




// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key, 
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// //child_removed
// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// //child_changed
// database.ref('expenses')
// .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added, its call not just for news item but for the existing ones too
// database.ref('expenses')
// .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Cafe',
//     note: 'Some notes',
//     amount: 12.25,
//     createdAt: 25/10/2018
// });

// database.ref('expenses').push({
//     description: 'Cafe 222',
//     note: 'Some notes 222',
//     amount: 32.3,
//     createdAt: 25/10/2018
// });

// database.ref('expenses').push({
//     description: 'Cafe 333',
//     note: 'Some notes 333',
//     amount: 30.63,
//     createdAt: 25/10/2018
// });

// database.ref('notes/-LFIsfKHoWXLOEugvOAU').update({
//     body: 'buy food'
// })

// this will generate an unique ID for all added objects
// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React, Angular, Vue'
// });

// //best way to work with Arrays in Firebase.
// const firebaseNotes = {
//     notes:{
//         IDsadfas:{
//             title: 'First note',
//             body: 'This is my note'
//         },
//         IDsdfsad:{
//             title: 'SEcond note',
//             body: 'This is my note'
//         }
//     }
// };

// //Firebase doesnt support Arrays:
// const notes = [
//     {
//         id: '12',
//         title: 'First note',
//         body: 'This is my note'
//     }, 
//     {
//         id: '15f12',
//         title: 'Second note',
//         body: 'This is my second note'
//     }
// ]

// database.ref('notes').set(notes);

// database.ref().on('value',  (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// //Server notified us the data changes
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// // setTimeout(() => {
// //     database.ref().off();
// // }, 7000);

// //another way to unsuscribe
// setTimeout(() => {
//     database.ref().off('value',onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// //we get the dataa single time
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data');
//     })

// database.ref().set({
//   name: 'Franklin Castillo',
//   age: 28,
//   stresslevel: 6,
//   job: {
//       title: 'Software Developer',
//       company: 'google'
//     },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Property was removed');
//     })
//     .catch((error) => {
//         console.log('Remove failed: ' + error.message);
//     });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// })

// database.ref().update({
//     stresslevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })
