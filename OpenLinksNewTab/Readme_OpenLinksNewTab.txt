Power Pages provides a robust feature set that includes the ability to display subgrids with hyperlinks. This allows users to easily navigate to items that have a public URL. However, by default, these hyperlinks open in the same window, which can potentially disrupt the user experience.
To enhance usability, you can configure these hyperlinks to open in a new tab. Here’s how you can achieve this:
- Embed JavaScript (JS) on the form page: This script should load with a mutation observer. The mutation observer will monitor changes in the DOM and react accordingly.
- Identify table elements with specific hyperlink attributes: Make a list of table elements that contain the specific hyperlink attribute and modify it. This step ensures that the correct elements are targeted for modification.
- Create an observer and pass the target node: The observer will keep track of changes in the target node, allowing for dynamic updates.
- Monitor performance with console.log and try…catch: Use console.log(yourVarHere) within a try...catch block to monitor performance. This will help you identify any potential issues or bottlenecks in your code.
