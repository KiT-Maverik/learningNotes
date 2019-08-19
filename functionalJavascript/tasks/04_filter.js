function getShortMessages(messages) {
    var filteredArr = messages.filter(function(value){return value.message.length < 50;});
    var result = filteredArr.map(function(mesg){return mesg.message});
    return result
}

module.exports = getShortMessages;
