document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        {
            name: "TOYOTA RAV4",
            price: "Php 1,800,000 – 2,200,000",
            image: "toyota_rav4.png",
            description: "The Toyota RAV4 is a compact SUV that is known for its reliability, spacious interior, and off-road capabilities."
        },
        {
            name: "HONDA CR-V",
            price: "Php 1,750,000 – 2,100,000",
            image: "honda_crv.png",
            description: "The Honda CR-V is a versatile SUV that offers a comfortable ride, excellent fuel efficiency, and a high resale value."
        },
        {
            name: "NISSAN X-TRAIL",
            price: "Php 1,600,000 – 1,900,000",
            image: "nissan_xtrail.png",
            description: "The Nissan X-Trail is a family-friendly SUV that features a stylish design, advanced safety features, and ample cargo space."
        },
        {
            name: "MAZDA CX-5",
            price: "Php 1,700,000 – 2,000,000",
            image: "mazda_cx5.png",
            description: "The Mazda CX-5 is a stylish SUV that offers sporty handling, a luxurious interior, and cutting-edge technology."
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
