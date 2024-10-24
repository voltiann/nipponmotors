document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        {
            name: "TOYOTA GR86",
            price: "Php 2,100,000",
            image: "toyota_gr86.png",
            description: "test"
        },
        {
            name: "HONDA CIVIC COUPE",
            price: "Php 1,600,000",
            image: "honda_civic_coupe.png",
            description: "The Honda Civic Coupe combines sporty design with practicality, offering a smooth ride and advanced features."
        },
        {
            name: "NISSAN 370Z",
            price: "Php 2,800,000",
            image: "nissan_370z.png",
            description: "The Nissan 370Z is a powerful sports coupe known for its performance, sleek design, and exhilarating driving experience."
        },
        {
            name: "MAZDA MIATA",
            price: "Php 1,900,000",
            image: "mazda_miata.png",
            description: "The Mazda Miata is a lightweight sports car that emphasizes driving pleasure, with a classic roadster design and engaging handling."
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
