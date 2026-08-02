# Part B — Requirements & Clarifications

## 1. Clarifying Questions

### Q1. How should Emergency patients be prioritized?

**Why this changes the build:**
This determines the queue ordering logic. If Emergency patients always have priority, the system must select them before General patients regardless of when they joined the queue.

### Q2. Should skipped patients be re-queued automatically or manually?

**Why this changes the build:**
This affects the Skip workflow. Automatic re-queueing would immediately place the patient back into the waiting queue, while manual re-queueing would require an additional action from the receptionist.

### Q3. Should the queue reset at the start of each day?

**Why this changes the build:**
A daily reset affects token numbering, queue state, and stored data. The system needs to prevent patients from the previous day from appearing in the new day's queue.

### Q4. Will multiple receptionists use the system at the same time?

**Why this changes the build:**
If multiple receptionists use the system simultaneously, a shared backend and database would be required to keep queue data synchronized. A frontend-only application is suitable for a single-device/single-user workflow.

### Q5. Should patient information be stored permanently?

**Why this changes the build:**
Permanent storage would require a backend database and proper data management. For this assessment, browser `localStorage` is sufficient for demonstrating persistence on a single device.

---

## 2. Assumptions

For this assessment, I made the following assumptions:

* The system is used by one receptionist on one device.
* Emergency patients have higher priority than General patients.
* Patients within the same priority follow FIFO order.
* The queue is intended for a single clinic/day workflow.
* `localStorage` is sufficient for the frontend assessment.
* Patient data does not need to be shared between different devices.
* The application does not require authentication or user accounts.
* A backend database is not required for the current assessment scope.

---

## 3. Prioritized Requirements

### Build Now

1. Patient registration.
2. Emergency and General priority selection.
3. Automatic token generation.
4. Queue display.
5. Correct priority-based queue ordering.
6. Call Next functionality.
7. Skip functionality.
8. Re-queue functionality.
9. Patient status updates.
10. Data persistence using `localStorage`.
11. Basic validation and user-friendly interface.

### Build Later

1. Average waiting-time calculation.
2. Search and filtering.
3. Patient history.
4. Queue statistics and reports.
5. Improved accessibility.
6. Responsive improvements for different devices.
7. Backend database integration.
8. Multi-user receptionist support.

### Don't Build / Push Back

1. Online appointment booking.
2. Patient login and account management.
3. SMS/WhatsApp notifications.
4. Online payments.
5. Complex medical records.
6. Multi-clinic management.

These features are outside the scope of the current assessment and would require significantly more backend, security, and product requirements.

---

## 4. Respectful Push-Back

I would not recommend adding a full backend and multi-receptionist synchronization at this stage because it would increase the complexity significantly without being necessary to demonstrate the core queue workflow. I would first validate the queue process with reception staff, then add shared database support once the workflow and requirements are confirmed.
