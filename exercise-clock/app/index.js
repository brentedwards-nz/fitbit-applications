import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";

import { HeartRateSensor } from "heart-rate";

import { me as appbit } from "appbit";
import { today } from "user-activity";

import * as messaging from "messaging";

// ===================================================================
// Module
import defaultExport, { localExport, globalExport } from "./settings_utils"
defaultExport();
localExport();
globalExport();

// ===================================================================
// Settings
messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt && evt.data && evt.data.key === "myColor") {
    //myElement.style.fill = evt.data.value;
    console.log("  evt.data.key:", evt.data.key)
    console.log("evt.data.value:", evt.data.value)

    const p = document.getElementById("stepsProgress");
    p.style.fill = evt.data.value;
  }
});

// ===================================================================
// Global Utils
function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// ===================================================================
// Clock

const clockControl = document.getElementById("clock");
clock.granularity = "seconds";

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  const today = evt.date;
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

// ===================================================================
// Heart Rate
const hrControl = document.getElementById("hr");
if (HeartRateSensor) {
  console.log("This device has a HeartRateSensor!");
  const hrm = new HeartRateSensor();
  hrm.addEventListener("reading", () => {
    hrControl.text = `HR: ${hrm.heartRate}`;
  });
  hrm.start();
} else {
  hrControl.text = "HR: N/A";
}

// ===================================================================
// Steps
const stepsControl = document.getElementById("steps");
if (appbit.permissions.granted("access_activity")) {
  stepsControl.text = `STEPS: ${today.local.steps}`;
}
else {
  stepsControl.text = "STEPS: N/A";
}

// ===================================================================
// button-1
const btn1 = document.getElementById("button-1");
var btn1_click_count = 0
btn1.onclick = () => {
  btn1_click_count++;
  console.log("btn1.onclick...")
  const data = {
    message1: "btn1 was clicked: " + btn1_click_count
  }
  sendMessage(data)
}

// ===================================================================
// button-2
const btn2 = document.getElementById("button-2");
var btn2_click_count = 0
btn2.onclick = () => {
  btn2_click_count++;
  console.log("btn2.onclick...")
  const data = {
    message2: "btn2 was clicked: " + btn2_click_count
  }
  sendMessage(data)
}

messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});

function sendMessage(msg) {
  // Sample data


  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send(msg);
  }
}
