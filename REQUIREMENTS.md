# Requirements

## Must Requirements

### 1. Register Patient
- Patient name is required.
- Patient age is required and must be valid.
- Visit type can be General or Emergency.
- Each patient receives an automatic token.
- Registered patients are added to the waiting queue.

### 2. Emergency Priority
- Emergency patients are called before General patients.
- Patients within the same visit type follow arrival order.

### 3. Call Next Patient
- The system displays the next patient under Now Serving.
- The patient is removed from the waiting queue.

### 4. Complete Visit
- The current patient can be marked as completed.
- Completed patients are added to the Completed Today list.
- The completed count is updated.

### 5. Edge Cases
- Empty queue is handled safely.
- Invalid patient data is rejected.
- Duplicate rapid registration is prevented.

## Should Requirements

### Skip & Re-queue
A skipped patient is returned to the waiting queue after two more patients are served.

### Persistence
Patient and queue data persist after browser refresh using localStorage.

### Queue Counts
The interface displays General Waiting and Emergency Waiting counts.

### UI
The application provides a simple and usable clinic queue interface.