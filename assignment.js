// Started feetToMile function
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var rastaMile = feetToMile(12000);
console.log(rastaMile);

// end feetToMile function


// Started woodCalculator function
function woodCalculator(chair, bed, table){
    var chairCount = chair * 12;
    var bedCount = bed * 12;
    var tableCount = table * 12;
    var totalCat = chairCount + bedCount + tableCount;
    return totalCat; 
}
var totalCat = woodCalculator(18, 12, 16,);
console.log(totalCat);

// end woodCalculator function

// Started brickCalcultor function
function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Something is wrong!";
    }
};
let result1 = brickCalculator(12);
console.log(result1);
let result2 = brickCalculator(26);
console.log(result2);
let result3 = brickCalculator(35);
console.log(result3);
let result4 = brickCalculator(-4);
console.log(result4);
// end brickCalcultor function;

// Started tinyFriend function;
function tinyFriend(marks){
    var max = marks[0];
    for(var i = 0; i < marks.length; i++){
        var element = marks[i];
        if(element < max){
            max = element;
        }
    }
    return max;
}
var marks = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var result = tinyFriend(marks);
console.log("Small numbers = ", result);

// end tinyFriend function;
/*my name is Md Mahbub Ahmed
hello.js*/

