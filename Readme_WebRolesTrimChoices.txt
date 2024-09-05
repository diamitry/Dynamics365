In Power Pages, web roles are a powerful tool for providing granular access to pages, displaying custom lists via FetchXML queries, and enhancing user experience. However, using web roles to operate at the field level, particularly to manipulate dropdown values, can cause issues. 
This is because dropdown (or choice) values are codified by their numeric values, making it difficult to match them to the descriptive string values from the web roles. 
Here’s what we can do:

- Query the web role of the logged-in user through Liquid code.
- Create an object variable to store role description and dropdown value pairs.
- Cycle through the role values and adjust the dropdown values accordingly.
- Use console.log(yourvarhere) and try...catch to monitor performance.
