function gotoFavorite() {
  firebase.auth().onAuthStateChanged(user => {
    //check who the user is
    if (user) {
      location.href='./favorite.html';
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })
}

function gotoPrevious() {
  firebase.auth().onAuthStateChanged(user => {
    //check who the user is
    if (user) {
      location.href='./previous.html';
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })
}

function gotoSearch() {
  location.href='./search.html';
}

function gotoProfile() {
  firebase.auth().onAuthStateChanged(user => {
    //check who the user is
    if (user) {
      location.href='./profile.html';
    } else {
      alert("You must be logged in.");
      window.location.assign("login.html");
    }
  })
}