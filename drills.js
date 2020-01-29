const BST = require('./BST');
//Q1
// The sequence of the binary search would be:
    // 11, 5, 6, 8
    // 11, 15, 17
/*function BST(array, value, start=0, end=array.length -1){
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
}*/

//   14, 19, 15, 27, 25, 79, 90, 91, 89, 35
function inOrder(t) 
{
    if(!t){
        return ' ';
    }
    return inOrder(t.left) + t.value + inOrder(t.right)
}

function preOrder(t) 
{
    if(!t){
        return '';
    }
    return  t.value + ' ' + preOrder(t.left) +' '+ preOrder(t.right)
}

function postOrder(t) 
{
    if(!t){
        return '';
    }
    return postOrder(t.left) +' '+ postOrder(t.right) +' '+ t.value
}


let dataSet = new BST();

dataSet.insert(25, 25);
dataSet.insert(15, 15);
dataSet.insert(50, 50);
dataSet.insert(10, 10);
dataSet.insert(24, 24);
dataSet.insert(35, 35);
dataSet.insert(70, 70);
dataSet.insert(4, 4);
dataSet.insert(12, 12);
dataSet.insert(18, 18);
dataSet.insert(31, 31);
dataSet.insert(44, 44);
dataSet.insert(66, 66);
dataSet.insert(90, 90);
dataSet.insert(22, 22);

//console.log(inOrder(dataSet));
//console.log(preOrder(dataSet));
console.log(postOrder(dataSet));