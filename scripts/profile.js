function logout() { //fired when the "logout" button is clicked
  console.log("logging out user");
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert("You are logged out.");
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
  });
}

function populateProfile() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      //go to the correct user document by referencing to the user uid
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          //get the data fields of the user
          document.getElementById("input_name").value = userDoc.data().name;
          document.getElementById("input_email").value = userDoc.data().email;
        })
    }
  })
}
populateProfile();

const validateEmail = (email) => { //format that new email should follow
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function updateProfile() {
  var newName = document.getElementById("input_name").value;
  var newEmail = document.getElementById("input_email").value;
  //using the data the user input, write that in the database
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).get()
      .then((userDoc) => {
        //conditions on new name and email - they are self-explanatory with the followed alert messages
        if (newName.trim() == "") {
          alert("Enter a valid username.");
        } else if (newName.length < 3 || newName.length > 12) {
          alert("Your name must be 3 ~ 12 characters long.");
        } else if (!validateEmail(newEmail)) {
          alert("Enter a valid email.");
        } else {
          //write the values in the database
          db.collection("users").doc(user.uid).update({
            name: newName,
            email: newEmail
          })
          alert("Your profile is updated.");
        }
      })
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })

}

function about() { //when the user clicks the About link, display the About modal
  document.getElementById("aboutModal").style.display = "block";
}

window.onclick = function (event) { //when the user clicks anywhere outside of the modal, close it
  if (event.target == document.getElementById("aboutModal")) {
    document.getElementById("aboutModal").style.display = "none";
  }
}