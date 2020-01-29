/* eslint-disable indent */
import data from './data.js';


function linearSearch(array, value) {
  for (let i=0; i<array.length; i++){
    if(array[i] === value) {
      return i + 1;
    }
  }
  return -1;
};

function binarySearch(array, value, start=0, end=array.length-1, count=0) {
    if (start > end) return -1;

    let index = Math.floor((start + end)/2);
    let item = array[index];

    if (item === value) {
        return count;
    }
    else if (item < value) {
        return binarySearch(array, value, index+1, end, count++);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index-1, count++);
    }
}

export default {linearSearch, binarySearch};