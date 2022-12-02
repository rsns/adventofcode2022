import { readFile } from "../shared/read-file";

export function dayOneSolution() {
    // Save file contents to a variable
    const fileContents = readFile('./src/day-1/input.txt');

    // Split the value into array
    const caloriesArray = fileContents.split(/\r?\n/).map(Number);

    // We will need to count the total number of calories each elf has and push them to a new array
    const totalCaloriesArray = [];
    let totalCalories = 0;

    // push totalCalories to array and set back to 0
    function pushToArrayAndUpdateTotalCalories(totalCal) {
        totalCaloriesArray.push(totalCal);
        totalCalories = 0;
    }

    // count total calories, if hit zero push to totalCaloriesArray and do reset
    caloriesArray.map(cal => cal ? totalCalories += cal : pushToArrayAndUpdateTotalCalories(totalCalories));
    console.log("dayOneSolution", Math.max(...totalCaloriesArray)); // 69206
}

