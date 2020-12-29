import updateClock from "./header/clock.js";

const openTablet = (): void => {
  $("#container").show("slow");
  setTimeout(() => $("#display").css("opacity", "100"), 100);
};
const closeTablet = (): void => 
  {$("#display").css("opacity", "0")
  setTimeout(() => $("#container").hide("fast"), 300);;
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

$(document).keydown(function(e) {
  console.log(e.keyCode)
});

openTablet();
updateClock();
setInterval(updateClock, 1000);