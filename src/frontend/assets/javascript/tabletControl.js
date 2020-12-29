import updateClock from "./header/clock.js";
const openTablet = () => {
    $("#container").show("slow");
};
const closeTablet = () => {
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
$(document).keydown(function (e) {
    console.log(e.keyCode);
});
updateClock();
setInterval(updateClock, 100);
