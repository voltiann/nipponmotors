document.addEventListener('DOMContentLoaded', function() {
     const cars = [
        {
            name: "TOYOTA COROLLA",
            price: "Php 1,135,000 – 1,745,000",
            image: "toyota_corolla.png",
            description: "The Toyota Corolla Altis is a stylish, reliable sedan known for its fuel efficiency and advanced features."
        },
        {
            name: "HONDA CIVIC",
            price: "Php 1,583,000 – 1,795,000",
            image: "honda_civic.png",
            description: "The Honda Civic is a compact car offering a smooth ride, advanced safety features, and an impressive engine performance."
        },
        {
            name: "NISSAN ALTIMA",
            price: "Php 1,620,000",
            image: "nissan_altima.png",
            description: "The Nissan Altima is a mid-size sedan with a powerful engine, luxurious interior, and cutting-edge technology."
        },
        {
            name: "MAZDA 3",
            price: "Php 1,510,000 – 1,840,000",
            image: "mazda_3.png",
            description: "The Mazda 3 is a sleek, high-performance compact car that offers excellent fuel economy and superior driving dynamics."
        }
    ];

    const carInfoModal = document.getElementById('car-info-modal');
    const carInfoTitle = document.getElementById('car-info-title');
    const carInfoImage = document.getElementById('car-info-image');
    const carInfoPrice = document.getElementById('car-info-price');
    const carInfoDescription = document.getElementById('car-info-description');
    const closeInfoBtn = document.getElementById('close-info-btn');

    const showInfoButtons = document.querySelectorAll('.show-info-btn');

    showInfoButtons.forEach((button, index) => {
        button.addEventListener('click', function() {

            const car = cars[index];
            carInfoTitle.textContent = car.name;
            carInfoImage.src = car.image;
            carInfoPrice.textContent = `Price: ${car.price}`;
            carInfoDescription.textContent = car.description;

            carInfoModal.style.display = 'block';
        });
    });

    closeInfoBtn.addEventListener('click', function() {
        carInfoModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === carInfoModal) {
            carInfoModal.style.display = 'none';
        }
    });
});
