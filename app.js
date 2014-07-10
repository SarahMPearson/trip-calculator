var prompt = require('sync-prompt').prompt

var drive = prompt("How far will you be driving? (miles) ");
var gasCost = prompt("How much is gas per gallon? ");
var tank = prompt("How many gallons is your gas tank? ");
var mpgRating =prompt("What is your vehicals MPG rating? ");
var speed = prompt("How fast are you going to drive? ");
var vehical = prompt("What type of vehical do you drive car or truck? ");

//turning my strings into integers
drive = parseInt(drive);
gasCost = parseFloat(gasCost);
tank =parseInt(tank);
mpgRating =parseInt(mpgRating);
speed =parseInt(speed);

//how much will this trip cost in gas
var gallons = drive/mpgRating;
var cost = (gasCost*gallons);
  console.log("It will cost you " + cost + " dollars to make this trip.");

// how many stops will they need
var tankCap = tank*mpgRating;
var stops = drive/tankCap;
  console.log("You'll need to stop " + stops.toFixed(2) + " times.");

//True mpg
var trueCarMPG;
  if (speed <=55) {
      console.log(mpgRating);
  }else if (vehical ==="car") {
    var difCar = speed - 55;
      for(var i = 1;  i <= difCar; i++){
        trueCarMPG = mpgRating - 1;
      }
      console.log("Your true gas mileage is " + trueCarMPG +" mpg")
  }else if (vehical === "truck") {
    var difTruck = (speed - 55) * 3;
    var trueTruckMPG = mpgRating-difTruck;
      console.log("Your true gas milage is " + trueTruckMPG + " mpg");
  }

// how many miles they will drive
//
  console.log("You will drive " + drive + " miles.");

