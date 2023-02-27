// COMMON SEARCHING ALGORITHMS

// Brute force search methods iterate through the entire array and have an O(N) runtime.
//      this includes methods, for loops, etc.

const arr = [25, 33, 42, 46]

// type of search - Best Case, Avg Case, Worst Case, Space

// Binary search - O(1), O(log(N)), O(log(N)), Space is O(1) for iterative and O(logN) for recursive
// given a sorted array, cut it in half and compare the target val to the middle val.
// if target val is larger than the middle val, search the right half of the array. if smaller, search the left
// repeat until the middle val is the target val and return the idx
// can be done iteratively and recursively

function recursiveBinarySearch(val, arr) {
    // find middle element in arr
    let midIdx = Math.floor(arr.length / 2);
    // check edge case where the arr length is 1 and that one element is not the target val. If so, return false
    if (arr.length === 1 && arr[0] !== val) {
      return false
    }
    // check if the middle element's val is the target val. if so, return location (idx) in arr or true
    if (arr[midIdx] === val) {
      return true;
    } else if (arr[midIdx] > val) {
      // if the middle element's val is larger than target val, recursively search the left side of the arr
      return recursiveBinarySearch(val, arr.slice(0, midIdx))
    } else {
      // if the middle element's val is smaller than target val, recursively search the right side of the arr
      return recursiveBinarySearch(val, arr.slice(midIdx))
    }
  }


function iterativeBinarySearch(val, arr) {
    // initialize start as beginning of arr and end as end of arr
    let start = 0;
    let end = arr.length-1;
    // while start is less than or equal to end, loop through the array
    while (start <= end) {
        // find middle element in section of arr you're currently searching
        let midIdx = Math.floor((start+end) / 2)
        // check if middle element's val is the target val. if so, return location (idx) in arr or true
        if (arr[midIdx] === val) {
            return true;
        } else if (arr[midIdx] > val) {
            // if the middle element's val is larger than target val, search the left side of the arr 
            //  by changing end to right before midIdx
            end = midIdx - 1
        } else {
            // if the middle element's val is smaller than target val, search the right side of the arr 
            //  by changing start to right after midIdx
            start = midIdx + 1
        }
    }
}