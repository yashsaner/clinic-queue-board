# Assessment Answers

## 1. How did you implement the queue?

I used a JavaScript array to store waiting patients.

Each patient is represented as an object containing:

- Token
- Name
- Age
- Visit Type

The queue is displayed dynamically using JavaScript.

## 2. How does Emergency priority work?

When Call Next Patient is selected, the system first searches for an Emergency patient.

If an Emergency patient exists, the earliest Emergency patient is selected.

If there are no Emergency patients, the earliest General patient is selected.

This preserves FIFO order within each visit type.

## 3. How does Skip & Re-queue work?

When the current patient is skipped, the patient is temporarily stored.

The system counts the next two completed patients.

After two patients are served, the skipped patient is returned to the waiting queue.

## 4. How is persistence implemented?

I used browser localStorage.

The application stores:

- Waiting patients
- Completed patients
- Next token number

When the application loads, the stored data is retrieved and displayed again.

## 5. How are edge cases handled?

The application validates:

- Empty patient name
- Invalid age
- Empty queue
- Calling another patient while someone is already being served
- Rapid duplicate registration

User-friendly messages are displayed when an invalid action is attempted.

## 6. What was the main implementation challenge?

The main challenge was implementing the queue rules correctly while handling Emergency priority, Skip & Re-queue, and persistence.

I solved this by keeping the queue state in JavaScript variables and updating the UI whenever the state changes.

## 7. What would I improve with more time?

With more time I would improve:

- Mobile responsiveness
- Accessibility
- More detailed queue status
- Better visual indicators for Emergency patients
- More comprehensive automated tests