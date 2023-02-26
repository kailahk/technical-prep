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
    arr.forEach(function(num, idx) {
        let sortedArr = arr.slice(0, idx)
        for (let i = sortedArr.length-1; i >= 0; i--) {
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


// Radix sort - Ω(NK) , Θ(NK) , O(NK) , O(N+K) , Stable , Distribution


// Merge sort - Ω(log(N)) , Θ(log(N)) , O(log(N)) , O(N) , Stable , Comparison


// Quick sort - Ω(log(N))	Θ(log(N)) , O(N^2) , O(log(N)) , Unstable , Comparison