# TripleT-OS
A browser-based desktop operating system centered around the iconic Tung Tung Tung Sahur aesthetic, featuring draggable window management and custom native apps.

# Quick Start

No installation or compiler needed—TripleT-OS runs entirely in your web browser.
Click the Try It link above to boot into the desktop environment immediately.
Interact with the welcome screen, check the live system clock, and open apps by clicking their desktop icons.

# Features

Interactive Draggable Windows: Windows can be repositioned anywhere across the viewport with smooth mouse-tracking physics and proper front-to-back layer stacking (z-index management).

TUNG Notes: A native built-in word processor application where users can draft, edit, and keep track of notes within the OS environment.

TUNG Photos: A dedicated multimedia gallery app displaying a curated collection of Tung Tung Sahur visuals inside a responsive window.

Real-Time Clock & Date System: An active desktop menu bar/widget that continuously syncs with local system time and date.

Custom Meme Backdrop & Welcome Experience: A tailored visual environment featuring a custom Tung Tung Sahur desktop wallpaper and an onboarding welcome screen on startup.


# How to Run It Locally
TripleT-OS is built using standard web technologies (HTML5, CSS3, and Vanilla JavaScript), making local development straightforward.

# Step 1: CLone

git clone https://github.com/Bhav531/TripleT-OS..git
cd TripleT-OS.


# Step 2: Open in VSC

code .

# Step 3 - Launch

# How It Works
To achieve the tactile feel of a desktop operating system without relying on heavyweight frontend frameworks, TripleT-OS is engineered using pure Vanilla JavaScript and native DOM manipulation.

Window Management & Drag Physics: Window dragging is powered by custom mouse event listeners (mousedown, mousemove, and mouseup). When a window's title bar is clicked, the script calculates the relative offset between the cursor position and the window's top-left coordinates, updating position: absolute styling in real-time without layout thrashing.

Focus Stacking: To mimic traditional OS behavior where clicking a background window brings it to the forefront, the project dynamically manages a stacking counter that increments and applies the highest z-index to whichever application window currently holds user focus.

Lightweight Application Architecture: Each app (TUNG Notes and TUNG Photos) operates as an isolated component within the DOM, allowing multiple windows to remain open simultaneously without interfering with the system clock or desktop event loops.


# Credits
Creator & Lead Developer: Bhav Kartik Jindal

Development Environment: Built with Visual Studio Code

Inspiration: Inspired by the Tung Tung Sahur meme universe and classic desktop UI metaphors.
