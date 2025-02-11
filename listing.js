// listing.js - Handles listing creation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("listing-form");
    const imageInput = document.getElementById("image-input");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const location = document.getElementById("location").value;
        const paymentMethod = document.getElementById("payment-method").value;

        if (imageInput.files.length === 0) {
            alert("Please upload an image.");
            return;
        }

        const imageFile = imageInput.files[0];
        const imageBase64 = await convertToBase64(imageFile);

        const listing = {
            id: Date.now(),
            image: imageBase64,
            description,
            price,
            location,
            payment: paymentMethod
        };

        let listings = JSON.parse(localStorage.getItem("listings")) || [];
        listings.push(listing);
        localStorage.setItem("listings", JSON.stringify(listings));

        alert("Product listed successfully!");
        form.reset();
    });

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    }
});
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();
    
    //     const imageInput = document.getElementById("image-input");
    //     const description = document.getElementById("description").value;
    //     const price = document.getElementById("price").value;
    //     const location = document.getElementById("location").value;
    //     const paymentMethod = document.getElementById("payment-method").value;
    
    //     if (imageInput.files.length === 0) {
    //         alert("Please upload an image.");
    //         return;
    //     }
    
    //     const imageFile = imageInput.files[0];
    //     const imageUrl = URL.createObjectURL(imageFile);
    
    //     // Create the listing object
    //     const listing = {
    //         id: Date.now(), // Use a timestamp as a unique ID
    //         image: imageUrl,
    //         description: description,
    //         price: price,
    //         location: location,
    //         payment: paymentMethod,
    //     };
    
    //     // Save the listing to localStorage
    //     let listings = JSON.parse(localStorage.getItem("listings")) || [];
    //     listings.push(listing);
    //     localStorage.setItem("listings", JSON.stringify(listings));
    
    //     alert("Product listed successfully!");
    //     form.reset();
    // });
    

