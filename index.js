function findMatching(array, searchName) {
    return (array.filter((name) => (name.toLowerCase() === searchName.toLowerCase())));
}

function fuzzyMatch(array, searchName) {
    return (array.filter((name) => (name.toLowerCase().charAt(0) === searchName.toLowerCase().charAt(0))));
}

function matchName(array, searchName) {
    return (array.filter((obj) => (obj.name.toLowerCase() === searchName.toLowerCase())));
}