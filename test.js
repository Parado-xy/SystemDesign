/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Object to hold special cases where subtraction occurs.
    // For example, 'I' can precede 'V' or 'X', meaning you subtract I's value.
    let special = { 
        'I': ['V', 'X'],  // 'I' can precede 'V' (5) or 'X' (10)
        'X': ['L', 'C'],  // 'X' can precede 'L' (50) or 'C' (100)
        'C': ['D', 'M']   // 'C' can precede 'D' (500) or 'M' (1000)
    };

    // Object mapping individual Roman numerals to their respective values.
    let valueMap = { 
        'I': 1,   // 'I' equals 1
        'V': 5,   // 'V' equals 5
        'X': 10,  // 'X' equals 10
        'L': 50,  // 'L' equals 50
        'C': 100, // 'C' equals 100
        'D': 500, // 'D' equals 500
        'M': 1000 // 'M' equals 1000
    };

    // Initialize the total value as 0
    let value = 0;

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Check if the current Roman numeral has a special subtraction rule (e.g., 'I', 'X', 'C')
        if (s[i] in special) {
            // Ensure there is a next character to compare with (avoid out of bounds error)
            if (s[i + 1] !== undefined) {
                // If the next character is in the special list for the current numeral, subtract its value
                if (special[s[i]].includes(s[i + 1])) {
                    value -= valueMap[s[i]]; // Subtract the current numeral's value
                } else {
                    value += valueMap[s[i]]; // Otherwise, add the current numeral's value
                }
            } else {
                // If there's no next character, simply add the current numeral's value
                value += valueMap[s[i]];
            }
        } else {
            // If the current numeral doesn't have any special subtraction rule, add its value
            value += valueMap[s[i]];
        }
    }

    // Return the final converted integer value
    return value;
};


console.log(romanToInt("MCMXLIX"))