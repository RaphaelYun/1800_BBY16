/*
Hard coded database values for foods
invoke this function to write the data to the database

Avoid Tags
0 = Nuts
1 = Lactose
2 = Peanuts
3 = Meat
 */
function writeFoodList() {
    var foodRef = db.collection("Food");
    foodRef.add({
        code: "1",
        name: "Spring Rolls",
        description: "Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian, Southeast Asian cuisine" +
            "The kind of wrapper, fillings, and cooking technique used, as well as the name, vary considerably within this large area, depending on the region's culture.",
        emotion: "happy",
        nationality: "vietnamese",
        Avoid: [false, false, true, false]
    })

    foodRef.add({
        code: "2",
        name: "Chicken Warp",
        description: "A wrap is a food dish made with a soft flatbread rolled around a filling." +
            "The usual flatbreads are wheat tortillas, lavash, or pita; the filling may include cold sliced meat, poultry, or fish," +
            "shredded lettuce, diced tomato or pico de gallo, guacamole, sauteed mushrooms, bacon, grilled onions, cheese, and a sauce, such as ranch or honey mustard. ",
        emotion: "hungry",
        nationality: "american",
        Avoid: [false, true, false, false]
    })

    foodRef.add({
        code: "3",
        name: "Pizza",
        description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes," +
            "cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza" +
            "is sometimes called a pizzetta",
        emotion: "hungry",
        nationality: "italian",
        Avoid: [false, true, false, false]
    })

    foodRef.add({
        code: "4",
        name: "Pasta",
        description: "Tomato sauce can refer to many different sauces made primarily from tomatoes, usually to be served as part of a dish, rather than as a condiment." +
            "Tomato sauces are common for meat and vegetables, but they are perhaps best known as bases for Mexican salsas or sauces for pasta dishes",
        emotion: "depressed",
        nationality: "italian",
        Avoid: [false, false, true, false]
    })

    foodRef.add({
        code: "5",
        name: "Poutine",
        description: "Poutine is a dish of french fries and cheese curds topped with a brown gravy. It emerged in Quebec, Canada, in the late 1950s in the Centre-du-Québec" +
            "region, though its origins are uncertain and there are several competing claims of having invented the dish.",
        emotion: "depressed",
        nationality: "canadian",
        Avoid: [false, false, false, false]

    })

    foodRef.add({
        code: "6",
        name: "Hamburger",
        description: "A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside" +
            "a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled",
        emotion: "hungry",
        nationality: "american",
        Avoid: [false, false, false, true]
    })

    foodRef.add({
        code: "7",
        name: "Caesar salad",
        description: "A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic," +
            "Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside",
        emotion: "happy",
        nationality: "italian",
        Avoid: [false, false, false, false]
    })

    foodRef.add({
        code: "8",
        name: "Steak",
        description: "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried." +
            "Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers",
        emotion: "hungry",
        nationality: "american",
        Avoid: [false, false, false, true]
    })

    foodRef.add({
        code: "9",
        name: "Cheesecake",
        description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs," +
            "and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.",
        emotion: "depressed",
        nationality: "italian",
        Avoid: [false, true, false, false]
    })

    foodRef.add({
        code: "10",
        name: "Ice Cream",
        description: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener," +
            "either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches",
        emotion: "depressed",
        nationality: "french",
        Avoid: [false, true, false, false]
    })

    foodRef.add({
        code: "11",
        name: "Ice Cream Cake",
        description: "Combo of Ice cream and cake",
        emotion: "happy",
        nationality: "american",
        Avoid: [false, true, false, false]
    })

    foodRef.add({
        code: "12",
        name: "Tiramisu",
        description: "This classic Italian dessert is made up of sponge fingers soaked in coffee, traditionally layered between a coffee-flavoured mascarpone" +
            "cheese whipped with eggs and sugar, and then topped with cocoa. Literally meaning ‘pick-me-up’ in Italian, tiramisu is the perfect end to an Italian " +
            "feast and can be found on most menus across the country.",
        emotion: "happy",
        nationality: "italian",
        Avoid: [false, true, false, false]
    })
    foodRef.add({
        code: "13",
        name: "Lamingtons",
        description: "Lamingtons are traditionally made from a small square of vanilla sponge covered in chocolate and desiccated coconut, but they can also contain" +
            "a layer of jam sandwiching two lamington halves.",
        emotion: "happy",
        nationality: "australian",
        Avoid: [false, false, false, false]
    })
    foodRef.add({
        code: "14",
        name: "Baklava",
        description: "Baklava is made from layers of paper-thin filo pastry, butter, chopped nuts and a sweet syrup fragranced with rose or orange blossom water." +
            "It’s normally made in big tins, baked and then drizzled with even more syrup before cutting into smaller pieces.",
        emotion: "happy",
        nationality: "turkish",
        Avoid: [true, false, false, false]
    })
    foodRef.add({
        code: "15",
        name: "Brownies",
        description: "A chocolate brownie or simply a brownie is a square or rectangular chocolate baked confection. Brownies come in a variety of forms and may be" +
            "either fudgy or cakey, depending on their density. They may include nuts, frosting, cream cheese, chocolate chips, or other ingredients.",
        emotion: "happy",
        nationality: "american",
        Avoid: [false, false, false, false]
    })
    foodRef.add({
        code: "16",
        name: "Blacked Chicken Cowboy",
        description: "house greens, edamame, corn, black beans, feta, dates, walnut, honey lime vinaigrette, garlic croutons",
        emotion: "hungry",
        nationality: "american",
        Avoid: [false, false, false, false]
    })
    foodRef.add({
        code: "17",
        name: "Dynamite Roll",
        description: "prawn tempura, sweet soy glaze",
        emotion: "hungry",
        nationality: "japaneese",
        Avoid: [false, false, false, false]
    })
    foodRef.add({
        code: "18",
        name: "Kung Pao Lettuce Wraps",
        description: "five spice chicken, peanuts, crispy noodles, spicy kung pao sauce | veggie lettuce wraps",
        emotion: "hungry",
        nationality: "chineese",
        Avoid: [false, false, false, false]
    })
    foodRef.add({
        code: "19",
        name: "Crispy Caulifower",
        description: "charred jalapeno ranch, aged parmesan",
        emotion: "hungry",
        nationality: "american",
        Avoid: [false, true, false, false]
    })
    foodRef.add({
        code: "20",
        name: "Litle Nachos",
        description: "a smaller helping of our loaded nachos",
        emotion: "hungry",
        nationality: "mexican",
        Avoid: [false, false, false, false]
    });
}

