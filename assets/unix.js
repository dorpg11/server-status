const Discord = require("discord.js")
module.exports = timestamp => {
    console.log(timestamp)
    var rawDate = new Date(timestamp * 1000).toUTCString()
    console.log(rawDate)
    var textDate = rawDate.split('GMT')[0].trim()
    console.log(textDate)
    function clean() {
        textDate = textDate.replace(',', '');
        textDate = textDate.split(' ');
        var week = textDate[0]
        var month = textDate[2]
        week = week.replace(/Mon/g, 'Monday');
        week = week.replace(/Tue/g, 'Tuesday');
        week = week.replace(/Wed/g, 'Wednesday');
        week = week.replace(/Thu/g, 'Thursday');
        week = week.replace(/Fri/g, 'Friday');
        week = week.replace(/Sat/g, 'Saturday');
        week = week.replace(/Sun/g, 'Sunday');
        month = month.replace(/Jan/g, 'January');
        month = month.replace(/Feb/g, 'February');
        month = month.replace(/Mar/g, 'March');
        month = month.replace(/Apr/g, 'April');
        month = month.replace(/Jun/g, 'June');
        month = month.replace(/Jul/g, 'July');
        month = month.replace(/Aug/g, 'August');
        month = month.replace(/Sep/g, 'September');
        month = month.replace(/Oct/g, 'October');
        month = month.replace(/Nov/g, 'November');
        month = month.replace(/Dec/g, 'December');
        textDate[0] = week
        textDate[2] = month
        console.log(textDate)
        FinalDate = '**' + textDate[4] + '**, ' + textDate[0] + ', ' + textDate[2]
        FinalDate += ' ' + textDate[1] + ', ' + textDate[3] + ', Greenwich Mean Time' 
    }
    clean()
    return FinalDate
}