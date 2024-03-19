Sometimes it is useful to save the users extra clicks in filling out the form by auto-filling, or prepopulating fields based on the lookup value they provide on the form.
Unless AI is used to auto-populate the field based on a lookup field, it is possible with a field-level on-change JS web file (text-based and select type fields are not an issue, as the business rules will suffice).
There are 3 parts to the JS: harvesting the field value from the form, calling REST APIs, and setting the field values.
Despite the harvesting and setting the field values is a relatively simple task for the seasoned Dynamics developer, the calling REST APIs might seem a hard task.
But it does not have to be with an excellent Chrome or XRM ToolBox extension called "Dataverse REST Builder" by  GuidoPreite. This extension, in combination with the Level Up will get the file built in no time.
Here are the steps:
- Identify the table that is being used (in the example this is the Case table)
- Identify the lookup field that needs to be queried (in the example this is the Policy field)
- Collect the necessary form attributes (in the example these are policy type and geography)
- Build the XHR query using the REST Builder by retriving single record by quering the tables and columns ("retrive single" request type, Case table with the Policy field)
- Incorporate into the code the assembled API call in the XHR format
- Retrieve the returned values from the API call, and set the values
- And, of course, use console.log(yourvarhere) and try...catch to monitor performance

The code also contains methods to handling a variety of user actions (such as preventing the code to run if the value is not provided, not overriding user-specified fields, and re-setting all values in case a user puts a different lookup)