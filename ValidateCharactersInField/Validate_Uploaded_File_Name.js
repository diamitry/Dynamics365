// This function is called via valuploadedfilename on the form, which is tied to the field onchange event.
function valuploadedfilename(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute('your_entityform').addOnChange(validateFileName);
}

function validateFileName(executionContext) {
    var formContext = executionContext.getFormContext();
    var pattern = /^[0-9a-zA-Z\._-]+$/;
    var fieldName = 'your_field';
    var currentValue = formContext.getAttribute(fieldName).getValue();
    var currentControl = formContext.getControl(fieldName);
    var notificationId = "FieldNotificationId";

    // Check if currentValue is null
    if (currentValue === null) {
        currentControl.clearNotification(notificationId);
        return; // Exit the function early
    }

    var fileName = currentValue.fileName;
    fileName = fileName.trim();

    if (!pattern.test(fileName)) {
        currentControl.setNotification("Invalid value - only upper case, lower case, period, number, underscore, and dash characters are allowed.", notificationId);
    } else {
        currentControl.clearNotification(notificationId);
    }
}

valuploadedfilename(executionContext);
