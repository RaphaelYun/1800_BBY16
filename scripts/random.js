function insertName() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      // Do something for the current logged-in user here: 
      console.log(user.uid);
      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid);
      //get the document for current user.
      currentUser.get()
        .then(userDoc => {
          var user_Name = userDoc.data().name;
          console.log(user_Name);
          //method #1:  insert with html only
          document.getElementById("name-goes-here").innerText = user_Name; //using javascript
          //method #2:  insert using jquery
          //$("#name-goes-here").text(user_Name); //using jquery
        })
    } else {
      // No user is signed in.
    }
  });
}
insertName();

function writeFoodList() {

  var foodRef = db.collection("Food");

  foodRef.add({
    code: "1",
    name: "Spring Rolls",
    description: "Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian, Southeast Asian cuisine" +
      "The kind of wrapper, fillings, and cooking technique used, as well as the name, vary considerably within this large area, depending on the region's culture."
  })

  foodRef.add({
    code: "2",
    name: "Chicken Warp",
    description: "A wrap is a food dish made with a soft flatbread rolled around a filling." +
      "The usual flatbreads are wheat tortillas, lavash, or pita; the filling may include cold sliced meat, poultry, or fish," +
      "shredded lettuce, diced tomato or pico de gallo, guacamole, sauteed mushrooms, bacon, grilled onions, cheese, and a sauce, such as ranch or honey mustard. "
  })

  foodRef.add({
    code: "3",
    name: "Pizza",
    description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes," +
      "cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza" +
      "is sometimes called a pizzetta"
  })

  foodRef.add({
    code: "4",
    name: "Pasta",
    description: "Tomato sauce can refer to many different sauces made primarily from tomatoes, usually to be served as part of a dish, rather than as a condiment." +
      "Tomato sauces are common for meat and vegetables, but they are perhaps best known as bases for Mexican salsas or sauces for pasta dishes"
  })

  foodRef.add({
    code: "5",
    name: "Poutine",
    description: "Poutine is a dish of french fries and cheese curds topped with a brown gravy. It emerged in Quebec, Canada, in the late 1950s in the Centre-du-Québec" +
      "region, though its origins are uncertain and there are several competing claims of having invented the dish."
  })

  foodRef.add({
    code: "6",
    name: "Hamburger",
    description: "A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside" +
      "a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled"
  })

  foodRef.add({
    code: "7",
    name: "Caesar salad",
    description: "A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic," +
      "Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside"
  })

  foodRef.add({
    code: "8",
    name: "Steak",
    description: "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried." +
      "Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers"
  })

  foodRef.add({
    code: "9",
    name: "Cheesecake",
    description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs," +
      "and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake."
  })

  foodRef.add({
    code: "10",
    name: "Ice Cream",
    description: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener," +
      "either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches"
  })

  foodRef.add({
    code: "11",
    name: "Ice Cream Cake",
    description: "Combo of Ice cream and cake"
  })

  foodRef.add({
    code: "12",
    name: "Tiramisu",
    description: "This classic Italian dessert is made up of sponge fingers soaked in coffee, traditionally layered between a coffee-flavoured mascarpone" +
      "cheese whipped with eggs and sugar, and then topped with cocoa. Literally meaning ‘pick-me-up’ in Italian, tiramisu is the perfect end to an Italian " +
      "feast and can be found on most menus across the country."
  })

  foodRef.add({
    code: "13",
    name: "Lamingtons",
    description: "Lamingtons are traditionally made from a small square of vanilla sponge covered in chocolate and desiccated coconut, but they can also contain" +
      "a layer of jam sandwiching two lamington halves."
  })

  foodRef.add({
    code: "14",
    name: "Baklava",
    description: "Baklava is made from layers of paper-thin filo pastry, butter, chopped nuts and a sweet syrup fragranced with rose or orange blossom water." +
      "It’s normally made in big tins, baked and then drizzled with even more syrup before cutting into smaller pieces."
  })

  foodRef.add({
    code: "15",
    name: "Brownies",
    description: "A chocolate brownie or simply a brownie is a square or rectangular chocolate baked confection. Brownies come in a variety of forms and may be" +
      "either fudgy or cakey, depending on their density. They may include nuts, frosting, cream cheese, chocolate chips, or other ingredients."
  })

  foodRef.add({
    code: "16",
    name: "Blacked Chicken Cowboy ",
    description: "house greens, edamame, corn, black beans, feta, dates, walnut, honey lime vinaigrette, garlic croutons"
  })

  foodRef.add({
    code: "17",
    name: "Dynamite Roll",
    description: "prawn tempura, sweet soy glaze"
  })

  foodRef.add({
    code: "18",
    name: "Kung Pao Lettuce Wraps",
    description: "five spice chicken, peanuts, crispy noodles, spicy kung pao sauce | veggie lettuce wraps"
  })

  foodRef.add({
    code: "19",
    name: "Crispy Caulifower",
    description: "charred jalapeno ranch, aged parmesan"
  })

  foodRef.add({
    code: "20",
    name: "Litle Nachos",
    description: "a smaller helping of our loaded nachos"
  });

}

// writeFoodList();

function randomFood() {

  var randId = Math.floor(Math.random() * 20);
  console.log(randId);



  displayFood(randId);

}

function getThreeFood() {

  for (var i = 0; i < 3; i++) {
    randomFood();

  }

}

function addCard(doc, parent) {
    let newcard = CardTemplate.content.cloneNode(true);
    var title = doc.data().name;
    //update title and text and image
    newcard.querySelector('.card-title').innerHTML = doc.data().name;
    newcard.querySelector('.card-text').innerHTML = doc.data().description;
    newcard.querySelector('.card-image').src = "./images/pic1.jpeg";
    //newcard.querySelector('.card-image').src = "./images/" + title + ".jpg";

    //give unique ids to all elements for future use
    newcard.querySelector('.card-title').setAttribute("id", "ctitle" + title);
    newcard.querySelector('.card-text').setAttribute("id", "ctext" + title);
    newcard.querySelector('.card-image').setAttribute("id", "cimage_" + title);

    var likeButton = newcard.querySelector('.like');
    if(likeButton) {
        likeButton.addEventListener("click", function() { addToFav(doc.id) });
    }

    parent.appendChild(newcard);
}

function displayFood(randId) {
  db.collection("Food").get()
    .then(allFood => {
      console.log(allFood.docs[randId]);

      var doc = allFood.docs[randId];

      var foodID = doc.data().code;
      var foodName = doc.data().name;
      var foodDescription = doc.data().description;
      console.log(foodID);
      console.log(foodName);
      console.log(foodDescription);

      addCard(doc, document.getElementById('suggestionList'))
    })
}

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

function displayFavItem(foodId) {
    db.collection("Food").doc(foodId).get().then(doc => {
        console.log("FoodItem info: " + doc.data().name);
        addCard(doc, document.getElementById('favoritesList'));
    })
}

function displayFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here:
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var favs = doc.data().favorites;
                    console.log("favs[0]: " + favs[0]);
                    favs.forEach(fav => {displayFavItem(fav)})
                    // db.collection("Food").doc().then(function(favItems) {
                    //     console.log("FoodItem info: " + favItems.docs[0].id)
                    // })
                    // db.collection("Food").where('id', 'in', favs).get().then(function(favItems) {
                    //     console.log("FoodItem info: " + favItems.docs[0])
                    // })
                })
        }
    });
}
