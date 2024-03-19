// This function retrieves data that corresponds to the Policy on the Case lookup value, and returns Policy Type (dropdown) and Customer Geography (text)
function prepopulatecasefields(executionContext) {

    // Getting Form Context
    var formContext = executionContext.getFormContext();
    // Getting the entered Policy ID on the form
    var PolicyId = formContext.getAttribute("new_Policynumber").getValue();
    // Flag to check if PolicyId is populated by the code
    var isPopulatedByCode = false;
    // Counter to remember if the field was populated by this code 15 times for user re-setting the field
    var populatedCount = 0;
    // Capturing value of the Policy number if it is not null
    if (PolicyId != null && PolicyId != undefined){
        // Getting the GUID of the lookup record
        var RawPolicyGUID = PolicyId[0].id
        // Trimming the returned GUID from the curly brackets
        var PolicyGUID = RawPolicyGUID.replace('{',"").replace('}',"");

        //lets call Web APIs
        var req = new XMLHttpRequest();
        req.open("GET", `https://yourdomain.crm.dynamics.com/api/data/v9.2/New_Policy(${PolicyGUID})?$select=new_customergeography,new_policytype`, true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Prefer", "odata.include-annotations=*");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var result = JSON.parse(this.response);
                    console.log(result);
                    // Returned Columns
					var result_new_policytype = result["new_policytype"]; // Choice
                    var result_new_customergeography = result["new_customergeography"]; // Text

                    //populating fields on Case object
                    formContext.getAttribute("new_casepolicytype").setValue(result_new_policytype);
                    formContext.getAttribute("new_casecustomergeography").setValue(result_new_customergeography);
                    // Set the flag to true as the PolicyId is populated by the code
                    isPopulatedByCode = true;
                    // Increment the counter
                    populatedCount++;
                } else {
                    console.log(this.responseText);
                }
            }
        };
        // end calling Web APIs
		
		//sending API request
        req.send();
	
	//Handling different user actions, such as blank value and resetting the values for different policy number input
    } else {
        // If PolicyId is null or undefined, clear the values of new_casepolicytype and new_ponumber
        formContext.getAttribute("new_casepolicytype").setValue(null);
        formContext.getAttribute("new_casecustomergeography").setValue(null);
    }

    // Check if PolicyId was populated by the code
    if(isPopulatedByCode){
        // Set the value of new_casepolicytype and new_ponumber to null
        formContext.getAttribute("new_casepolicytype").setValue(null);
        formContext.getAttribute("new_casecustomergeography").setValue(null);
    }

    // If the field was populated by this code 15 times, reset all the variables
    if(populatedCount === 15){
        PolicyId = null;
        isPopulatedByCode = false;
        populatedCount = 0;
    }
}