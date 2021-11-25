function randomizePreset() {
  document.getElementById("emotionModal").style.display = "block";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("emotionModal")) {
    document.getElementById("emotionModal").style.display = "none";
  }
}

function randomize() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).update({
          emotion: document.getElementById('emotionPicker').value
        })
        .then(() => {
          window.location.assign("suggested.html");
        })
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })
}

function populateName() {
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