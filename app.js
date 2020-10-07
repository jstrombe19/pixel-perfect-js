const body = document.querySelector('body');
const baselinePixels = document.querySelector('#baseline-pixels');
const calculationExplanation = document.querySelector(
  '#calculation-explanation'
);
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

const data1 = [114, 75, 31, 2, 95, 266, 112, 53, 226, 101];
const data2 = [91, 76, 44, 71, 190, 162, 81, 244, 116, 4];
const data3 = [39, 64, 92, 195, 151, 15, 225, 188, 110, 203];
const data4 = [2, 83, 152, 124, 23, 237, 114, 57, 115, 14];

// Additional sample data - could be used for further demonstration
// const data5 = [5, 24, 6, 125, 25, 23, 88, 19, 34, 58];
// const data6 = [7, 44, 12, 58, 93, 67, 27, 14, 38, 13];
// const data7 = [1, 35, 124, 98, 73, 14, 72, 47, 18, 24];

function buildBaselineDisplay(arrayOfArrays) {
  arrayOfArrays.forEach((array) => {
    switch (array) {
      case arrayOfArrays[0]:
        displayBaselinePixels(array, baselinePixels);
        for (let i = 0; i < 3; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        break;
      case arrayOfArrays[1]:
        for (let i = 0; i < 1; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        displayBaselinePixels(array, baselinePixels);
        for (let i = 0; i < 2; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        break;
      case arrayOfArrays[2]:
        for (let i = 0; i < 2; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        displayBaselinePixels(array, baselinePixels);
        for (let i = 0; i < 1; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        break;
      case arrayOfArrays[3]:
        for (let i = 0; i < 3; i++) {
          const newSquare = document.createElement('button');
          newSquare.className = 'square';
          baselinePixels.append(newSquare);
        }
        displayBaselinePixels(array, baselinePixels);
        break;

      default:
        break;
    }
  });
}

buildBaselineDisplay([data1, data2, data3, data4]);

function displayBaselinePixels(array, htmlElement) {
  array.forEach((value) => {
    const newSquare = document.createElement('button');
    newSquare.className = 'square';
    // OPTIONAL GREYSCALE DISPLAY SOLUTION - SWAP 87 FOR 88
    // newSquare.style.background = `rgb(${value + 60}, ${value + 60}, ${value + 60})`
    newSquare.style.background = `rgb(${value /*+ 100*/}, 0, 0)`;
    htmlElement.append(newSquare);
  });
}

/* 

The '100' was added to the original values to brighten the hues of the colors displayed, as
they are quite dark at their original values. This was also included so that the color could
be dynamically modified to prove the calculations are performed in real time.

*/
// Troubleshooting and validations
function arrayLengths(arrayOfArrays) {
  arrayOfArrays.forEach((array) => {
    console.log(array.length);
  });
}

function rollTide(arrayOfArrays) {
  const consolidatedArray = [];
  for (let n = arrayOfArrays.length - 1; n < arrayOfArrays[0].length; n++) {
    let j = 0;
    let sum = 0;
    for (let i = 0, p = n + j; i < 4; i++, p--) {
      sum += arrayOfArrays[i][p];
    }
    consolidatedArray.push(sum / arrayOfArrays.length);
  }

  for (let i = 0; i < 3; i++) {
    const newSquare = document.createElement('button');
    newSquare.className = 'square';
    consolidatedPixels.append(newSquare);
  }
  console.log(consolidatedArray);
  displayBaselinePixels(consolidatedArray, consolidatedPixels);
}

rollTide([data1, data2, data3, data4]);
// displayBaselinePixels(rollTide([data1, data2, data3, data4, data5, data6, data7]), consolidatedPixels);
