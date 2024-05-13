window.onload = function() { 
    // Get the "PreviousButton" element 
    var prevButton = document.getElementById("PreviousButton"); 

     // Create a new button and apply CSS
    var SubmitPartsOrder = document.createElement("button"); 
    SubmitPartsOrder.innerHTML = "Submit"; // Set the button name to "Submit" 
    SubmitPartsOrder.className = "btn btn-form button next form-btn"; // Sync the CSS class

    // Add an event listener to the new button 
    SubmitPartsOrder.addEventListener("click", UpdateOrderStatus); 

    // Check if URL contains the specific string - if the user is on the last step - create a button, otherwise hide the fields with ID
    if(window.location.href.indexOf("stepid=your_confirm_step_on_multi_form_id") > -1) { 
        // Insert the new button after the "PreviousButton" 
        prevButton.parentNode.insertBefore(SubmitPartsOrder, prevButton.nextSibling); 
    } else { 
        // Hide the field label which shows ID on previous steps
        var element = document.getElementById("form_field_label"); 
        element.style.display = "none"; 

        // Hide the field which shows ID on previous steps
        var label = document.getElementById("form_field_itself"); 
        label.style.display = "none"; 
    } 
}; 

// Define the "UpdateOrderStatus" function 
function UpdateOrderStatus(event) { 
    event.preventDefault(); // Prevent the default form submission 
    // Create the "PartsOrderNum" variable and assign it the value of "form_field_name" which is read from the form
    var PartsOrderNum = document.getElementById("form_field_name").value; 
 
     //create variables, pass to Power Automate 
    // Pass input to Power Automate 
    var _url = "https://yourdomain.powerappsportals.com/_api/cloudflow/v1.0/trigger/flow_id_number"; 
    var data = {}; 

    // "Variable Name In Your PA Flow" is input variable name in Power Automate step "When Power Pages calls a flow"; PartsOrderNum is the element that got read from the form. 
    //specify the variables in the Power Automate
    data["Variable Name In Your PA Flow"] = PartsOrderNum; 

    //send payload to Power Automate 
    var payload = {}; 
    payload.eventData = JSON.stringify(data); 
    shell.ajaxSafePost({ 
        type: "POST", 
        contentType: "application/json", 
        url: _url, 
        data: JSON.stringify(payload), 
        processData: false, 
        global: false, 
    }) 
        .done(function (response) { 
        console.log("API call successful"); 
    }) 
        .fail(function (data) { 
        console.log("API call unsuccessful"); 
    }); 
    //Redirect to a specific page after button click

    window.location.href = "https://customerselfservice-ells4.powerappsportals.com/orders/";

}
