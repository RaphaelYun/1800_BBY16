function displayPrevious() {
  let n = 0;
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).get()
        .then(userDoc => {
          var previousList = userDoc.data().previous;
          db.collection("Food").get()
            .then(snap => {
              for (var i = 0; i < previousList.length; i++) {
                snap.forEach(doc => {
                  if (doc.data().code == previousList[i]) {
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
                    document.getElementById('previousList').appendChild(newcard);
                    n++;
                  }
                })
              }
              console.log(n)
              if (n == 0) {
                let newcard = ClosureTemplate.content.cloneNode(true);
                document.getElementById('previousList').appendChild(newcard);
              }
            })
        })
    }
  })
}

displayPrevious();