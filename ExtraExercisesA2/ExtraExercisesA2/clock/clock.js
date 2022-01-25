"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let now = new Date();
    let hours=$("#hours");
    hours = now.getHours();

    var ampm = "AM"; // set default value

    console.log(hours);

    // // correct hours and AM/PM value for display

    // if (hours > 12) { // convert from military time

    // hours = hours - 12;

    // ampm = "PM";

    // } else { // adjust 12 noon and 12 midnight

    // switch (hours) {

    // case 12: // noon

    // ampm = "PM";

    // break;

    // case 0: // midnight

    // hours = 12;

    // ampm = "AM";

    // }
    };

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime;

	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    

});