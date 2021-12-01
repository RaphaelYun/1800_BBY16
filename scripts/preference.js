var currentUser;

var userCuisine1;
var userCuisine2;
var userAvoid;

function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      //go to the correct user document by referencing to the user uid
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          //get the data fields of the user
          userCuisine1 = userDoc.data().FavoriteCuisine1;
          userCuisine2 = userDoc.data().FavoriteCuisine2;
          userAvoid = userDoc.data().Avoid;

          //if the data fields are not empty, then write them in to the form.
          if (userCuisine1 != null) {
            document.getElementById("CuisinePreference1").value = userCuisine1;
          }
          if (userCuisine2 != null) {
            document.getElementById("CuisinePreference2").value = userCuisine2;
          }
          for (var i = 0; i < userAvoid.length; i++) {
            if (userAvoid[i] == true) {
              document.getElementById("check" + i).checked = true;
            }
          }
        })
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  });
}
populateInfo();

function savePreference() {
  //grab values from the form that the user inserted
  userCuisine1 = document.getElementById('CuisinePreference1').value;
  userCuisine2 = document.getElementById('CuisinePreference2').value;
  for (var i = 0; i < 4; i++) {
    console.log('check' + i);
    userAvoid[i] = document.getElementById('check' + i).checked;
  }

  if (userCuisine1 == userCuisine2 && !(userCuisine1 == 'none' && userCuisine1 == 'none')) {
    alert("You cannot have 2 same cuisines.");
  } else if(userCuisine1 == 'none' && userCuisine2 != 'none') {
    alert("You cannot have second favorite cuisine only.");
  } else {
    //write the values in the database
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("users").doc(user.uid).update({
            FavoriteCuisine1: userCuisine1,
            FavoriteCuisine2: userCuisine2,
            Avoid: userAvoid
          })
          .then(() => {
            alert("Your preference has been updated.");
            window.location.href = "main.html";
          })
      } else {
        alert("You must be logged in.");
        window.location.assign("login.html");
      }
    })
  }
}