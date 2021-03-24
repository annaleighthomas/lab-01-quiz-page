export function isYes(someString) {

    const firstLetter = someString[0];

    if (firstLetter.toLowerCase() === 'y') return true;

    return false;
}