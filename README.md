# Clinic Queue Board

A simple browser-based queue management system for a small eye clinic.

## Project Overview

The Clinic Queue Board allows reception staff to register patients, manage the waiting queue, call the next patient, complete visits, and re-queue patients who do not show up.

The application is built using plain HTML, CSS, and JavaScript. Queue data is stored in the browser using localStorage.

## Features

- Register patients with name, age, and visit type
- Automatic daily token numbers
- General and Emergency patient types
- Emergency patients receive priority
- FIFO ordering within each patient type
- Call Next Patient
- Now Serving display
- Complete Visit
- Completed patient count
- General and Emergency waiting counts
- Skip and Re-queue
- Input validation
- Protection against empty queue actions
- localStorage persistence
- Readable waiting-board interface

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage
- Git and GitHub

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.
4. Register a patient using the registration form.
5. Use **Call Next Patient** to call the next patient.
6. Use **Complete Visit** when the consultation is finished.
7. Use **Skip & Re-queue** when a called patient does not show up.

No backend or database installation is required.

## What Works

The following functionality is implemented:

- Patient registration
- Automatic token generation
- Emergency priority
- FIFO queue ordering
- Calling the next patient
- Completing visits
- Waiting and completed counts
- Skip and re-queue logic
- Input validation
- Empty queue handling
- Browser refresh persistence

## What Was Left Out

The following features were not implemented because they were optional/stretch requirements or outside the first version:

- SMS notifications
- Real-time multi-device synchronization
- Dedicated TV display mode
- Real backend/database
- Advanced waiting-time analytics

The current version focuses on making the core queue workflow reliable and understandable.

## What I Would Do Next

With more time, I would add a backend database and multi-user support so multiple receptionists and waiting-room displays could use the same queue from different devices.

I would also add authentication, audit history, and optional SMS notifications after the core workflow is stable.

## How I Used AI

I used ChatGPT as an AI coding assistant during the assessment.

I used it mainly to:
- Understand the assessment requirements step by step.
- Get beginner-friendly explanations of Git and GitHub.
- Review and improve the structure of the project.
- Help reason about queue logic, validation, and edge cases.
- Review documentation and prepare the repository for submission.

I accepted some suggested code and explanations after testing them, but I also reviewed the changes and tested the application myself.

I rewrote and adjusted parts of the documentation and project based on the actual assessment requirements and my understanding of the application.

One important lesson from using AI was that I should not blindly accept generated answers. I checked the assessment requirements and verified the application behavior before considering the work complete.

## Project Structure

```text
clinic-queue-board/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── ANSWERS.md
└── REQUIREMENTS.md