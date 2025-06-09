// ! Count Duplicate Elements
// https://www.youtube.com/watch?v=QoQM0TbrC9A&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&index=7&ab_channel=NishaSingla
// https://chatgpt.com/c/6841af92-1cb8-8007-aecd-c1a5ea7234c8

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