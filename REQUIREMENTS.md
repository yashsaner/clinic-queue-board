# Part B — Requirements

## 1. Clarifying Questions

### Question 1 — How should the daily token number reset?
Would you like token numbers to restart from 1 every morning, and what should happen if the clinic stays open past midnight?

**Why it changes the build:** This determines how tokens are generated and when the system should start a new day's queue.

### Question 2 — Who should be able to register and manage patients?
Will there be one receptionist using the system, or can multiple receptionists use it at the same time?

**Why it changes the build:** Multiple receptionists would require shared queue state and stronger protection against duplicate tokens.

### Question 3 — What should happen when a patient does not show up?
Should reception be able to skip the patient and bring them back later, and if so, where should they return in the queue?

**Why it changes the build:** This changes the queue ordering and requires specific re-queue rules.

### Question 4 — How should emergency patients be handled?
Should every Emergency patient always go before every General patient, or are there different levels of emergency?

**Why it changes the build:** Different emergency levels would require a more detailed priority system instead of one Emergency priority.

### Question 5 — What is the most important problem to solve first?
Is the main goal to stop duplicate/missed tokens, or are features such as TV display and SMS notifications equally important?

**Why it changes the build:** This determines the MVP priority and prevents spending time on features that do not solve the most urgent clinic problem.

---

## 2. Assumptions

For this assessment, I will assume:

1. The clinic uses one shared queue during the day.
2. Token numbers start at 1 each day.
3. Emergency patients always have priority over General patients.
4. Patients within the same visit type are handled in arrival order.
5. A skipped patient should return to the queue after two more patients.
6. The application can initially run in a browser without a backend.
7. The receptionist is the main user of the application.
8. SMS notifications and TV integration are not required for the first version.

---

## 3. Priorities

### Build Now

#### 1. Shared daily token queue
This directly solves the problem of patients receiving confusing or duplicate numbers.

#### 2. Patient registration
Reception needs a simple way to enter the patient's name, age, and visit type.

#### 3. Emergency priority
Emergency patients should be called before General patients while preserving arrival order within each group.

#### 4. Call Next and Now Serving
The receptionist and waiting area need a clear indication of which patient is being served.

#### 5. Complete Visit
Completed patients should be removed from the active queue and counted as completed.

#### 6. Skip and Re-queue
A patient who does not show should be skipped and returned after two more patients.

#### 7. Validation and persistence
The system should handle invalid input, empty queues, accidental double-clicks, and browser refreshes safely.

---

### Build Later

#### 1. SMS notifications
Useful for patients who leave the waiting area, but not required to solve the core queue problem.

#### 2. TV display improvements
A dedicated display mode could make the waiting-hall experience better after the basic queue works reliably.

#### 3. Waiting-time statistics
Average waiting time could help the clinic understand its performance after the core workflow is stable.

#### 4. Multi-user/backend support
A real backend would be useful if multiple receptionists need to use the same queue from different devices.

---

### Don't Build / Push Back

#### Automatically sending SMS before solving the queue problem
I would not start with SMS because notifications do not solve duplicate or confusing token numbers. The first priority should be one reliable shared queue.

#### Separate numbering systems for different receptionists
I would not support independent numbering because it would recreate the current problem of patients receiving conflicting numbers. All receptionists should use the same queue and token sequence.

---

## 4. Respectful Push-Back

I understand why SMS notifications sound useful, but I would first make sure the clinic has one reliable queue and clear token handling. If we add SMS before fixing the numbering problem, patients may simply receive notifications about a queue that is still confusing. I would build the reliable queue first and add SMS after that workflow is working well.