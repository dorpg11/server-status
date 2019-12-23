const Discord = require("discord.js")
module.exports = timestamp => {
    console.log(timestamp)
    var rawDate = new Date(timestamp * 1000).toDateString()
    console.log(rawDate)
    var textDate = rawDate.split('GMT').trim()[0]
    console.log(textDate)
    function clean() {
        textDate = textDate.replace(',', '')
        textDate = textDate.split(' ')
        textDate[1].replace('Mon', 'Monday')
        textDate[1].replace('Tue', 'Tuesday')
        textDate[1].replace('Wed', 'Wednesday')
        textDate[1].replace('Thu', 'Thursday')
        textDate[1].replace('Fri', 'Friday')
        textDate[1].replace('Sat', 'Saturday')
        textDate[1].replace('Sun', 'Sunday')
        textDate[3].replace('Jan', 'January')
        textDate[3].replace('Feb', 'February')
        textDate[3].replace('Mar', 'March')
        textDate[3].replace('Apr', 'April')
        textDate[3].replace('Jun', 'June')
        textDate[3].replace('Jul', 'July')
        textDate[3].replace('Aug', 'August')
        textDate[3].replace('Sep', 'September')
        textDate[3].replace('Oct', 'October')
        textDate[3].replace('Nov', 'November')
        textDate[3].replace('Dec', 'December')
        textDate[6].replace('GMT', 'Greenwich Mean Time')
        FinalDate = textDate[1] + ', ' + textDate[2] + ' ' + textDate[3] + ' ' + textDate[4]
        FinalDate += ', ' + textDate[5] + ' ' + textDate[6]
    }
    clean()
    return FinalDate
}