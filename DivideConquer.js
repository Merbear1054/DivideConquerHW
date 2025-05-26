// Count number of zeroes in a binary array sorted with 1s first, then 0s
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return arr.length - left;
}

// Find frequency of a number in a sorted array
function sortedFrequency(arr, num) {
    function findFirst() {
        let left = 0, right = arr.length - 1, result = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                right = mid - 1;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    function findLast() {
        let left = 0, right = arr.length - 1, result = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    let first = findFirst();
    if (first === -1) return -1;
    let last = findLast();
    return last - first + 1;
}

// Find index of a number in a rotated sorted array
function findRotatedIndex(arr, num) {
    function findPivot() {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    function binarySearch(start, end) {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === num) return mid;
            else if (arr[mid] < num) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }

    let pivot = findPivot();
    if (num >= arr[pivot] && num <= arr[arr.length - 1]) {
        return binarySearch(pivot, arr.length - 1);
    } else {
        return binarySearch(0, pivot - 1);
    }
}

// Count number of rotations in a rotated sorted array
function findRotationCount(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// Find floor of x in a sorted array
function findFloor(arr, x) {
    let left = 0, right = arr.length - 1;
    let floor = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) return arr[mid];
        else if (arr[mid] < x) {
            floor = arr[mid];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return floor;
}
