// References to key DOM elements
var timeDisplayEl = $("#time-display");
var containerDiv = $(".container");

// Create array for hours of the day

var hoursOfDay = [
  {
    hour: "8",
    task: "",
  },
  {
    hour: "9",
    task: "",
  },
  {
    hour: "10",
    task: "",
  },
  {
    hour: "11",
    task: "",
  },
  {
    hour: "12",
    task: "",
  },
  {
    hour: "13",
    task: "",
  },
  {
    hour: "14",
    task: "",
  },
  {
    hour: "15",
    task: "",
  },
  {
    hour: "16",
    task: "",
  },
  {
    hour: "17",
    task: "",
  },
];

// Get and display current time
function displayTime() {
  var rightNow = dayjs().format("MMM DD [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// Checks local storage for tasks
//function readTasksFromStorage() {
//  var tasks = localStorage.getItem('')
// }

// Creates rows for each hour of work day
function createHours() {
  for (var i = 0; i < hoursOfDay.length; i += 1) {
    var hourBlocks = hoursOfDay[i];

    var taskTime = hourBlocks.hour;

    currentHour = dayjs().hour();

    var rowEl = $("<div/>", { class: "row time-block" });
    var hourEl = $("<div/>", { class: "col-1 hour" }).text(hourBlocks.hour);
    var taskEl = $("<textarea/>", { class: "col-10 description" }).text(
      hourBlocks.task
    );
    var saveButtonEl = $("<div/>", { class: "col-1 saveBtn" });

    // add class to row by comparing time to current time
    if (taskTime < currentHour) {
      rowEl.addClass("past");
    } else if (taskTime == currentHour) {
      rowEl.addClass("present");
    } else {
      rowEl.addClass("future");
    }

    containerDiv.append(rowEl);
    rowEl.append(hourEl, taskEl, saveButtonEl);
  }
}

// Display time blocks
createHours();

// Button to save new event

displayTime();
setInterval(displayTime, 1000);
