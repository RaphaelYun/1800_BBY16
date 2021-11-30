//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
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

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function updateProfile() {
  var newName = document.getElementById("input_name").value;
  var newEmail = document.getElementById("input_email").value;
  firebase.auth().onAuthStateChanged(user => {
    db.collection("users").doc(user.uid).get()
      .then((userDoc) => {
        if (newName.trim() == "") {
          alert("Enter a valid username.");
        } else if (newName.length < 3 || newName.length > 12) {
          alert("Your name must be 3 ~ 12 characters long.");
        } else if (!validateEmail(newEmail)) {
          alert("Enter a valid email.");
        } else {
          db.collection("users").doc(user.uid).update({
            name: newName,
            email: newEmail
          })
          alert("Your profile is updated.");
        }
      })
  })

}

function about() {
  document.getElementById("aboutModal").style.display = "block";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("aboutModal")) {
    document.getElementById("aboutModal").style.display = "none";
  }
}