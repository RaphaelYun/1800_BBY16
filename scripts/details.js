function showDetails() {
  // create a URL object
  let params = new URL(window.location.href);
  let collection = params.searchParams.get("collection"); //parse "collection"
  let id = params.searchParams.get("id"); //parse "id"

  db.collection(collection).doc(id).get() //using the url, locate the food in the food database list
    .then((doc) => {
      document.getElementById("foodImage").src = "./images/foods/p" + doc.data().code + ".jpg";
      document.getElementById("foodName").innerHTML = doc.data().name;
      document.getElementById("foodDescription").innerHTML = doc.data().description;
      document.getElementById("foodMap").href = "https://www.google.com/maps/search/" + doc.data().name;

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          db.collection("users").doc(user.uid).get()
            .then(userDoc => {
              //get the user's favorite list
              var favoriteList = userDoc.data().favorites;
              if (favoriteList.includes(doc.data().code)) { //if the food is in the user's favorite list
                document.getElementById("foodFavorite").innerHTML = '<i class="material-icons">favorite</i>';
                document.getElementById("foodFavorite").onclick = function () {
                  if (user) {
                    db.collection("users").doc(user.uid).update({
                      favorites: firebase.firestore.FieldValue.arrayRemove(doc.data().code)
                    });
                    showDetails();
                  } else {
                    alert("You must be logged in.");
                    window.location.assign("login.html");
                  }

                };
              } else { //if the food is NOT in the user's favorite list
                document.getElementById("foodFavorite").innerHTML = '<i class="material-icons">favorite_border</i>';
                document.getElementById("foodFavorite").onclick = function () {
                  if (user) {
                    db.collection("users").doc(user.uid).update({
                      favorites: firebase.firestore.FieldValue.arrayUnion(doc.data().code)
                    });
                    showDetails();
                  } else {
                    alert("You must be logged in.");
                    window.location.assign("login.html");
                  }
                };
              }

            })
        }
      })

    })
}
showDetails();

function addToPrevious() { //as the food is displayed, add it to the previous list
  let params = new URL(window.location.href);
  let collection = params.searchParams.get("collection"); //parse "collection"
  let id = params.searchParams.get("id"); //parse "id"

  db.collection(collection).doc(id).get()
    .then((doc) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          db.collection("users").doc(user.uid).get()
            .then(userDoc => {
              //get the user's previous list
              var previousList = userDoc.data().previous;
              for (var i = 0; i < previousList.length; i++) {
                if (doc.data().code == previousList[i]) { //check if the food is already on the previous list
                  previousList.splice(i, 1); //if it is, remove it (in order to move it to the top)
                  break;
                }
              }
              previousList.splice(0, 0, doc.data().code); //add the food to the list
              while (previousList.length > 10) { //limit the length of the previous list to 10
                previousList.pop();
              }
              db.collection("users").doc(user.uid).update({
                previous: previousList
              })
            });
        } else {
          alert("You must be logged in.");
          window.location.assign("login.html");
        }
      })
    })
}
addToPrevious();