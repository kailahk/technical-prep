// COMMON SORTING METHODS

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


// Quick sort - Ω(log(N))	Θ(log(N)) , O(N^2) , O(log(N)) , Unstable , Comparison