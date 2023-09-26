export const divideArrayGroup = (array: [], sizeGroup = 3) => {
    const groups = [];
    for (let i = 0; i < array.length; i += sizeGroup) {
        groups.push(array.slice(i, i + sizeGroup));
    }
    return groups;
}