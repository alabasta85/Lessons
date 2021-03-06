
function nonUniqueValues(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (arr.indexOf(el) === arr.lastIndexOf(el)) {
            arr2.push(el);
        }
    }
    return arr2;
}

console.log(nonUniqueValues([1, 1, 1, 2, 2, 2, 3, 4]));

// this comes from google
const filter_Non_Unique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));


// The Array.filter() method creates a new array with all elements that pass the test implemented by the provided function.

// step 0
function nonUniqueValues0(arr) {
    function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    }
    var arr2 = arr.filter(filterFunction);
    return arr2;
}

// step 1
function nonUniqueValues1(arr) {
    var arr2 = arr.filter(function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
    return arr2;
}
// step 2
function nonUniqueValues2(arr) {
    return arr.filter(function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
}

// step 3
function nonUniqueValues3(arr) {
    return arr.filter((el) => {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
}

// step 4
function nonUniqueValues4(arr) {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

// step 5
const nonUniqueValues5 = (arr) => {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

// step 6
const nonUniqueValues6 = (arr) => arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));

console.log(nonUniqueValues6([1, 1, 1, 2, 2, 2, 3, 4]));

// --------------------------------------------------------------------------------------

function commonOccurences0(arr1, arr2) {
    let retArr = [];

    for (var el of arr1) {
        if (arr2.includes(el)) 
            retArr.push(el);
    }

    return retArr;
}

console.log(commonOccurences0([1, 2, 3, 4, 5, 6, 9, 10, 11, 12], [3, 5, 7, 11, 13])); // should print out [3, 5, 11]

const commonOccurences1 = (arr1, arr2) => {
    let retArr = [];

    for (var el of arr1) {
        if (arr2.includes(el)) 
            retArr.push(el);
    }

    return retArr;
}

const commonOccurences2 = (arr1, arr2) => {
    function testFunction(el) {
        return arr2.includes(el)
    }
    
    let retArr = arr1.filter(testFunction);

    return retArr;
}

const commonOccurences3 = (arr1, arr2) => {
    function testFunction(el) {
        return arr2.includes(el)
    }
    
    return arr1.filter(testFunction);
}

const commonOccurences4 = (arr1, arr2) => {
    return arr1.filter(function testFunction(el) {
        return arr2.includes(el)
    });
}

const commonOccurences5 = (arr1, arr2) => {
    return arr1.filter((el) => {
        return arr2.includes(el)
    });
}

const commonOccurences6 = (arr1, arr2) => {
    return arr1.filter((el) => arr2.includes(el));
}

const commonOccurences7 = (arr1, arr2) => arr1.filter((el) => arr2.includes(el));