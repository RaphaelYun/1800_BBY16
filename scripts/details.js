function showDetails() {
  // create a URL object
  let params = new URL(window.location.href);
  let collection = params.searchParams.get("collection"); //parse "collection"
  let id = params.searchParams.get("id"); //parse "id"

  db.collection(collection).doc(id).get()
    .then((doc) => {
      document.getElementById("foodImage").src = "./images/pic1.jpeg";
      document.getElementById("foodName").innerHTML = doc.data().name;
      document.getElementById("foodDescription").innerHTML = doc.data().description;

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          db.collection("users").doc(user.uid).get()
            .then(userDoc => {
              //get the user's favorite list
              var favoriteList = userDoc.data().favorites;
              if (favoriteList.includes(doc.data().code)) {
                document.getElementById("foodFavorite").innerHTML = "Remove from Favorite";
                document.getElementById("foodFavorite").onclick = function () {
                  db.collection("users").doc(user.uid).update({
                    favorites: firebase.firestore.FieldValue.arrayRemove(doc.data().code)
                  });
                  showDetails();
                };
              } else {
                document.getElementById("foodFavorite").innerHTML = "Add to Favorite";
                document.getElementById("foodFavorite").onclick = function () {
                  db.collection("users").doc(user.uid).update({
                    favorites: firebase.firestore.FieldValue.arrayUnion(doc.data().code)
                  });
                  showDetails();
                };
              }
            })
        }
      })

    })
}
showDetails();