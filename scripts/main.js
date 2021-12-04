function randomizePreset() { //when the user clicks the Randomize button, display the Emotion modal
  document.getElementById("emotionModal").style.display = "block";
}

window.onclick = function (event) { //when the user clicks anywhere outside of the modal, close it
  if (event.target == document.getElementById("emotionModal")) {
    document.getElementById("emotionModal").style.display = "none";
  }
}

function randomize() { //collect the emotion the user picked and go to the suggestion page
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).update({
          emotion: document.getElementById('emotionPicker').value
        })
        .then(() => {
          window.location.assign("suggestion.html");
        })
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })
}

function populateName() { //populate the user's name on the welcome text
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          document.getElementById("welcomeText").innerHTML = "Nice to see you, " + userDoc.data().name + "!";
        })
    }
  })
}
populateName();