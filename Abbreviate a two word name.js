// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

function initials(name) {
    const parts = name.toUpperCase().split(' ');
    return `${parts[0][0]}.${parts[1][0]}`;
}

console.log(initials("Sam Harris"));
console.log(initials("Patrick Feeney"));