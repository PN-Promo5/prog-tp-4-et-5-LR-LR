// 1st part : data processing
// 1.1
// header
let header = ["Prénom", "Nom", "Age", "Ville", "Adresse mail", "Identifiant"];
// all users
let user1 = ["Mathias", "Ritrono", "34", "Nantes", "mr@yopmail.com", "1"];
let user2 = ["Salif", "Bamogo", "34", "Brest", "sb@yopmail.com", "2"];
let user3 = ["Kristina", "Pavlov", "20", "Villeurbanne", "kp@yopmail.com", "3"];
let user4 = ["Elise", "Seti", "30", "Grenoble", "es@yopmail.com", "4"];
let user5 = ["Pierrick", "Di Angelo", "18", "Strasbourg", "pd@yopmail.com", "5"];
let user6 = ["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail.com", "6"];
let user7 = ["Paige", "Anderson", "42", "Evry", "pa@yopmail.com", "7"];
// array with all the new user
let users = [header, user1, user2, user3, user4, user5, user6, user7];

// 1.2
function addNewUser(firstName, lastName, age, city, email) {
  let newUser = [firstName, lastName, age, city, email, ]; // get the informations in an array
  let id = parseInt(users[users.length - 1][5]); // take the last id and convert into an int value
  let newId = (id + 1).toString(); // calculate the next id and convert into a string value
  newUser.push(newId); // add the new id with the informations array
  users.push(newUser); // add tne new array in the users array
}

// 1.3
function usersLiveInCity(city) {
  let i = 0;
  let currentElement;
  let usersLiveInCityArray = []; // array that will contain the users who live in the city
  while (i < users.length) {
    currentElement = users[i];
    i++;
    if (currentElement[3] === city) {
      usersLiveInCityArray.push(currentElement); // add the user who live in the city to the array
    }
  }
  return usersLiveInCityArray;
}

// 1.4
function usersWithName(name) {
  let i = 0;
  let currentElement;
  let usersWithNameArray = []; // array that will contain the users who have the firstname or the lastname "name"
  while (i < users.length) {
    currentElement = users[i];
    i++;
    if (currentElement[0] === name || currentElement[1] === name) {
      usersWithNameArray.push(currentElement); // add the users who have the name to the array
    }
  }
  return usersWithNameArray;
}

// 1.5
function searchString(string) {
  let i = 0;
  let j;
  let currentElement;
  let usersWithStringArray = []; // array that will contain the users who have the string in their array
  while (i < users.length) {
    currentElement = users[i];
    i++;
    j = 0;
    while (j < currentElement.length) {
      if (currentElement[j] === string) {
        usersWithStringArray.push(currentElement); // add the users who have the string to the array
      }
      j++;
    }
  }
  return usersWithStringArray;
}

// 2nd part : graphic display
// 2.1
function createArray(array, haveHeader) {
  let table = document.createElement("table");
  let tr;
  let i = 0;
  let j;
  if (haveHeader) {
    tr = document.createElement("tr");
    while(i < array[0].length){
      tr.innerHTML += "<th>"+array[0][i]+"</th>";
      i++;
    }
    table.appendChild(tr);
    i = 1;
  }
  while (i < array.length) {
    tr = document.createElement("tr");
    j = 0;
    while (j < array[i].length) {
      tr.innerHTML += "<td>" + array[i][j] + "</td>";
      j++;
    }
    table.appendChild(tr);
    i++;
  }
  document.body.appendChild(table);
}
