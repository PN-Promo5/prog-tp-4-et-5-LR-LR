// Exercice 1: Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau.")
function displayElementsArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt); // display the current element
  }
}

// Exercice 2: Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau.
function displayFirst10ElementsArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  if (array.length <= 10) { // display the first 10 values if the array have at least 10 values
    while (i < array.length) {
      currentElmt = array[i];
      i++;
      console.log(currentElmt);
    }
  } else {
    while (i < 10) { // display all the array if the array have less than 10 values
      currentElmt = array[i];
      i++;
      console.log(currentElmt);
    }
  }
}

// Exercice 3: Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau.
function displayLast10ElementsArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element

  if (array.length <= 10) { // display the last 10 values if the array have at least 10 values
    while (i < array.length) {
      currentElmt = array[i];
      i++;
      console.log(currentElmt);
    }
  } else {
    while (i < 10) { // display all the array if the array have less than 10 values
      currentElmt = array[array.length - 10 + i];
      i++;
      console.log(currentElmt);
    }
  }
}

// Exercice 4: Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1.
function copyArrayElementsPlus1(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let copyArray = []; // the array that will contains the new values (copyArray[i] = array[i]+1)
  while (i < array.length) {
    currentElmt = array[i] + 1; // take the value of array[i] and add 1 before adding to the current element
    i++;
    copyArray.push(currentElmt);
  }
  return copyArray;
}

// Exercice 5: Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non.
function displayEvenElementsOfArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) { // test if the current element is an even or an odd value and display the result
      console.log(currentElmt + " is an even number.");
    } else {
      console.log(currentElmt + " is an odd number");
    }
  }
}

// Exercice 6: Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau.
function sumAllElementsArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let sum = 0; // variable that will contains the sum of all the elements of the array
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    sum += currentElmt; // update the sum by adding the new current element
  }
  return sum;
}

// Exercice 7: Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau.
function countEvenElementsOfArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let nbEvenElements = 0; // variable that will contains the number of event elements of the array
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) { // test if the current element is an even value
      nbEvenElements++;
    }
  }
  return nbEvenElements;
}

// Exercice 8: Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau.
function maxValueOfArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let maxValue = array[0]; // variable that will contains the max value of the array
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if (currentElmt > maxValue) { // test if the current element is greater than the current max value
      maxValue = currentElmt; // change the max value
    }
  }
  return maxValue;
}

// Exercice9: Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum et minimum de ce tableau
function displayMaxAndMinValuesOfArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  // initialise maxValue and minValue with the first value of the array
  let maxValue = array[0]; // variable that will contains the max value of the array
  let minValue = array[0]; // variable that will contains the min value of the array
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if (currentElmt > maxValue) { // test if the current element is greater than the current max value
      maxValue = currentElmt; // change the max value
    }
    if (currentElmt < minValue) { // test if the current element is greater than the current min value
      minValue = currentElmt; // change the min value
    }
  }
  console.log("Minimum = " + minValue);
  console.log("Maximum = " + maxValue);
}

// Exercice 10: Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.
function isOrdered(array) {
  let i = 1; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  while (i < array.length) {
    currentElmt = array[i];
    if (currentElmt < array[i - 1]) { // test if the current element is less than the previous value of the array
      return false;
    }
    i++;
  }
  return true;
}

// Exercice 11: Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque élément n'a qu'une seule occurrence.
function copyArrayWithOneOccurenceOfAnElement(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let copyArray = [];
  let j; // variable used as an index for the copyArray path
  let canCopy; // to know if I can copy the currentElmt on the copyArray
  copyArray.push(array[0]); // copy of the first element
  while (i + 1 < array.length) {
    currentElmt = array[i + 1];
    i++;
    j = 0;
    canCopy = true;
    while (j < copyArray.length) {
      if (currentElmt === copyArray[j]) { // test if the current element already is in the copyArray
        // verify if the number is already on the copyArray
        canCopy = false;
      }
      j++;
    }
    if (canCopy) { // test if i can copy the current element in the new array
      copyArray.push(currentElmt);
    }
  }
  return copyArray;
}

// Exercice 12: Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre des éléments est inversé.
function reverseArray(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable that will contains the current element
  let copyArray = [];

  while (i < array.length) {
    currentElmt = array.length - 1 - i; // the current element runs through the array from the last index to the first index
    copyArray.push(array[currentElmt]);
    i++;
  }
  return copyArray;
}

// Exercice 13: Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.
function concatenate2Arrays(array1, array2) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let concatenateArrays = []; // array that will contains the copy of the 2 arrays together

  while (i < array1.length) { // copy the first array
    currentElmt = array1[i];
    i++;
    concatenateArrays.push(currentElmt);
  }

  i = 0;

  while (i < array1.length) { // then copy the second array
    currentElmt = array2[i];
    i++;
    concatenateArrays.push(currentElmt);
  }
  return concatenateArrays;
}

// Exercice 14: Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.
function returnOnlyWordsBeginsWithAVowel(array) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let beginWithAVowel;
  let wordsBeginsWithAVowel = [];

  while (i < array.length) {
    currentElmt = array[i];
    i++;
    beginWithAVowel = itBeginsWithAVowel(currentElmt);
    if (beginWithAVowel) { // if the current element begins with a vowel
      wordsBeginsWithAVowel.push(currentElmt); // copy the current element into the array
    }
  }

  return wordsBeginsWithAVowel;
}

function itBeginsWithAVowel(word) { // function return true if the first letter of a word is a vowel, false otherwise
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {
    return true;
  } else {
    return false;
  }
}

// Exercice 14bis: Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est un palindrome, ou qui renvoie faux si ce n’est pas le cas.
function isAPalindrome(string) {
  let i = 0; // variable used as an index for the array path
  let currentElmt; // variable containing the current element
  let currentElmt2; // variable containing the secodn current element, the symmetrical value with respect to the center of the array

  while (i < string.length / 2) {
    currentElmt = string[i];
    currentElmt2 = string[string.length - 1 - i];
    i++;

    if (currentElmt != currentElmt2) {
      return false;
    }
  }
  return true;
}

// Exercice 15: Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.
function isAnAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    let string1Split = string1.split("");
    let string2Split = string2.split("");
    string1Split.sort();
    string2Split.sort();
    let i = 0; // variable used as an index for the array path
    while (i < string1Split.length) {
      if (string1Split[i] !== string2Split[i]) {
        return false;
      }
      i++;
    }
    return true;
  }
}
