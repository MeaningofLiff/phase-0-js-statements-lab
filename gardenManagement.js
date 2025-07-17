const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//  If-Else for temperature
if (temperature > 80) {
    console.log("Watering on");
} else {
    console.log("Watering off");
}

//  If-Else for timeOfDay
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

// While loop to increment soilMoisture by 5 until 40
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}