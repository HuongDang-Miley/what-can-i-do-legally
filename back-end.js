function whatCanIDoLegally(age) {
    // if it's under 18, they can't drive or drink 
    if (age < 18) {
        return 'cannot drive or drink'
    // if it's between 18 and 20 inclusive, they can drive
    } else if (18 < age && age <= 20) {
        return 'can drive but do not drink'
    // if it's at least 21, they can do both}
    } return 'can do either but do not do both at the same time'   
}

module.exports = whatCanIDoLegally;