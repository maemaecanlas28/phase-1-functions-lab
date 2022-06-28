// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }

  function distanceFromHqInFeet(someValue) {
    const block = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return block * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distance = Math.abs((destination - start) * 264);
    return distance;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet <= 2000) {
        return ((feet-400)*0.02);
    }
    else if (feet < 2500 && feet > 2000) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
  }


//   Given the same starting and ending block as the previous test (hint hint), 
//   return the fare for the customer. 
//   The first four hundred feet are free. For a distance between 400 and 2000 feet, 
//   the price is 2 cents per foot (not including 400, which are free!). 
//   Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
//   Finally, Scuber does not allow any rides over 2500 feet — the function 
//   returns 'cannot travel that far' if a ride over 2500 feet is requested.