var updateClock = function () {
    var date = new Date();
    var mins = date.getMinutes();
    var hours = date.getHours();
    $("#clock").text((hours >= 9 ? hours : "0" + hours) + ":" + (mins >= 9 ? mins : "0" + mins));
};
setInterval(function () {
    updateClock();
}, 1000);
