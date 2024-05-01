For the majority of the cases, Dynamics built-in validation tools are typically sufficient. However, there are cases where extra validation of the user input is necessary.
For example, if the file which is being uploaded contains a slash, a hashtag, and other special characters, the file name will be cut-off just before that character, cutting the extension along with it.
A simple way to prevent this is to put a validation on the field that contains it.
here's what you can do:
- Create your web resource, add it to the OnChange (in case of the text field validation), or OnSave (in case of the uploaded file name validation)
- Pass on execution context
- Build your pattern in RegEx
- Specify fields, assign variables, and perform a test while surfacing notification to the users
- Of course, use console.log(yourvarhere) and try...catch to monitor performance
