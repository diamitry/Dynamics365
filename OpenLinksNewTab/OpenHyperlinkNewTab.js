// Create a new mutation observer 
var observer = new MutationObserver(function(mutations) { 
mutations.forEach(function(mutation) { 
if (mutation.type === 'childList') { 

// Select the table cell with the specific data-attribute 
var tdElements = document.querySelectorAll('td[data-attribute="new_hyperlinkfield"]'); 
tdElements.forEach(function(tdElement) { 

// Get the anchor element within the selected table cell 
var anchorElement = tdElement.querySelector('a'); 
if (anchorElement && anchorElement.href.includes("test.com")) { 

// Modify the target attribute of the anchor element 
anchorElement.target = '_blank'; 
} 
}); 
} 
}); 
}); 

// Configuration of the observer 
var config = { childList: true, subtree: true }; 

// Pass in the target node as well as the observer options 
observer.observe(document.getElementById('elementname'), config); 