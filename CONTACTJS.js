document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const messageModal = document.getElementById('message-modal');
    const closeModal = document.getElementById('close-modal');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        messageModal.style.display = 'block';

        form.reset();
    });

    closeModal.addEventListener('click', function () {
        messageModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === messageModal) {
            messageModal.style.display = 'none';
        }
    });
});
