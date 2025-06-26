function singleNumber(num) {
    let hash = {};

    for (var i = 0; i < num.length; i++) {
        if (!hash[num[i]]) {
            hash[num[i]] = 1;
        } else {
            hash[num[i]] = hash[num[i]] + 1;
        }
    }

    for (var i = 0; i < num.length; i++) {
        if (hash[num[i]] === 1) {
            return num[i];
        }
    }
}


// ! 📉 Time & Space Complexity:
// * Time: O(n) – two passes

// * Space: O(n) – because of the hash map


//! Most optimal solution

function singleNumber(num) {
    let xor = 0;

    for (var i = 0; i < num.length; i++) {
        xor = xor ^ num[i];
    }

    return xor;
}

// ! 📈 Complexity:
// * Time: O(n) ✅

// * Space: O(1) ✅ (no extra data structures)