//Q1
// The sequence of the binary search would be:
    // 11, 5, 6, 8
    // 11, 15, 17
function BST(array, value, start=0, end=array.length -1){
    if(start > end){
        return -1;
    }
    if(array[Math.floor((start + end)/2)].Dewey === value){
        return Math.floor((start + end)/2);
    } else if(array[Math.floor((start + end)/2)].Dewey > value){
        BST(array, value, 0, Math.floor((start + end)/2));
    } else if(array[Math.floor((start + end)/2)].Dewey < value) {
        BST(array, value, Math.floor((start + end)/2), end);
    }
}

function findBook(title, Dewey, array){
    //use binary search to get start and end index of the Dewey section
    //linearly search through that section
    let index =BST(array, Dewey);
    if(index === -1){
        return 'not found'
    }
    while(array[index].dewey === Dewey){
        if(array[index].title === title){
            return index;
        }
        else index--;
    }
    while(array[index].dewey === Dewey){
        if(array[index].title === title){
            return index;
        }
        else index++;
    }
    return 'not found';

}

//   14, 19, 15, 27, 25, 79, 90, 91, 89, 35