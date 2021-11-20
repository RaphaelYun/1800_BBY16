function addToFav(foodId) {
    // debugger;
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            console.log("User id: " + user.uid);
            var userDoc = db.collection("users").doc(user.uid);
            userDoc.update({
                favorites: firebase.firestore.FieldValue.arrayUnion(foodId)
            });
        }
    });

}