# Part A — Answers

## A1 — Queue Logic

I would keep the waiting patients in arrival order, but when choosing the next patient I would first look for the earliest waiting Emergency patient. If an Emergency patient exists, that patient is called first. If there are no Emergency patients, I would call the earliest waiting General patient. This keeps Emergency patients ahead while preserving arrival order within each group.

---

## A2 — Spot the Bug

There are two main bugs in this function.

First, the `return queue[i]` statement is inside the `for` loop, so the function returns after checking only the first patient. It never checks the remaining patients.

Second, the function returns the first patient even when that patient is not waiting. The return should happen only after finding a patient whose status is `"waiting"`.

A better approach is to loop through all patients, find the first waiting patient, mark them as `"in-progress"`, and then return them. If no waiting patient exists, the function should return `null` or an appropriate empty result.

---

## A3 — SQL Reasoning

```sql
SELECT
    visit_date,
    COUNT(*) AS total_visits,
    SUM(CASE WHEN patient.dept = 'EMERGENCY' THEN 1 ELSE 0 END) AS emergency_visits
FROM VISIT
JOIN PATIENT patient ON VISIT.patient_id = patient.id
GROUP BY visit_date
ORDER BY visit_date;