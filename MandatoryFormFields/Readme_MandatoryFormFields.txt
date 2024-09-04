Forms in Power Pages are a powerful tool for interacting with your Dataverse instance and passing data from portal users to the internal audience, such as a case or a custom entity. 
However, these entities often have additional mandatory fields that improve the user experience for internal users but can hinder and confuse external users, as these mandatory fields must be present on the form during submission. 
Unfortunately, there's no out-of-the-box (OOTB) way to hide these fields, especially if they are multi-tier pick lists like Case Subjects.

Here's what you can do:
- Create a pages-only view with all the necessary fields, including any mandatory internal fields.
- Fill the basic fields via basic and/or multistep form metadata, Prepopulate Field actions, and/or JavaScript (JS).
- Hide the fields on the front end through JS.

**Tips and Tricks:**
- You can use both form metadata overrides and JS to set the values of the fields.
- Use GUIDs if you have multi-tiered pick lists (like Case Subjects).
- Use `console.log(yourvarhere)` and `try...catch` to monitor performance.
