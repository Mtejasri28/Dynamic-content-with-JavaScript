document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionToShow = item.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === sectionToShow) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

const movieSelect = document.getElementById('movie-select');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const bookNowBtn = document.getElementById('book-now');

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});

bookNowBtn.addEventListener('click', () => {
    alert(`You have booked ${count.innerText} seats for $${total.innerText}`);
    clearSelection();
});

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function clearSelection() {
    seats.forEach(seat => seat.classList.remove('selected'));
    updateSelectedCount();
}
