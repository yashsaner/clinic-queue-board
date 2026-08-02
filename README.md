# Clinic Queue Board

A simple browser-based clinic queue management application.

## Features

- Register patients
- Automatic token generation
- General and Emergency visit types
- Emergency priority
- FIFO ordering within each visit type
- Call Next Patient
- Complete Visit
- Skip & Re-queue
- General and Emergency waiting counts
- Completed Today count
- Input validation
- localStorage persistence

## Technologies

- HTML
- CSS
- JavaScript
- Browser localStorage

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Register patients and use the queue controls.

## Queue Rules

Emergency patients are served before General patients.

Within each visit type, patients are served in arrival order.

A skipped patient returns after two more patients have been served.

## Persistence

The application uses browser localStorage to preserve queue data after a page refresh.

## Project Structure

```text
clinic-queue-board/
├── index.html
├── script.js
├── style.css
├── README.md
├── ANSWERS.md
└── REQUIREMENTS.md