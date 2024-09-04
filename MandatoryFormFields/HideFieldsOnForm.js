//Place this script onto the Custom JS field for the page
function hideFields() {
    // Hide "Case account" label and field
    var caseAccountLabel = document.getElementById("customerid_label");
    var caseAccountField = document.querySelectorAll(".input-group")[0];
    if (caseAccountLabel && caseAccountField) {
        caseAccountLabel.style.display = 'none';
        caseAccountField.style.display = 'none';
    }

    // Hide "Primary Contact" label and field
    var primaryContactLabel = document.getElementById("primarycontactid_label");
    var primaryContactField = document.querySelectorAll(".input-group")[2]; // "Primary Contact" field
    if (primaryContactLabel && primaryContactField) {
        primaryContactLabel.style.display = 'none';
        primaryContactField.style.display = 'none';
    }

    // Hide "Case Subject" label and field
    var caseOptionLabel = document.getElementById("subjectid_label");
    var caseOptionField = document.getElementById("subjectid");
    if (caseSubjectLabel && caseSubjectField) {
        caseOptionLabel.style.display = 'none';
        caseOptionField.style.display = 'none';
    }
}

//Call the function
window.onload = hideFields;
