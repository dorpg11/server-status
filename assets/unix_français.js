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
        week = week.replace(/Mon/g, 'Lundi');
        week = week.replace(/Tue/g, 'Mardi');
        week = week.replace(/Wed/g, 'Mercredi');
        week = week.replace(/Thu/g, 'Jeudi');
        week = week.replace(/Fri/g, 'Vendredi');
        week = week.replace(/Sat/g, 'Samedi');
        week = week.replace(/Sun/g, 'Diamanche');
        month = month.replace(/Jan/g, 'Janvier');
        month = month.replace(/Feb/g, 'Février');
        month = month.replace(/Mar/g, 'Mars');
        month = month.replace(/Apr/g, 'Avril');
        month = month.replace(/Jun/g, 'Juin');
        month = month.replace(/Jul/g, 'Juillet');
        month = month.replace(/Aug/g, 'Août');
        month = month.replace(/Sep/g, 'Septembre');
        month = month.replace(/Oct/g, 'Octobre');
        month = month.replace(/Nov/g, 'Novembre');
        month = month.replace(/Dec/g, 'Décembre');
        textDate[0] = week
        textDate[2] = month
        console.log(textDate)
        FinalDate = '**' + textDate[4] + '**, ' + textDate[0] + ', ' + textDate[2]
        FinalDate += ' ' + textDate[1] + ', ' + textDate[3] + ', Méridien de Greenwich' 
    }
    clean()
    return FinalDate
}