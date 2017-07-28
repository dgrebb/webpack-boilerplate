// MOCKS

var numberArray = [1, 3, 7, 23, 634, 234, 4, 11, 19];

const loIndexOf = () => {
    console.log('loIndexOf');

    console.log(_.indexOf(numberArray, 23));
}

const loForEach = () => {
    console.log('loForEach');
    _.forEach(numberArray, (val) => {
        console.log(val);
    })
}

export {
    loIndexOf,
    loForEach
};
