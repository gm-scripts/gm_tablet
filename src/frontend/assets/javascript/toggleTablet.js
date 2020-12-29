var openTablet = function () {
    $("#container").show("slow");
    updateClock();
};
var closeTablet = function () {
    $("#container").hide("slow");
};
window.addEventListener("message", function (event) {
    var item = event.data;
    if (item.openTablet == true) {
        //Funktion die das Tablet öffnet
        openTablet();
    }
    if (item.openTablet == false) {
        //Funktion die das Tablet schließt
        closeTablet();
    }
});
