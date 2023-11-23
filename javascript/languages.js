
/**
 * @desc Array of programming languages
 * @param {*} data list of programming languages
 * @returns the modified programming languages
 */


function languages (data) {
    var allLanguages = data;
    var allLanguages = [];

allLanguages[1]="JavaScript";
allLanguages[3]="Next.js";
allLanguages[5]="CSS";

allLanguages.map((value, index) => {
    console.log(`${value} is at position ${index}`);
});
return allLanguages;
}

module.exports = languages;
