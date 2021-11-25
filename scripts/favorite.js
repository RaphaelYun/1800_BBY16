function displayFavorite() {
  //this function is too complicated - there is a better way of writing this code for sure, but I will replace them with comments for now. 
  let n = 0;
  firebase.auth().onAuthStateChanged(user => {
    //check who the user is
    if (user) {
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          //get the user's favorite list
          var favoriteList = userDoc.data().favorites;
          db.collection("Food").get()
            .then(snap => {
              //iterate thru each doc
              snap.forEach(doc => {
                //for each food in the database, compare it to the food in the user's favorite list
                for (var i = 0; i < favoriteList.length; i++) {
                  //check if the food matches with one of the user's favorite foods. If it does, create a card to display
                  if (doc.data().code == favoriteList[i]) {
                    var foodId = doc.data().code;
                    var foodName = doc.data().name;

                    //create a card using the pre-defined template
                    let newcard = CardTemplate.content.cloneNode(true);

                    //update title and text and image
                    newcard.querySelector('.card-title').innerHTML = foodName;
                    newcard.querySelector('.card-image').src = "./images/foods/p" + foodId + ".jpg";
                    newcard.querySelector('.card').onclick = function () {
                      window.location.href = "details.html?collection=" + "Food" + "&id=" + doc.id;
                    };

                    //give unique ids to all elements for future use
                    newcard.querySelector('.card-title').setAttribute("id", "ctitle_" + foodId);
                    newcard.querySelector('.card-image').setAttribute("id", "cimage_" + foodId);

                    //attach to gallery
                    document.getElementById('favoriteList').appendChild(newcard);
                    n++;
                  }
                }
              })
                if (n == 0) {
                  let newcard = ClosureTemplate.content.cloneNode(true);
                  document.getElementById('favoriteList').appendChild(newcard);
                }
            })

        })
    }
  })
}
displayFavorite();