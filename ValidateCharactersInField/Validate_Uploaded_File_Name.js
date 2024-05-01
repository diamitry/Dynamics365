//This function validates the uploaded file name, and triggers during the OnSave of the form
function validate_uploaded_file_name(executionContext) {
    var formContext = executionContext.getFormContext();
    var pattern = /[^0-9a-zA-Z\\.\\_-]/g;  // list of characters which are allowed: numbers, lower and upper case letters, periods, underscores, dashes
    var fieldName = 'new_loadedfile'; // field where validation is applied
    var currentValue = formContext.getAttribute(fieldName).getValue();
	var currentControl = formContext.getControl(fieldName);
    var notificationId = "FieldNotificationId";  // ID for the notification, which will be used to set or clear it upon correct upload
	
	//capture file name attribute from the returned list of values
	var fileName = currentValue.fileName;

	//trim to remove leading spaces
	fileName = fileName.trim();

	//Validation with a notification
	if (pattern.test(fileName)) {
		currentControl.setNotification("Invalid filename - only letter, number, period, underscore, and dash characters are allowed; spaces are not allowed.", notificationId);
	} else {
		currentControl.clearNotification(notificationId);
	}
}
