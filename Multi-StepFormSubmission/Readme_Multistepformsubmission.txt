Power Pages (fka Power Portals, fka Microsoft Dynamics 365 Portal, fka Adxstudio CMS) is a quick way to stand up access to your Dynamics instance to the third parties. One of the great feature of this product is an ability to create forms which gives a lot of interactivity with your Dynamics/Dataverse data to the third parties, such as customers, suppliers, distributors, etc.
Although powerful, it relies on creating and updating data directly in Dataverse, which in turn gives an ability to listen to events and process them as soon as they are triggered via Power Automate and other MS tools. However, it is very hard to pinpoint the moment when the form is actually submitted.
Consider this scenario: a customer (an HVAC residential installer) is placing an order on the OEM portal. Installer follows a form where the details are being filled out about the the homeowner, homeowner's address, warranty, and etc ("Header"), and then proceeds to select the items - "build the the cart" (line items). 
There is no OOTB way to capture that final "Submit" on the 2nd step of the form. If PA flow will be triggered as soon as the line item is submitted - the order may be processed too soon as the installer will be deliberating/confirming the order with the homeowner, rendering this solution to be sub-optimal.

Here's what you can do:
- Create a 3rd step on the multi-step form, call it "Order Summary and Confirmation" read-only step, which will list information filled out on the order header, and a table with all of the line items.
- Create a "Submit" button on the 3rd step, and hide the OOTB "Submit" button via JS.
- Have JS listen for the "Submit" button click, gather the ID from the form, assign it to a variable, and pass to the PA via the payload.
- Trigger the PA on "When Power Automate Calls a Flow" step, and pass the variable to it to allow wider Dataverse access.

Tips and tricks:
- Make sure to give PA flow the "Admin", "Unathenticated" and "Authenticated" roles on the Power Pages;
- When you create a Submit button, feel free to apply CSS styles from your Bootstap/Theme CSS to make it look OOTB
- Each form step has a distinct stepid value, therefore create an if-then check to only show "Submit" button on the appropriate stepid
- And, of course, use console.log(yourvarhere) and try...catch to monitor performance
