// COMMON SORTING ALGORITHMS

// Comparison sorts: compares two values and decides which to put first
// Distribution sorts: uses some property of the items to decide where they fit
// stability: preserves the initial order of a collection

const arr = [25, 3, 22, 65, 46, 8, 1, 44, 0, 7, 55, 8]

// Type of sort - Best Case, Avg Case, Worst Case, Space, Stability, Sorting Method

// Bubble sort - Ω(N) , Θ(N^2) , O(N^2)	, O(1) , Stable , Comparison
// iterate through array, compare currItem to nextItem, swap if necessary,
// move onto next item, until you go through the array w/out swapping, repeat iteration

function bubbleSort(arr) {
    const swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } return arr
}

// Insertion sort - Ω(N) , Θ(N^2) , O(N^2) , O(1) , Stable , Comparison
// iterate through array start to end. For each currItem during the initial iteration,
// iterate back through the array currItem to start and compare currItem to each other item
// you have already seen until you find its correct placement

function insertionSort(arr) {
    arr.forEach(function (num, idx) {
        let sortedArr = arr.slice(0, idx)
        for (let i = sortedArr.length - 1; i >= 0; i--) {
            if (arr[i] > num) {
                let temp = arr[i];
                arr[i] = num;
                arr[i + 1] = temp
            }
        }
    })
    return arr
}


// Bucket sort - Ω(N+K) , Θ(N+K) , O(N^2) , O(N+K) , Stable , Distribution
// decide number of buckets, sort elements into buckets based on their values,
// and then sort each bucket. used for integers or strings
// default num of buckets should be square root of num of items to sort
// code below pulled from: https://initjs.org/bucket-sort-in-javascript-dc040b8f0058

function bucketSort(array, bucketSize) {
    if (array.length === 0) {
        return array;
    }

    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;

    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })

    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    // Sorting buckets
    array.length = 0;

    allBuckets.forEach(function (bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });

    return array;
}


// Radix sort - Ω(NK) , Θ(NK) , O(NK) , O(N+K) , Stable , Distribution
// decide number of buckets, sort elements into buckets based on their values,
// and then sort each bucket. used for integers
// default num of buckets should be square root of num of items to sort
// code below pulled from: https://www.doabledanny.com/radix-sort-in-javascript#3

// write helper function that takes a number and a place and returns 
// the value of the digit at the specified place in the given number
// e.g. getDigit(43263, 1) returns 6
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// write helper function that returns number of digits in each number
// e.g. digitCount(3547) returns 4
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// write helper function that returns the number of digits of the number with the most digits
// e.g. mostDigits([44, 849, 1, 3333]) returns 4
function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

// Define Radix sort function that accepts an array of numbers.
function radixSort(arrOfNums) {
    // Find the number in the array with the most digits
    let maxDigitCount = mostDigits(arrOfNums)
    // Loop from k = 0 up to this max digit count.
    // For each loop iteration...
    for (let k = 0; k < maxDigitCount; k++) {
        // Create an array of ten empty arrays (one bucket for each possible digit, from 0 to 9)
        let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
        for (let i = 0; i < arrOfNums.length; i++) {
            // Put each number in its corresponding bucket based on its digit at the kth place.
            let digit = getDigit(arrOfNums[i], k)
            // Replace the existing array of numbers with the values in the buckets, starting from 0 and going up to 9.
            digitBuckets[digit].push(arrOfNums[i])
        }
        // New order after each loop
        arrOfNums = [].concat(...digitBuckets)
    }
    // Return the ordered array
    return arrOfNums
}


// Merge sort - Ω(log(N)) , Θ(log(N)) , O(log(N)) , O(N) , Stable , Comparison
// phase 1: split the array in half until you have a bunch of sorted arrays containing one element
// phase 2: merge those sorted arrays back together with the merge helper fn / 'merge algorithm'

// write merge helper fn / 'merge algorithm'
function merge(left, right) {
    let sortedArr = []
    // Insert the smallest item into sortedArr
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

// write merge sort function that takes an array and uses recursion to halve the arrays
function mergeSort(arr) {
    // define base case
    if (arr.length <= 1) return arr;
    // find index in middle of array
    let midIdx = Math.floor(arr.length / 2)
    // use recursion to merge the sorted arrays
    let left = mergeSort(arr.slice(0, midIdx))
    let right = mergeSort(arr.slice(midIdx))

    return merge(left, right)
}


// Quick sort - Ω(log(N))	Θ(log(N)) , O(N^2) , O(log(N)) , Unstable , Comparison
// not great to use when there are a lot of repeat or similar values in an array. choose merge

// write partition helper function that takes an arr, start idx, and end idx
function partition(arr, start, end) {
    // Grab the value of the pivot item from the start of the array
    const pivot = arr[start]
    // store the idx of the pivot item in a var to keep track of where the pivot will end up
    let swapIdx = start
    // iterate through arr from start to end
    for (let i = start + 1; i <= end; i++) {
        // check if currItem in iteration is smaller than value of pivot item
        if (pivot > arr[i]) {
            // if so, increase swapIdx
            swapIdx++
            if (i !== swapIdx) {
                // if curr idx in iteration is not equal to swapIdx (if element is not already the right place), SWAP using destructuring assignment
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
            }
        }
    }
    // after looping through the array, check if swapIdx is not equal to start (if element is not already the right place)
    if (swapIdx !== start) {
        // if so, Swap pivot into correct place using destructuring assignment
        [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]]
    }
    // return the swap index
    return swapIdx
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    // define the base case
    if (start >= end) return
    // call the partition helper function to get the updated pivot index
    let pivotIndex = partition(arr, start, end)
    // once you have the pivot index, recursively call the pivot helper on the 
    // subarrays to the left and right of that index
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    // return the sorted array
    return arr
}

