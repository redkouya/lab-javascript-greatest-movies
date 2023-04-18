// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  /* BONUS
    let newArr=moviesArray.filter((eachElement)=>{

        return noRepeat.includes(eachElement.director)
    }).map((eachEl)=>{
        return eachEl.director
    })
    return newArr;
*/
  let newArr = moviesArray.map((eachEl) => {
    return eachEl.director;
  });
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let sum = moviesArray.reduce((acc, el) => {
    let isDrama = el.genre.filter((eachElement) => {
      //usando filter
      //  console.log(eachElement.includes( "Drama"),"includes");
      return eachElement.includes("Drama");
    });
    // console.log(isDrama,"isdrama",acc);
    if (
      el.director.toUpperCase() === "STEVEN SPIELBERG" &&
      isDrama.length > 0
    ) {
      //  console.log("acc", acc);
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return sum;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  console.log(moviesArray);
  let sum = moviesArray.reduce((acc, element) => {
    if (element.score !== undefined) {
      return element.score + acc;
    } else {
      return acc;
    }
  }, 0);

  return Number((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let isDrama = moviesArray.filter((eachElement) => {
    //usando filter
    //  console.log(eachElement.includes( "Drama"),"includes");
    return eachElement.genre.includes("Drama");
  });
  if (isDrama.length === 0) {
    return 0;
  }
  let sum = isDrama.reduce((acc, el) => {
    if (el.score !== undefined) {
      return acc + el.score;
    } else {
      return acc;
    }
  }, 0);
  return Number((sum / isDrama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = JSON.parse(JSON.stringify(moviesArray));
  newArray.sort((el1, el2) => {
    if (el1.year === el2.year) {
      // el1.title.localeCompare(el2)
      if (el1.title < el2.title) {
        return -1;
      } else if (el1.title > el2.title) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return el1.year - el2.year;
    }
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let count = 0;
  let newArray = JSON.parse(JSON.stringify(moviesArray));
  let sortedArray = moviesArray.sort((el1, el2) => {
    if (el1.title < el2.title) {
      return -1;
    } else if (el2.title < el1.title) {
      return 1;
    } else {
      return 0;
    }
    // return el1.title.localeCompare(el2.title)
  });

  //  console.log(sortedArray,"ORDEN ALFABETICO")
  let copyArr = sortedArray.slice(0, 20);

  let mappedArr = copyArr.map((element) => {
    return element.title;
  });
  // mappedArr.sort()
  // console.log(mappedArr,"copyArr")

  return mappedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let copyArr = JSON.parse(JSON.stringify(moviesArray));
  let newArray = copyArr.forEach((element) => {
    let total = 0;
    let hoursArr = element.duration.split("h");
    let hours = 0;
    if (hoursArr.length > 0) {
      hours = hoursArr[0] * 60;
    } else {
      hours = 0;
    }
    //console.log(hours,"hours")
    let minutesArr = element.duration.split("min");
    let minutes = Number(minutesArr[0].slice(2));
    if (minutes > 0 && hours > 0) {
      total = minutes + hours;
    } else {
      total = hours;
    }
    total = minutes + hours;
    // console.log(total,"total")
    element.duration = total;
    // console.log(element,"element");
  });
  //console.log(copyArr,"copyArr");
  return copyArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
  
}
