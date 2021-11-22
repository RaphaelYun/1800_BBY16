function search() {
  let CardTemplate = document.getElementById("CardTemplate");
  let SearchWord = document.getElementById("searchBox").value;
  db.collection("Food").get()
    .then(snap => {
      snap.forEach(doc => { //iterate thru each doc
        if (doc.data().name.toLowerCase().includes(SearchWord.toLowerCase())) {
          var foodId = doc.data().code;
          var foodName = doc.data().name;

          //create a card using the pre-defined template;
          let newcard = CardTemplate.content.cloneNode(true);

          //update title and text and image
          newcard.querySelector('.card-title').innerHTML = foodName;
          newcard.querySelector('.card-image').src = "./images/pic1.jpeg";
          newcard.querySelector('.card').onclick = function () {
            window.location.href = "details.html?collection=" + "Food" + "&id=" + doc.id;
          };

          //give unique ids to all elements for future use
          newcard.querySelector('.card-title').setAttribute("id", "ctitle_" + foodId);
          newcard.querySelector('.card-text').setAttribute("id", "ctext_" + foodId);
          newcard.querySelector('.card-image').setAttribute("id", "cimage_" + foodId);

          //attach to gallery
          document.getElementById('searchResult').appendChild(newcard);
        }
      })
    })
}