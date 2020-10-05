console.log('Bang');

const body = document.querySelector('body');
const baselinePixels = document.querySelector('#baseline-pixels');
const calculationExplanation = document.querySelector('#calculation-explanation');
const consolidatedPixels = document.querySelector('#consolidated-pixels');

// Eventual dynamic allocation of the level of interpolation between lines
const bandTDIs = {
  0.67: 16,
  0.87: 16,
  1.38: 8,
  1.61: 8,
  3.74: 16,
  8.5: 8,
  10.76: 8,
  13.3: 8,
};

const data1 = [4, 5, 1, 23, 65, 66, 72, 53, 6, 1];
const data2 = [11, 3, 14, 21, 50, 62, 81, 44, 16, 9];
const data3 = [7, 14, 22, 95, 101, 15, 25, 88, 10, 2];
const data4 = [2, 5, 152, 24, 23, 77, 14, 2, 115, 14];
// const data5 = [5, 24, 6, 125, 25, 23, 88, 19, 34, 58];
// const data6 = [7, 44, 12, 58, 93, 67, 27, 14, 38, 13];
// const data7 = [1, 35, 124, 98, 73, 14, 72, 47, 18, 24];


function buildBaselineDisplay(arrayOfArrays) {
  arrayOfArrays.forEach(array => {
    switch (array) {
      case arrayOfArrays[0]:
        displayBaselinePixels(array, baselinePixels)
        for(let i = 0; i < 3; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        break;
      case arrayOfArrays[1]:
        for(let i = 0; i < 1; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        displayBaselinePixels(array, baselinePixels)
        for(let i = 0; i < 2; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        break;
      case arrayOfArrays[2]:
        for(let i = 0; i < 2; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        displayBaselinePixels(array, baselinePixels)
        for(let i = 0; i < 1; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        break;
      case arrayOfArrays[3]:
        for(let i = 0; i < 3; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare)
        }
        displayBaselinePixels(array, baselinePixels)
        break;
      
      default:
        break;
    }
  })
}

buildBaselineDisplay([data1, data2, data3, data4])

function displayBaselinePixels(array, htmlElement) {
  array.forEach(value => {
    const newSquare = document.createElement('button');
    newSquare.className = 'square';
    // newSquare.style.background = `rgb(${value + 60}, ${value + 60}, ${value + 60})`
    newSquare.style.background = `rgb(${value + 100}, 0, 0)`
    htmlElement.append(newSquare);
  })
}

// Troubleshooting and validations
function arrayLengths(arrayOfArrays) {
  arrayOfArrays.forEach(array => {
    console.log(array.length)
  });
}

function rollTide(arrayOfArrays) {
  const consolidatedArray = [];
  for(let n = arrayOfArrays.length - 1; n < arrayOfArrays[0].length; n++) {
    let j = 0;
    let sum = 0;
    for(let i = n; i > -1; i--) {
      sum += arrayOfArrays[1][i]
      j++
    }
    consolidatedArray.push(sum)
    console.log(consolidatedArray)
  }
  return consolidatedArray;
}

rollTide([data1, data2, data3, data4]);
// displayBaselinePixels(rollTide([data1, data2, data3, data4, data5, data6, data7]), consolidatedPixels);
