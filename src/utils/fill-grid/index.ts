// import {GRID} from '../../typings';
// set up baseURL in tsconfig

import {GRID, NUMBERS} from 'typings';
import {shuffle} from 'utils'

const gridExample : GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const numbers : NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 a backtracking / recursive function to check all the possible combination of numbers till a solution is found
 * 
 */
function fillGrid(grid: GRID){
    let row = 0;
    let col = 0;
    for (let i = 0; i < 81; i++){
        row = Math.floor(i / 9);
        col = i % 9;
        if (grid[row][col] === 0){
            // shuffle 
            shuffle(numbers)
            // do stuff

            // recursive things
            break;
        }
    }
    grid[row][col] = 0;
}

export default fillGrid;