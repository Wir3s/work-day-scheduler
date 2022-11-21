// References to key DOM elements
var timeDisplayEl = $("#time-display");
var containerDiv = $(".container");

// Create array for hours of the day

var hoursOfDay = [
  {
    hour: "8",
    task: "Change the furnace filter",
  },
  {
    hour: "9",
    task: "",
  },
  {
    hour: "10",
    task: "Change the furnace filter",
  },
  {
    hour: "11",
    task: "",
  },
  {
    hour: "12",
    task: "Change the furnace filter",
  },
  {
    hour: "13",
    task: "",
  },
  {
    hour: "14",
    task: "Change the furnace filter",
  },
  {
    hour: "15",
    task: "",
  },
  {
    hour: "16",
    task: "Change the furnace filter",
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
// function readTasksFromStorage() {
//   var tasks;
// }

// Dayjs info:
// dayjs().hour() // gets current hour
// newDate = dayjs().hour(12) // returns new dayjs object

// Creates rows for each hour of work day
function createHours() {
  for (var i = 0; i < hoursOfDay.length; i += 1) {
    var hourBlocks = hoursOfDay[i];

    var taskTime = hourBlocks.hour;
    console.log(taskTime);
    currentHour = dayjs().hour();
    console.log(currentHour);
    var rowEl = $("<div/>", { class: "row time-block" });
    var hourEl = $("<div/>", { class: "col-1 hour" }).text(hourBlocks.hour);
    var taskEl = $("<div/>", { class: "col-10 description" }).text(
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

// Click on block to enter new event

displayTime();
setInterval(displayTime, 1000);
