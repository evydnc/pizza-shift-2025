document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const ingredientButtons = document.querySelectorAll('.ingredient-button');
    ingredientButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
});