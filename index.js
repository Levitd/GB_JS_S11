(async () => {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error('Failed from data.json')
        }

        const data = await response.json();

        const productBox = document.querySelector('.product__box');
        console.log(data);

        data.forEach(({ name, image, price, description }) => {
            console.log(description, price);
            const productEl = `
            <div class="product">
                <div class="pruduct__content">
                    <img class="product_img" src="${image}" alt="${name}">
                    <div class="product__desc">
                        <h2 class="product__name">${name}</h2>
                        <p class="product__description">${description}</p>
                        <p class="product__price_label"><span class="product__price">$${price}</span></p>
                    </div>
                </div>
            </div>`;
            productBox.insertAdjacentHTML('beforeend', productEl);
        });
    } catch (error) {
        console.error(error);
    }
}).apply();

