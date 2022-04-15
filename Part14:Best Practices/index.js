
/**
 * Magic numbers-> Assigning a number with no clear meaning!!
 * in example below, 86400 is a magic number
 * 
 * The solution is to extract the magic number to a constant!
 */

const SECONDS_IN_A_DAY = 86400;

for (let i = 0; i < SECONDS_IN_A_DAY; i++) {

}

/**
 * Deep Nesting -> If your code contains many nested loops or conditional statements, 
 * this should be extracted into a separate function
 * In example below, we have broken rules e.g. deep nesting and code repetition.
 * 
 * The solution is extracting the loops in a separate function.
 */

const exampleArray = [[['value']]];

const retrieveFinalValue = (element) => {
    if (Array.isArray(element)) {
        return retrieveFinalValue(element[0])
    }

    return element;
}

retrieveFinalValue(exampleArray);
