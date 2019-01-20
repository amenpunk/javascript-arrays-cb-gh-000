var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
    return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
   array.unshift(element);
    return array;
}

function accessElementInArray(array,index){
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    return array.shift();
}

function removeElementFromBeginningOfArray(array){
   return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
    var x = arra.length();
    array[x].push();
}

function removeElementFromEndOfArray(array) {

}
