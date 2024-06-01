// Sample room data, replace with dynamic data from a server in a real scenario
const rooms = [
    { id: 1, type: 'Single', price: 100 },
    { id: 2, type: 'Double', price: 150 },
    { id: 3, type: 'Suite', price: 200 }
];

// Function to display room information
function displayRooms() {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '<h2>Available Rooms</h2>';

    rooms.forEach(room => {
        roomList.innerHTML += `
            <div>
                <p>${room.type} Room - $${room.price}/night</p>
                <button onclick="showBookingForm(${room.id})">Book Now</button>
            </div>
        `;
    });
}

// Function to show booking form for a specific room
function showBookingForm(roomId) {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.innerHTML = '<h2>Book a Room</h2>';

    // Add form fields and customize based on your requirements
    bookingForm.innerHTML += `
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            
            <label for="check-in">Check-in date:</label>
            <input type="date" id="check-in" required>
            
            <label for="check-out">Check-out date:</label>
            <input type="date" id="check-out" required>
            
            <button type="button" onclick="bookRoom(${roomId})">Book Now</button>
        </form>
    `;
}

// Function to handle room booking (dummy function, replace with actual booking logic)
function bookRoom(roomId) {
    alert(`Room ${roomId} booked successfully!`);
}

// Initial room display
displayRooms();