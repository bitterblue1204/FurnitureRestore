//Cedar Restoration Js
// Diana Gomez
 

//array
const customers =[];
document.getElementById("submitBtn").addEventListener("click", function() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //add to array
    const customer = {
        id: customers.length + 1,
        firstName: fname,
        lastname: lname,
        email: email,
        password: password
    };

    customers.push(customer);
    
    //clear
    document.getElementById("customerForm").reset();


    const message = document.createElement("p");
    message.textContent = "Thank you, " + fname + "! You have been added to our mailing list.";
    message.style.color = "#916944";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.marginTop = "15px";

    const form = document.getElementById("customerForm");
    form.parentNode.insertBefore(message, form.nextSibling);

    //remove
    document.getElementById("customerForm").addEventListener("input", function() {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }

    }, {once: true}); // only does once. 

    console.clear();
    console.log(customers);

});


