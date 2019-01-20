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

}

function removeElementFromBeginningOfArray(array){

}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
