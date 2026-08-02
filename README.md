# Clinic Queue Board

A simple browser-based queue management system for a small eye clinic.

## Project Overview

The Clinic Queue Board allows reception staff to register patients and manage the clinic waiting queue.

The application supports:

- Patient registration
- Automatic daily token numbers
- General and Emergency visit types
- Emergency priority
- FIFO ordering within each visit type
- Call Next Patient
- Complete Visit
- Skip and Re-queue
- Live queue counts
- Input validation
- Browser refresh persistence using localStorage

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser localStorage

No framework or backend is required for this assessment.

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

Alternatively, in VS Code, the project can be opened using a local development server such as Live Server.

## How the Queue Works

Emergency patients are always selected before General patients.

Within each group, patients are selected in their arrival order.

For example:

- General Token 1
- Emergency Token 2
- General Token 3
- Emergency Token 4

The call order will be:

1. Emergency Token 2
2. Emergency Token 4
3. General Token 1
4. General Token 3

## Skip and Re-Queue

If a called patient does not show up, reception can skip the patient.

The skipped patient is returned to the waiting queue after two more patients rather than being placed immediately next or at the very end.

## Persistence

Queue information is stored in the browser using localStorage, so refreshing the page does not immediately lose the current queue state.

## What Works

- Patient registration
- Name and age validation
- General and Emergency patient types
- Automatic token generation
- Emergency-first queue ordering
- FIFO ordering within priority groups
- Call Next Patient
- Complete current visit
- Completed patient count
- Waiting counts
- Skip and Re-queue
- localStorage persistence
- Empty queue handling

## What Is Not Included

The following features were intentionally left out of this assessment version:

- SMS notifications
- Real-time multi-receptionist synchronization
- Real database/backend
- Authentication and user accounts
- Dedicated TV-only display
- Advanced reporting

These features could be added in a production version.

## What I Would Do Next

With more time, I would add a backend database and user authentication so multiple receptionists could work with the same queue safely. I would also consider adding SMS notifications after the core queue workflow is proven reliable.

## How I Used AI

I used ChatGPT as an AI coding assistant during this assessment.

I used it to help me understand the assessment requirements, plan the application, write and improve HTML/CSS/JavaScript code, debug issues, prepare the documentation files, and understand Git and GitHub commands.

I reviewed the generated suggestions and tested the application rather than blindly accepting everything.

I accepted some generated code as a starting point and modified parts of it to fit the assessment requirements, especially the queue behaviour, validation, and Skip and Re-queue logic.

One important thing I learned while using AI was that generated answers still need to be checked against the actual assessment requirements. I went back to the original assessment and corrected the documentation when I found that the required Part A and Part B content was missing or incomplete.

## Assessment Notes

This project uses plain HTML, CSS, and JavaScript because the assessment explicitly allows a browser-only implementation.

The goal was to build a small, understandable, working solution rather than add unnecessary frameworks or infrastructure.