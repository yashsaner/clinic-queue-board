let registering = false;
// Store all patients
let patients = [];
let nextToken = 1;
let currentPatient = null;
let completedPatients = [];

let skippedPatient = null;
let patientsServedAfterSkip = 0;

// Get the registration form
const patientForm = document.getElementById("patientForm");

// When the form is submitted
patientForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();
    if (registering) {
    return;
}

registering = true;

    // Get values from the form
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const visitType = document.getElementById("visitType").value;
    // Check patient name
if (name.trim() === "") {
    alert("Please enter patient name.");
    registering = false;
    return;
}

// Convert age to a number
const patientAge = Number(age);

// Check age
if (!Number.isInteger(patientAge) || patientAge < 1 || patientAge > 120) {
    alert("Please enter a valid age between 1 and 120.");
    registering = false;
    return;
}

    // Create a patient object
    const patient = {
    token: nextToken,
    name: name,
    age: patientAge,
    visitType: visitType
};

nextToken++;

    patients.push(patient);

saveData();

displayPatients();

console.log(patient);

patientForm.reset();
   
registering = false;
});
function displayPatients() {

    const waitingQueue = document.getElementById("waitingQueue");

    waitingQueue.innerHTML = "";

    if (patients.length === 0) {
    waitingQueue.innerHTML = "<p>No patients waiting.</p>";
    updateCounts();
    return;
}

    patients.forEach(function(patient) {

        const patientElement = document.createElement("div");

        patientElement.innerHTML = `
            <h3>Token ${patient.token}</h3>
            <p>Name: ${patient.name}</p>
            <p>Age: ${patient.age}</p>
            <p>Visit Type: ${patient.visitType}</p>
            <hr>
        `;

        waitingQueue.appendChild(patientElement);
    });
updateCounts();
}
// Get the Call Next button
const callNextButton = document.getElementById("callNextButton");

// When Call Next is clicked
callNextButton.addEventListener("click", function() {
    
    if (currentPatient !== null) {
    alert("Please complete or skip the current patient first.");
    return;
}

    // Find the first emergency patient
    let nextPatient = patients.find(function(patient) {
        return patient.visitType === "Emergency";
    });

    // If there is no emergency patient,
    // find the first patient
    if (!nextPatient) {
        nextPatient = patients[0];
    }

    // If there are no patients
    if (!nextPatient) {
        alert("No patients are waiting.");
        return;
    }

    // Store the current patient
    currentPatient = nextPatient;
   
    // Show the patient as currently serving
    const nowServing = document.getElementById("nowServing");

    nowServing.innerHTML = `
        <h2>Token ${nextPatient.token}</h2>
        <p>Name: ${nextPatient.name}</p>
        <p>Visit Type: ${nextPatient.visitType}</p>
    `;

    // Remove patient from waiting queue
    patients = patients.filter(function(patient) {
    return patient !== nextPatient;
});

saveData();

displayPatients();
});
// Get the Complete button
const completeButton = document.getElementById("completeButton");

// When Complete is clicked
completeButton.addEventListener("click", function() {

    // Check if someone is currently being served
    if (!currentPatient) {
        alert("No patient is currently being served.");
        return;
    }

   completedPatients.push(currentPatient);

// Count patients served after a skip
if (skippedPatient !== null) {
    patientsServedAfterSkip++;
    
    if (patientsServedAfterSkip === 2) {

    patients.push(skippedPatient);

    skippedPatient = null;
    patientsServedAfterSkip = 0;

    displayPatients();
}
}

saveData();

currentPatient = null;

    // Update the screen
    displayCompletedPatients();

    // Clear Now Serving
    document.getElementById("nowServing").innerHTML =
        "<p>No patient is currently being served.</p>";
});
function displayCompletedPatients() {

    const completedList = document.getElementById("completedList");
    const completedCount = document.getElementById("completedCount");

    // Update completed count
    completedCount.textContent = completedPatients.length;

    // Clear the list
    completedList.innerHTML = "";

    // If nobody has completed a visit
    if (completedPatients.length === 0) {
        completedList.innerHTML = "<p>No completed visits.</p>";
        return;
    }

    // Display completed patients
    completedPatients.forEach(function(patient) {

        const patientElement = document.createElement("div");

        patientElement.innerHTML = `
            <p>
                Token ${patient.token} -
                ${patient.name} -
                ${patient.visitType}
            </p>
        `;

        completedList.appendChild(patientElement);
    });
}
function updateCounts() {

    const generalCount = patients.filter(function(patient) {
        return patient.visitType === "General";
    }).length;

    const emergencyCount = patients.filter(function(patient) {
        return patient.visitType === "Emergency";
    }).length;

    document.getElementById("generalCount").textContent = generalCount;
    document.getElementById("emergencyCount").textContent = emergencyCount;
}


function saveData() {

    localStorage.setItem("patients", JSON.stringify(patients));

    localStorage.setItem("completedPatients", JSON.stringify(completedPatients));

    localStorage.setItem("nextToken", nextToken);
}
function loadData() {

    const savedPatients = localStorage.getItem("patients");
    const savedCompletedPatients = localStorage.getItem("completedPatients");
    const savedNextToken = localStorage.getItem("nextToken");

    if (savedPatients) {
        patients = JSON.parse(savedPatients);
    }

    if (savedCompletedPatients) {
        completedPatients = JSON.parse(savedCompletedPatients);
    }

    if (savedNextToken) {
        nextToken = Number(savedNextToken);
    }

    displayPatients();
    displayCompletedPatients();
}

loadData();

const skipButton = document.getElementById("skipButton");

skipButton.addEventListener("click", function() {

    // Check if there is a patient to skip
    if (!currentPatient) {
        alert("No patient is currently being served.");
        return;
    }

    // Store the patient for re-queue
    skippedPatient = currentPatient;

    // Start counting from zero
    patientsServedAfterSkip = 0;

    // Remove current patient from Now Serving
    currentPatient = null;

    document.getElementById("nowServing").innerHTML =
        "<p>No patient is currently being served.</p>";

    saveData();

    alert(
        "Patient skipped. They will return after two more patients are served."
    );
});
// Clear Today's Completed Visits
const clearCompletedButton =
    document.getElementById("clearCompletedButton");

clearCompletedButton.addEventListener("click", function() {

    // Check if there are completed visits
    if (completedPatients.length === 0) {
        alert("There are no completed visits to clear.");
        return;
    }

    // Ask for confirmation
    const confirmClear = confirm(
        "Are you sure you want to clear all completed visits for today?"
    );

    if (!confirmClear) {
        return;
    }

    // Clear completed visits
    completedPatients = [];

    // Save the updated data
    saveData();

    // Update the screen
    displayCompletedPatients();

    alert("Today's completed visits have been cleared.");
});