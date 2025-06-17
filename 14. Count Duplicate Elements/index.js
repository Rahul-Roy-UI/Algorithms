// ! Count Duplicate Elements
// https://www.w3schools.com/jsref/jsref_map.asp ==> JavaScript Array map()
// https://www.w3schools.com/js/js_if_else.asp ==> JavaScript if, else, and else if

const items = ['a', 'a', 'b', 'a', 'b', 'a', 'c', 'c', 'd']

function countDuplicates(data) {
    const output = {};

    data.map(d => {
        // output[d] = (output[d] || 0) + 1;
        if (output[d]) {
            output[d] += 1;
        } else {
            output[d] = 1;
        }
    })

    return output;
}

countDuplicates(items);