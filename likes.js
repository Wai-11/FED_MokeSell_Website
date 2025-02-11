document.addEventListener("DOMContentLoaded", function () {
    const likesContainer = document.getElementById("likes");

    function getLikedItems() {
        return JSON.parse(localStorage.getItem("likedItems")) || [];
    }

    function displayLikedItems() {
        likesContainer.innerHTML = "";
        let likedItems = getLikedItems();

        if (likedItems.length === 0) {
            likesContainer.innerHTML = "<p>No liked items yet.</p>";
            return;
        }

        likedItems.forEach(item => {
            const listingDiv = document.createElement("div");
            listingDiv.classList.add("listing");

            listingDiv.innerHTML = `
                <img src="${item.image}" alt="Product Image">
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Payment:</strong> ${item.payment}</p>
            `;

            likesContainer.appendChild(listingDiv);
        });
    }

    displayLikedItems();
});