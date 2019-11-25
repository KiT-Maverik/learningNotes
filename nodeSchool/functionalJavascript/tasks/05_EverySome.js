function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        function presenceCheck(arrItem) {
            return goodUsers.includes(arrItem);
        }

        return submittedUsers.every(presenceCheck)
    };
}

module.exports = checkUsersValid