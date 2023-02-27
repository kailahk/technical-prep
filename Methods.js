// METHODS

// .push(elementToAdd0, elementToAdd1, ..., elementToAddN)

const animals = ['cats', 'bears', 'sheep'];
const newLength = animals.push('pigeons');

animals = ['cats', 'bears', 'sheep', 'pigeons']
newLength = 4


// .pop()

const herbs = ['mint', 'parsley', 'dill']
const herb = herbs.pop()

herbs = ['mint', 'parsley']
herb = 'dill'


// .shift()

const berries = ['blueberries', 'strawberries', 'blackberries']
const firstBerry = berries.shift()

berries = ['strawberries', 'blackberries']
firstBerry = 'blueberries'


// .unshift(elementToAdd0, elementToAdd1, ..., elementToAddN)

const apples = ['fuji', 'mcintosh', 'granny smith']
const moreApples = apples.unshift('honeycrisp', 'gala')

apples = ['fuji', 'mcintosh', 'granny smith', 'honeycrisp', 'gala']
moreApples = 5


// .forEach((element) => { /* … */ })
// .forEach((element, index) => { /* … */ })
// .forEach(callbackFn)

const letters = ['k', 'a', 'i', 'l', 'a', 'h']
letters.forEach(letter => console.log(letter));


// .some((element) => { /* … */ })
// .some((element, index) => { /* … */ })
// .some(callbackFn)
// tests if at least one element in the array passes 
// the test implemented by the provided cb function

const seasons = ['fall', 'winter', 'spring', 'summer']
const hasFall = seasons.some(season => season === 'fall')

hasFall = true


// .at(index)

const nums = [1, 3, 6, 7, 10, 14]
const idx = 2
const num = nums.at(idx)

num = 6


// .splice(start, deleteCount, elementToAdd0, elementToAdd1, ..., elementToAddN)

const months = ['jan', 'feb', 'mar', 'apr']
const moreMonths = months.splice(3, 0, 'may', 'june', 'july')

months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july']


// .slice(start, end)
// start is included in shallow copy of new arr but end is not
const bugs = ['red ant', 'ladybug', 'longhorn beetle', 'firefly']
const someBug = bugs.slice(2, 3)

someBug = ['longhorn beetle']


// .sort()
// .sort((a, b) => { /* … */ } )
// .sort(compareFn)
// a - b is ascending
// b - a is descending
// sorts elements in place and returns the sorted array
// default is convert elements to strings and sort in ascending order
// use comparator cb functions to specify other types of sorts

const days = [1, 5, 8, 2, 4, 10, 24]
days.sort((a, b) => a - b)

days = [1, 2, 4, 5, 8, 10, 24]


// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// filter(callbackFn)

const words = ['lavender', 'crumb', 'persnickety']
const longWords = words.filter(word => word.length > 6)

words = ['lavender', 'persnickety']


// .reduce((accumulator, currentValue) => { /* … */ })
// .reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// .reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// .reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// .reduce(callbackFn)
// .reduce(callbackFn, initialValue)

const arr = [34, 55, 1, 20, 17, 6]
const count = 5
const countWithArr = arr.reduce(
    (accumulator, currVal) => accumulator + currVal, count
)

countWithArr = 138


// .map((element) => { /* … */ })
// .map((element, index) => { /* … */ })
// .map(callbackFn)

const favNums = [2, 28, 99, 300]
const squaredFavNums = favNums.map(num => num*num)

squaredFavNums = [4, 784, 9801, 90000]


// .every((element) => { /* … */ })
// .every((element, index) => { /* … */ })
// .every(callbackFn)

const shortWords = ['pie', 'cry', 'sigh', 'feet']
const checkShortWords = shortWords.every(word => word.length <= 4)

checkShortWords = true


// .indexOf(element)

const critters = ['armadillo', 'chipmunk', 'kitten', 'squirrel']
const idxOfKitten = critters.indexOf('kitten')
const idxOfCat = critters.indexOf('cat')

idxOfKitten = 2
idxOfCat = -1