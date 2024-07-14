import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";

function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const clockControl = document.getElementById("clock");

let today = undefined;

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  today = evt.date;
  let hours = today.getHours();
  let meridiem = " AM";
  if (preferences.clockDisplay === "12h") {
    if (hours > 11) {
      meridiem = " PM"
    }
    // 12h format
    hours = hours % 12 || 12;

  } else {
    // 24h format
    hours = zeroPad(hours);
    meridiem = ""
  }
  let mins = zeroPad(today.getMinutes());
  clockControl.text = `${hours}:${mins}${meridiem}`;
}