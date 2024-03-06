Sometimes it is necessary to restrict a lookup in Dynamics 365. For example, restricting a lookup to only bring up certain records becomes necessary when attempting to email someone from within Dynamics CRM (aka Dynamics for Sales) or Customer Service. When users enter the contact email, by default not only the contacts are being surfaced, but also leads, accounts, and etc.
There is very little OOTB functionality to accomplish this (as of March 2024). We have to do it with JS.
Here's one approach we can take - read the form, find the value of the attribute, and specify the "type" of lookup.
Just beware, that if you look at any solutions posted out there earlier from 2017 and earlier, you will find that the solutions include code that starts with "Xrm.Page", or "setLookupTypes". Unfortunately the code won't work as this functionality has been depreciated (and replaced with getFormContext) and will produce this error: Xrm.Page.getAttribute("") is not a function
Here's what you can do:
- Create your web resource, and add it to the Onload in the Email object
- Pass on execution context
- Specify the needed lookup types (can be lead, contact, user, account, etc.)
- Use the updated methods (instead of "getAttribute" use "getControl", instead of "setLookupTypes" use "setEntityTypes"
- Of course, use console.log(yourvarhere) and try...catch to monitor performance
