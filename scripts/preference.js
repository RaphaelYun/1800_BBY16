var currentUser;

function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      //go to the correct user document by referencing to the user uid
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          //get the data fields of the user
          var userCuisine1 = userDoc.data().FavoriteCuisine1;
          var userCuisine2 = userDoc.data().FavoriteCuisine2;

          //if the data fields are not empty, then write them in to the form.
          if (userCuisine1 != null) {
            document.getElementById("CuisinePreference1").value = userCuisine1;
          }
          if (userCuisine2 != null) {
            document.getElementById("CuisinePreference2").value = userCuisine2;
          }
        })
    } else {
      // No user is signed in.
      console.log("No user is signed in");
    }
  });
}

//call the function to run it 
populateInfo();

function savePreference() {
  //grab values from the form that the user inserted
  userCuisine1 = document.getElementById('CuisinePreference1').value;
  userCuisine2 = document.getElementById('CuisinePreference2').value;

  //write the values in the database
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).update({
          FavoriteCuisine1: userCuisine1,
          FavoriteCuisine2: userCuisine2
        })
        .then(() => {
          console.log("Document successfully updated!");
          window.location.href = "main.html";
        })
    }
  })
}