var foodCounter = 0; //food counter - how many foods were added to the list so far?
var howMany = 3; //defines how many foods will be suggested to the user

function displayFood(randId) {
    db.collection("Food").get()
        .then(allFood => {
            var doc = allFood.docs[randId];

            var foodId = doc.data().code;
            var foodName = doc.data().name;

            //create a card using the pre-defined template;
            let newcard = CardTemplate.content.cloneNode(true);

            //update title and text and image
            newcard.querySelector('.card-title').innerHTML = foodName;
            newcard.querySelector('.card-image').src = "./images/foods/p" + foodId + ".jpg";
            newcard.querySelector('.card').onclick = function() {
                window.location.href = "details.html?collection=" + "Food" + "&id=" + doc.id;
            };

            //give unique ids to all elements for future use
            newcard.querySelector('.card-title').setAttribute("id", "ctitle" + foodId);
            newcard.querySelector('.card-image').setAttribute("id", "cimage" + foodId);

            //attach to gallery
            document.getElementById('suggestionList').appendChild(newcard);
            foodCounter++;

            if (foodCounter == howMany) { //display three foods and then attach the refresh at the bottom
                newcard = ShuffleTemplate.content.cloneNode(true);
                document.getElementById('suggestionList').appendChild(newcard);
            }
        })
}

function suggestion() { //randomize a list of foods, using the preference and emotion values to prioritize specific foods
    document.getElementById('suggestionList').replaceChildren(); //empty the list first
    foodCounter = 0; //reset the food counter
    var suggestionCandidates = []; //candidates of the foods that will be added to the list
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("users").doc(user.uid).get()
                .then(userDoc => {
                    var avoidList = userDoc.data().Avoid; //list of foods that will NOT be added to the list
                    var emo = userDoc.data().emotion; //the emotion the user picked on the emotion modal
                    var fav1 = userDoc.data().FavoriteCousine1;
                    var fav2 = userDoc.data().FavoriteCousine2;
                    db.collection("Food").get()
                        .then(snap => {
                            snap.forEach(doc => { //iterate through each food
                                //all foods in the database have tags such as nationality, emotion, avoid
                                //the avoid tags refer to the agllergy the food might contain, as well as tags like meat for vegetarians
                                let avoid = 0;
                                for (let i = 0; i < doc.data().Avoid.length; i++) {
                                    if (doc.data().Avoid[i] && avoidList[i]) {
                                        //see if any of the food's avoid tags collide with the user's preference settings 
                                        //if there is one, this food cannot pass the condition (line 264) and will not be added as a candidate
                                        avoid++;
                                    }
                                }
                                if (avoid == 0) {
                                    suggestionCandidates.push(doc.data().code); //add the food to the candidate list
                                    if (doc.data().nationality == fav1 || doc.data().nationality == fav2) {
                                        //if the food's nationality tag match with the user's favorite cuisine, it will be added to the candidate list one more time
                                        suggestionCandidates.push(doc.data().code);
                                    }
                                    if (doc.data().emotion == emo) {
                                        //if the food's emotion tag match with the user's emotion, it will be added to the candidate list one more time
                                        suggestionCandidates.push(doc.data().code);
                                    }
                                }
                            })
                            //candidates are all dicided, now can randomize
                            //the more tags the food has, the more candidates it will have
                            //the ratio can always be readjusted - modify the line 266, 269, 273
                        }).then(() => {
                            var suggestionList = []; //this list represents the final list of foods that will be suggested to the user
                            var randId = 0;
                            for (var i = 0; i < howMany; i++) {
                                do {
                                    //generate a random number and use it to decide which food will be suggested
                                    randId = Math.floor(Math.random() * suggestionCandidates.length);
                                } while (suggestionList.includes(randId)) //this condition ensures that there is no duplicats on the list
                                displayFood(randId);
                                suggestionList.push(randId);
                            }
                        })
                })
        } else {
            alert("You must be logged in.");
            window.location.assign("login.html");
        }
    })
}
suggestion();