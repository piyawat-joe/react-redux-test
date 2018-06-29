import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBGQL4omutzLuIY0V_eg_x-WL7xYtIIlKY",
    authDomain: "expensify-92ad7.firebaseapp.com",
    databaseURL: "https://expensify-92ad7.firebaseio.com",
    projectId: "expensify-92ad7",
    storageBucket: "expensify-92ad7.appspot.com",
    messagingSenderId: "453225436180"
  };

firebase.initializeApp(config);


//firebase.database().ref().set({
// name: 'Joe Piyawat'
//});

const database = firebase.database();

database.ref().set({
 name: 'hahah popo',
 age: 26,
 stressLevel: 6,
 job: {
 title: 'Software developer',
 company: 'Google'
 },
 location: {
  city: 'Philadelphia',
  country: 'United States'
 }
 }).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
   console.log('Add failed.', e);
});

database.ref('age').set(27);
database.ref('location/city').set('NY');

database.ref('job')
//.remove()
.set(null)
.then(() => {
  console.log('Data is removed!');
}).catch((e) => {
   console.log('Remove failed.', e);
});

database.ref().update({
   stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
 })
.then(() => {
  console.log('Data is updated!');
}).catch((e) => {
   console.log('Update failed.', e);
});


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

database.ref()
   .once('value')
   .then((snapshot) => {
     const val = snapshot.val();
     console.log(val);
   })
   .catch((e) => {
     console.log('Error fetching data', e);
   });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })