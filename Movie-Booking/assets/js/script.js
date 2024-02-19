let selectedMovie = "";
let seatType = "";
let seatCount = 0;
let selectedSeats = [];
let selectedType = ""; // 'standard' or 'premium'

function selectMovie(movieName) {
    selectedMovie = movieName;
    document.getElementById("movie-selection").classList.add("hidden");
    document.getElementById("seat-count-selection").classList.remove("hidden");
    document.getElementById("seat-booking").classList.remove("hidden");

    
    displaySeatMap();
    displaySeatMapP();

    // displayBookedSeats()

    displaySeatMaps1();
    displaySeatMaps2();
    displaySeatMapp1();
    displaySeatMapp2();

    selectSeatType1('premium')
    selectSeatType('standard')
    
    // document.getElementById("seat-selection").classList.remove("hidden");

    // let hide = document.getElementById("seat-count-selection")
    // hide.style.display = "block"
}

// function confirmSeatCount() {
//     seatCount = parseInt(document.getElementById("seat-count-input").value);

//     if (seatCount > 0 &&  seatType == "standard") {
//         // document.getElementById("seat-count-selection").classList.add("hidden");
//         // document.getElementById("seat-map").classList.add("hidden");

//         // document.getElementById("seat-booking").classList.remove("hidden");

//         displaySeatMap();
//         // displaySeatMapP();
//     }else if(seatCount > 0 && seatType == "premium"){
//         displaySeatMapP();
//     }else{
//         alert("Please enter a valid number of seats");
//     }
// }

function confirmSeatCount() {
    const selectedValue = parseInt(document.getElementById("seat-count-input").value);

    console.log(selectedValue)

    if (selectedValue) {
        seatCount = selectedValue;
        
        if (seatType === "standard") {
            displaySeatMap();
            displaySeatMaps1()
            displaySeatMaps2()
        } else if (seatType === "premium") {
            displaySeatMapP();
            displaySeatMapp1();
            displaySeatMapp2();
        }
    } else {
        alert("Please select a valid number of seats (between 2 and 5).");
    }
}



function selectSeatType(type) {
    seatType = type;
    // isSeatBookingSelected = true;
    // document.getElementById("seat-booking").classList.add("hidden");

    displaySeatMap();
    displaySeatMaps1()
    displaySeatMaps2()

    const seatMap1 = document.getElementById("seat-map1");
    const seatMapp1 = document.getElementById("seat-mapp1");
    const seatMapp2 = document.getElementById("seat-mapp2");

    seatMap1.style.pointerEvents = 'none';
    seatMap1.style.opacity = "0.5"

    seatMapp1.style.pointerEvents = 'none';
    seatMapp1.style.opacity = "0.5"

    seatMapp2.style.pointerEvents = 'none';
    seatMapp2.style.opacity = "0.5"


    const seatMap = document.getElementById("seat-map");
    const seatMaps1 = document.getElementById("seat-maps1");
    const seatMaps2 = document.getElementById("seat-maps2");

    seatMap.style.pointerEvents = 'auto';
    seatMap.style.opacity = "1"

    seatMaps1.style.pointerEvents = 'auto';
    seatMaps1.style.opacity = "1"

    seatMaps2.style.pointerEvents = 'auto';
    seatMaps2.style.opacity = "1"

    // let hide = document.getElementById("seat-count-selection")
    // hide.style.display = "block"
}

function selectSeatType1(type) {
    seatType = type;
    // isSeatBookingSelected = true; 
    // document.getElementById("seat-booking").classList.add("hidden");
    displaySeatMapP()
    displaySeatMapp1()
    displaySeatMapp2()

    const seatMap = document.getElementById("seat-map");
    const seatMaps1 = document.getElementById("seat-maps1");
    const seatMaps2 = document.getElementById("seat-maps2");

    seatMap.style.pointerEvents = 'none';
    seatMap.style.opacity = "0.5"

    seatMaps1.style.pointerEvents = 'none';
    seatMaps1.style.opacity = "0.5"

    seatMaps2.style.pointerEvents = 'none';
    seatMaps2.style.opacity = "0.5"

    const seatMap1 = document.getElementById("seat-map1");
    const seatMapp1 = document.getElementById("seat-mapp1");
    const seatMapp2 = document.getElementById("seat-mapp2");

    seatMap1.style.pointerEvents = 'auto';
    seatMap1.style.opacity = "1"

    seatMapp1.style.pointerEvents = 'auto';
    seatMapp1.style.opacity = "1"

    seatMapp2.style.pointerEvents = 'auto';
    seatMapp2.style.opacity = "1"
    

    // let hide = document.getElementById("seat-count-selection")
    // hide.style.display = "block"
}

// Standard seats
function displaySeatMap() {
    const seatMap = document.getElementById("seat-map");
    seatMap.innerHTML = "";

    const totalSeats = 10;
    let movieKey = `${selectedMovie}_${seatType}`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}

function displaySeatMaps1() {
    const seatMap = document.getElementById("seat-maps1");
    seatMap.innerHTML = "";

    const totalSeats = 20;
    let movieKey = `${selectedMovie}_${seatType}`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];
    for (let i = 11; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}

function displaySeatMaps2() {
    const seatMap = document.getElementById("seat-maps2");
    seatMap.innerHTML = "";

    const totalSeats = 30;
    let movieKey = `${selectedMovie}_${seatType}`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];
    for (let i = 21; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}



// Primium seats
function displaySeatMapP() {
    const seatMap = document.getElementById("seat-map1");
    seatMap.innerHTML = "";

    const totalSeatsP = 10;
    let movieKey1 = `${selectedMovie}_premium`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey1)) || [];
    for (let i = 1; i <= totalSeatsP; i++) {
        const seat = document.createElement("div");
        seat.className = "pri";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}

function displaySeatMapp1() {
    const seatMap = document.getElementById("seat-mapp1");
    seatMap.innerHTML = "";

    const totalSeats = 20;
    let movieKey = `${selectedMovie}_${seatType}`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];
    for (let i = 11; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "pri";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}

function displaySeatMapp2() {
    const seatMap = document.getElementById("seat-mapp2");
    seatMap.innerHTML = "";

    const totalSeats = 30;
    let movieKey = `${selectedMovie}_${seatType}`;
    let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];
    for (let i = 21; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "pri";
        seat.textContent = i;

        if (bookedSeats.includes(i.toString())) {
            seat.classList.add("booked");
        } else {
            seat.addEventListener("click", () => {
                toggleSeat(seat);
            });
        }
        seatMap.appendChild(seat);
    }
    document.getElementById("seat-selection").classList.remove("hidden");
}


// function toggleSeat(seat) {
//     const seatNumber = parseInt(seat.textContent);

//     clearSelectedSeats();
//     clearSelectedSeatsP();

//     // Select the clicked seat
//     selectedSeats.push(seatNumber.toString());
//     seat.classList.add("selected");

//     const seatMap = seatType === 'standard' ? document.getElementById("seat-map") : document.getElementById("seat-map1");
//     const totalSeats = seatType === 'standard' ? 70 : 40;
//     const seatClass = seatType === 'standard' ? 'seat' : 'pri';

//     // Select consecutive unbooked seats until the desired number of seats is reached
//     let nextSeatNumber = seatNumber + 1;
//     let prevSeatNumber = seatNumber - 1;

//     while (selectedSeats.length < seatCount) {
//         const nextSeat = seatMap.querySelector(`.${seatClass}:nth-child(${nextSeatNumber})`);

//         if (nextSeat && !nextSeat.classList.contains("booked")) {
//             selectedSeats.push(nextSeatNumber.toString());
//             nextSeat.classList.add("selected");
//         }

//         const prevSeat = seatMap.querySelector(`.${seatClass}:nth-child(${prevSeatNumber})`);

//         if (prevSeat && !prevSeat.classList.contains("booked")) {
//             selectedSeats.push(prevSeatNumber.toString());
//             prevSeat.classList.add("selected");
//         }

//         nextSeatNumber++;
//         prevSeatNumber--;

//         // Break the loop if there are no more available seats
//         if (nextSeatNumber > totalSeats && prevSeatNumber < 1) {
//             break;
//         }
//     }
// }


