
//Validation form
   // Get all forms with the 'needs-validation' class
    let forms = document.querySelectorAll('.needs-validation')

        // Convert NodeList to Array using Array.from()
    let formArray = Array.from(forms); //converts forms to an array

    // Loop through each form and attach a submit event listener
        formArray.forEach(function (form) {      //Function 1
            form.addEventListener('submit', function (event) {  //Function 2
                if (!form.checkValidity()) {
                    // Prevent form submission if validation fails
                    event.preventDefault()
                    event.stopPropagation()
                }
                
                // Add Bootstrap's 'was-validated' class to show feedback
                form.classList.add('was-validated')
            }, false)
        });


//Cost Calculator 
    const quantityInputs = document.querySelectorAll(".quantity"); //reads document and selects ALL with the CSS class of qunatity.
    
        //CalculateTotal Function 3
    function calculateTotal() {
        let total = 0;
        
        quantityInputs.forEach((input, index) => { //Arrow Function 4         //forEach loops through all the input feilds once
            const costElement = document.querySelectorAll(".cost")[index]; // reads document and selects ALL with the css class of cost
            let cost = parseFloat(costElement.textContent.trim()); // parseFloat conversts strings to float value and .trim removes any whitespace from both ends of the string

            const quantity = parseInt(input.value) || 0; // Gets quantity or sets it to 0
            
            total += cost * quantity; // Calculates total
        });
        
        document.getElementById("totalCost").innerHTML = `$${total.toFixed(2)}`; //selects element "totalCost" using.innerHTML it sets HTML content 
                                                                                 //inserts string with fixed demical of 2 places
    }


    //Add listner for each input feild to call calculateTotal function
    quantityInputs.forEach(input => { //Arrow Function 5
        input.addEventListener("input", calculateTotal);
    });








