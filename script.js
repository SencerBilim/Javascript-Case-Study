const seatGrid = document.getElementById("seatGrid");
const totalPriceEl = document.getElementById("totalPrice");
const selectedSeatsEl = document.getElementById("selectedSeats");

const seats = [];
const totalSeats = 20;
const seatPrice = 1000;
let selectedSeats = [];

// Generate Seats Dynamically
for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.textContent = i; // Display seat number

  // First 10 seats are occupied
  if (i <= 10) {
    seat.classList.add("occupied");
    seat.setAttribute("data-tooltip", "Bu koltuk dolu!"); // Tooltip for occupied seats
  } else {
    seat.addEventListener("click", () => handleSeatClick(i)); // Add event listener for click
  }

  seats.push(seat);
  seatGrid.appendChild(seat);
}

// Handle Seat Clicks
function handleSeatClick(seatNumber) {
  const seat = seats[seatNumber - 1];

  // Check if the seat is occupied
  if (seat.classList.contains("occupied")) {
    alert("Bu koltuk dolu!");
    return;
  }

  // Toggle selection
  if (seat.classList.contains("selected")) {
    seat.classList.remove("selected");
    selectedSeats = selectedSeats.filter((num) => num !== seatNumber);
  } else {
    if (selectedSeats.length >= 3) {
      alert("En fazla 3 koltuk seçebilirsiniz!");
      return;
    }
    seat.classList.add("selected");
    selectedSeats.push(seatNumber);
  }

  updateSidebar();
  saveSelections();
  resetTimer();
}

// Update Sidebar with Selected Seats and Total Price
function updateSidebar() {
  selectedSeatsEl.innerHTML = selectedSeats
    .map((num) => `<li>Koltuk ${num}</li>`)
    .join("");
  totalPriceEl.textContent = selectedSeats.length * seatPrice;
}

// Handle Reservation Form Submission
const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  alert(
    `Rezervasyon başarılı!\nİsim: ${name}\nE-posta: ${email}\nSeçilen Koltuklar: ${selectedSeats.join(
      ", "
    )}`
  );
  resetSelections();
});

// Reset Selections
function resetSelections() {
  selectedSeats.forEach((num) => {
    const seat = seats[num - 1];
    seat.classList.remove("selected");
  });
  selectedSeats = [];
  updateSidebar();
}

// Inactivity Timer (30 Seconds)
let timer;

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (selectedSeats.length > 0) {
      const proceed = confirm("İşleme devam etmek istiyor musunuz?");
      if (!proceed) {
        resetSelections();
      }
    }
  }, 30000); // 30 seconds
}

document.addEventListener("click", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("mousemove", resetTimer);
document.addEventListener("touchstart", resetTimer);
resetTimer();

// Fetch User Data and Update Tooltips
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Veri alınamadı!");
    }
    return response.json();
  })
  .then((users) => {
    users.forEach((user, index) => {
      const seat = document.querySelector(`.seat:nth-child(${index + 1})`);
      if (seat && seat.classList.contains("occupied")) {
        seat.setAttribute(
          "data-tooltip",
          `${user.name} (${user.email})`
        );
      }
    });
  })
  .catch((error) => console.error("Hata:", error));

// Save and Load Selections Using Local Storage
function saveSelections() {
  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

function loadSelections() {
  const savedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  savedSeats.forEach((seatNumber) => {
    const seat = seats[seatNumber - 1];
    seat.classList.add("selected");
    selectedSeats.push(seatNumber);
  });
  updateSidebar();
}

// Load Selections on Page Load
loadSelections();




