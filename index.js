function resize() {
    const containers = document.querySelectorAll('.card-emoji'); // all emoji containers
    const baseFontSize = 5; // rem
    const baseWidth = 80; // px

    // Resize emojis
    containers.forEach(container => {
        const containerWidth = container.clientWidth;
        if (containerWidth >= baseWidth) {
            container.style.setProperty('--emoji-size', 5 + "rem");
            return;
        }

        const textEl = container.querySelector('.card-emoji-text');
        if (!textEl) return;

        const scale = containerWidth / baseWidth;
        const newFontSize = Math.max(baseFontSize * scale, 2); // min 2rem

        textEl.style.fontSize = newFontSize + "rem";
        container.style.setProperty('--emoji-size', 0 + "rem");
    });

    // Resize titles
    const container_titles = document.querySelectorAll(".card-title-container");
    const baseWidthTitle = 274; // base width in px for title container
    const baseFontSizeTitle = 3; // base font-size in rem for title

    container_titles.forEach(titleEl => {
        const titleWidth = titleEl.clientWidth;
        const textEl = titleEl.querySelector('.card-title-container-text');
        if (!textEl) return;

        const scale = titleWidth / baseWidthTitle;
        const newFontSize = Math.max(baseFontSizeTitle * scale, 1.5); // min 1.5rem
        textEl.style.fontSize = newFontSize + "rem";
    });

    const container_card_type = document.querySelectorAll(".card-type");
    const base_width = 183;
    console.log(container_card_type[0].clientWidth);
    const baseFontSizeCard = 3;

    container_card_type.forEach(titleEl => {
        const titleWidth = titleEl.clientWidth;
        const textEl = titleEl.querySelector('.card-type-text');
        if (!textEl) return;
        const scale = titleWidth / base_width;
        const newFontSize = Math.max(baseFontSizeCard * scale, 1.5); // min 1.5rem
        textEl.style.fontSize = newFontSize + "rem";
    });

    // --- Quantities ---
    const container_quantities = document.querySelectorAll(".card-quantity");
    const baseWidthQuantity = 183; // px
    const baseFontSizeQuantity = 2.5; // rem

    container_quantities.forEach(quantityEl => {
        const width = quantityEl.clientWidth;
        const textEl = quantityEl.querySelector('.card-quantity-text');
        if (!textEl) return;

        const scale = width / baseWidthQuantity;
        const newFontSize = Math.max(baseFontSizeQuantity * scale, 1.2);
        textEl.style.fontSize = newFontSize + "rem";
    });

    // --- Prices ---
    const container_prices = document.querySelectorAll(".card-price");
    const baseWidthPrice = 91; // px
    const baseFontSizePrice = 2.5; // rem

    container_prices.forEach(priceEl => {
        const width = priceEl.clientWidth;
        const textEl = priceEl.querySelector('.card-price-text');
        if (!textEl) return;
        const scale = width / baseWidthPrice;
        const newFontSize = Math.max(baseFontSizePrice * scale, 1.2);
        textEl.style.fontSize = newFontSize + "rem";
    });

    // --- Details ---
    const container_details = document.querySelectorAll(".card-details-check");
    const baseWidthDetails = 183; // px
    const baseFontSizeDetails = 3; // rem
    container_details.forEach(detailsEl => {
        const width = detailsEl.clientWidth;
        const textEl = detailsEl.querySelector('.card-details-text');
        if (!textEl) return;
        const scale = width / baseWidthDetails;
        const newFontSize = Math.max(baseFontSizeDetails * scale, 1.5);
        textEl.style.fontSize = newFontSize + "rem";
    });
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", resize);
window.addEventListener("resize", resize);
