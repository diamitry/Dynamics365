//this js will validate the character input in a text field, triggered via field OnChange event
function validate_uploaded_docs(executionContext) {
    var formContext = executionContext.getFormContext();
    var pattern = /[^0-9a-zA-Z\\.\\_-]/g;  // list of characters which are allowed: numbers, lower and upper case letters, periods, underscores, dashes
    var fieldName = 'new_char'; // field where validation is applied
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentControl = formContext.getControl(fieldName);
    var notificationId = "FieldNotificationId";  // ID for the notification, which will be used to set or clear it upon correct upload

	//validation with a notification
    if (pattern.test(currentValue)) {
        currentControl.setNotification("Invalid value - only upper case, lower case, period, hashtag, underscore, and dash characters are allowed.", notificationId);
    } else {
        currentControl.clearNotification(notificationId);
    }
}