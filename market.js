document.addEventListener("DOMContentLoaded", function () {
    const listingsContainer = document.getElementById("listings");

    // Sample listings
    // const listings = [
    //     {
    //         id: 1,
    //         image: "./assets/images/iphone13.jpg",
    //         description: "iPhone 13 Pro - 256GB, Excellent Condition",
    //         price: 1200,
    //         location: "Singapore",
    //         payment: "PayNow"
    //     },
    //     {
    //         id: 2,
    //         image: "./assets/images/gaminglaptop.jpg",
    //         description: "Gaming Laptop - RTX 3060, 16GB RAM",
    //         price: 1800,
    //         location: "Tampines",
    //         payment: "Cash on Delivery"
    //     },
    //     {
    //         id: 3,
    //         image: "./assets/images/headphone.jpg",
    //         description: "Wireless Headphones - Noise Cancelling",
    //         price: 250,
    //         location: "Jurong East",
    //         payment: "Bank Transfer"
    //     }
    // ];

    function getLikedItems() {
        return JSON.parse(localStorage.getItem("likedItems")) || [];
    }

    function toggleFavorite(item, starElement) {
        let likedItems = getLikedItems();
        const isFavorite = likedItems.some(fav => fav.id === item.id);

        if (isFavorite) {
            likedItems = likedItems.filter(fav => fav.id !== item.id);
            starElement.classList.remove("favorited");
        } else {
            likedItems.push(item);
            starElement.classList.add("favorited");
        }

        localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }

    function displayListings() {
        listingsContainer.innerHTML = "";

        const listings = JSON.parse(localStorage.getItem("listings")) || [];
        const likedItems = getLikedItems();

        listings.forEach(item => {
            const listingDiv = document.createElement("div");
            listingDiv.classList.add("listing");

            const isFavorite = likedItems.some(fav => fav.id === item.id);
            const starClass = isFavorite ? "star favorited" : "star";

            listingDiv.innerHTML = `
                <img src="${item.image}" alt="Product Image">
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Payment:</strong> ${item.payment}</p>
                <div class="actions">
                    <i class="${starClass}" data-id="${item.id}">⭐</i>
                    <i class="cart-icon material-icons" data-id="${item.id}" onclick="addProductToCart(${item.id}, '${item.image}', '${item.description}', '${item.price}', 'NIL');">🛒</i>
                </div>
            `;

            const starElement = listingDiv.querySelector(".star");
            starElement.addEventListener("click", () => toggleFavorite(item, starElement));

            listingsContainer.appendChild(listingDiv);
        });
    }

    displayListings();
});

    // function toggleLike(item, heartElement) {
    //     let likedItems = getLikedItems();
        
    //     // Check if the item is already liked
    //     const isLiked = likedItems.some((liked) => liked.id === item.id);
        
    //     if (isLiked) {
    //         // Remove item from liked items
    //         likedItems = likedItems.filter((liked) => liked.id !== item.id);
    //         heartElement.classList.remove('liked'); // Remove the 'liked' class to turn the heart grey
    //     } else {
    //         // Add item to liked items
    //         likedItems.push(item);
    //         heartElement.classList.add('liked'); // Add the 'liked' class to turn the heart red
    //     }
        
    //     // Save updated liked items to localStorage
    //     localStorage.setItem("likedItems", JSON.stringify(likedItems));
    // }

    // function displayListings() {
    //     listingsContainer.innerHTML = "";
    
    //     let listings = JSON.parse(localStorage.getItem("listings")) || [];
    //     let likedItems = getLikedItems();
    
    //     listings.forEach((item) => {
    //         const listingDiv = document.createElement("div");
    //         listingDiv.classList.add("listing");
    
    //         const isLiked = likedItems.some((liked) => liked.id === item.id);
    //         const heartClass = isLiked ? "heart liked" : "heart";
    
    //         listingDiv.innerHTML = `
    //             <img src="${item.image}" alt="Product Image">
    //             <p><strong>Description:</strong> ${item.description}</p>
    //             <p><strong>Price:</strong> $${item.price}</p>
    //             <p><strong>Location:</strong> ${item.location}</p>
    //             <p><strong>Payment:</strong> ${item.payment}</p>
    //             <span class="${heartClass}" data-id="${item.id}">❤️</span>
    //         `;
    
    //         const heartElement = listingDiv.querySelector(".heart");
    //         heartElement.addEventListener("click", () => toggleLike(item, heartElement));
    
    //         listingsContainer.appendChild(listingDiv);
    //     });
    // }
    
    // function displayListings() {
    //     listingsContainer.innerHTML = "";
    
    //     // Fetch listings from localStorage
    //     let listings = JSON.parse(localStorage.getItem("listings")) || [];
    //     let likedItems = getLikedItems();
    
    //     listings.forEach((item) => {
    //         const listingDiv = document.createElement("div");
    //         listingDiv.classList.add("listing");
    
    //         const isLiked = likedItems.some((liked) => liked.id === item.id);
    //         const heartClass = isLiked ? "heart liked" : "heart";
    
    //         listingDiv.innerHTML = `
    //             <img src="${item.image}" onerror="this.src='images/default.jpg';" alt="Product Image">
    //             <p><strong>Description:</strong> ${item.description}</p>
    //             <p><strong>Price:</strong> $${item.price}</p>
    //             <p><strong>Location:</strong> ${item.location}</p>
    //             <p><strong>Payment:</strong> ${item.payment}</p>
    //             <span class="${heartClass}" data-id="${item.id}">❤️</span>
    //         `;
    
    //         const heartElement = listingDiv.querySelector(".heart");
    //         heartElement.addEventListener("click", () => toggleLike(item, heartElement));
    
    //         listingsContainer.appendChild(listingDiv);
    //     });
    // }
    
    //displayListings();
  