function toggleSeat(seat) {
    const seatNumber = parseInt(seat.textContent);

    // Check if the seat is already booked
    if (seat.classList.contains("booked")) {
        alert("This seat is already booked.");
        return;
    }

    // Clear previously selected seats if count exceeds the required seat count
    if (selectedSeats.length >= seatCount) {
        clearSelectedSeats();
        clearSelectedSeatsP()
    }

    // Toggle seat selection based on seat type
    const seatMap = seatType === 'standard' ? document.getElementById("seat-map") : document.getElementById("seat-map1");
    const seatClass = seatType === 'standard' ? 'seat' : 'pri';
    const totalSeats = seatType === 'standard' ? 30 : 30;

    // Select the clicked seat
    selectedSeats.push(seatNumber.toString());
    seat.classList.add("selected");

    // Select consecutive unbooked seats until the desired number of seats is reached
    let nextSeatNumber = seatNumber + 1;
    let selectedSeatCount = 1;

    while (selectedSeatCount < seatCount) {
        const nextSeat = seatMap.querySelector(`.${seatClass}:nth-child(${nextSeatNumber})`);

        if (nextSeat && !nextSeat.classList.contains("booked") && !selectedSeats.includes(nextSeat.textContent)) {
            selectedSeats.push(nextSeat.textContent);
            nextSeat.classList.add("selected");
            selectedSeatCount++;
        }

        nextSeatNumber++;

        // Break the loop if there are no more available seats
        if (nextSeatNumber > totalSeats) {
            break;
        }
    }
}

// function toggleSeat(seat) {
//     const seatNumber = parseInt(seat.textContent);
//     const seatClass = seat.classList.contains("seat") ? "seat" : "pri";
//     const seatMap = seatClass === "seat" ? document.getElementById("seat-map") : document.getElementById("seat-map1");
//     const totalSeats = seatMap.childElementCount;

//     // Check if the seat is already booked
//     if (seat.classList.contains("booked")) {
//         alert("This seat is already booked.");
//         return;
//     }

//     // Clear previously selected seats if count exceeds the required seat count
//     if (selectedSeats.length >= seatCount) {
//         clearSelectedSeats()
//         clearSelectedSeatsP();
//     }

//     // Toggle seat selection
//     if (seat.classList.contains("selected")) {
//         // Deselect the seat
//         seat.classList.remove("selected");
//         const index = selectedSeats.indexOf(seatNumber.toString());
//         if (index !== -1) {
//             selectedSeats.splice(index, 1);
//         }
//     } else {
//         // Select the seat
//         seat.classList.add("selected");
//         selectedSeats.push(seatNumber.toString());
//     }

//     // Select consecutive unbooked seats until the desired number of seats is reached
//     let nextSeatNumber = seatNumber + 1;
//     let selectedSeatCount = 1;

//     while (selectedSeatCount < seatCount) {
//         const nextSeat = seatMap.querySelector(`.${seatClass}:nth-child(${nextSeatNumber})`);

//         if (nextSeat && !nextSeat.classList.contains("booked") && !nextSeat.classList.contains("selected")) {
//             nextSeat.classList.add("selected");
//             selectedSeats.push(nextSeat.textContent);
//             selectedSeatCount++;
//         }

//         nextSeatNumber++;

//         // Break the loop if there are no more available seats
//         if (nextSeatNumber > totalSeats) {
//             break;
//         }
//     }
// }

function clearSelectedSeats() {
    const selectedSeatElements = document.querySelectorAll(".seat.selected");

        selectedSeatElements.forEach(seat => {
            seat.classList.remove("selected");
        });
        selectedSeats = [];
}


function clearSelectedSeatsP() {
    const selectedSeatElements = document.querySelectorAll(".pri.selected");

    selectedSeatElements.forEach(seat => {
        seat.classList.remove("selected");
    });
    selectedSeats = [];
}


function checkout() {
    if (selectedSeats.length === 0) {
        alert("Please select seats before checkout");
    } else {
        let movieKey = `${selectedMovie}_${seatType}`;
        let bookedSeats = JSON.parse(localStorage.getItem(movieKey)) || [];

        selectedSeats.forEach(seat => {
            bookedSeats.push(seat);
        });
        
        localStorage.setItem(movieKey, JSON.stringify(bookedSeats));
        
        alert(`Seats ${selectedSeats.join(", ")} of type ${seatType} booked for ${selectedMovie}`);
        selectedSeats = [];

        document.getElementById("seat-selection").classList.add("hidden");
        document.getElementById("movie-selection").classList.remove("hidden");

        window.location.reload()
    }
}