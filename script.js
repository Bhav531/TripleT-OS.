// update time function - pls dont break xD
function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  if (timeText) {
    timeText.innerHTML = currentTime;
  }
}
setInterval(updateTime, 1000); // checks every second

// drag logic (got this part from a stackoverflow thread lol)
function makeDraggable(element) {
  var header = element.querySelector(".header") || document.getElementById(element.id + "header");
  var dragTarget = header || element;
  var initialX = 0;
  var initialY = 0;

  dragTarget.onmousedown = startDragging;

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = doDrag;
  }

  function doDrag(e) {
    e = e || window.event;
    e.preventDefault();

    var deltaX = initialX - e.clientX;
    var deltaY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    var maxLeft = window.innerWidth - element.offsetWidth;
    var maxTop = window.innerHeight - element.offsetHeight;
    var newLeft = Math.min(Math.max(element.offsetLeft - deltaX, 0), maxLeft);
    var newTop = Math.min(Math.max(element.offsetTop - deltaY, 0), maxTop);

    element.style.left = newLeft + "px";
    element.style.top = newTop + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// make everything draggable yay
makeDraggable(document.getElementById("welcome1"));
makeDraggable(document.getElementById("notes"));
makeDraggable(document.getElementById("photos"));

var welcomeScreen = document.querySelector("#welcome1");
var notesWindow = document.querySelector("#notes");
var photosWindow = document.querySelector("#photos");

function closeWindow(element) {
  if (element) {
    element.style.display = "none";
  }
}

function openWindow(element) {
  if (element) {
    element.style.display = "block";
  }
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
var notesCloseButton = document.querySelector("#notesclose");
var photosCloseButton = document.querySelector("#photosclose");
var notesOpenButton = document.querySelector("#tungNotesApp");
var photosOpenButton = document.querySelector("#newApp");

// event listeners block... kind of repetitive but it works fine
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

notesCloseButton.addEventListener("click", function() {
  closeWindow(notesWindow); 
});

notesOpenButton.addEventListener("click", function() {
  openWindow(notesWindow);
});

photosCloseButton.addEventListener("click", function() {
  closeWindow(photosWindow);
});

photosOpenButton.addEventListener("click", function() {
  openWindow(photosWindow);
});

var selectedIcon = undefined;

function selectIcon(element) {
  if (selectedIcon && selectedIcon !== element) {
    deselectIcon(selectedIcon);
  }
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  if (element) {
    element.classList.remove("selected");
  }
  selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
    selectIcon(element);
  }
}

var tungNotesApp = document.querySelector("#tungNotesApp");
var newApp = document.querySelector("#newApp");

if (tungNotesApp) {
  tungNotesApp.addEventListener("click", function () {
    handleIconTap(this);
  });
}

if (newApp) {
  newApp.addEventListener("click", function () {
    handleIconTap(this);
  });
}