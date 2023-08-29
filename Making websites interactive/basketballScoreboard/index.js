let homeCount = 0;
let homeScore = document.getElementById("home-score");
let guestCount = 0;
let guestScore = document.getElementById("guest-score");

// Home Score
function addOneHome(){
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function addTwoHome(){
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThreeHome(){
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function clearHome(){
    homeCount = 0;
    homeScore.textContent = 0;
}


// Guest Score
function addOneGuest(){
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function addTwoGuest(){
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function addThreeGuest(){
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function clearGuest(){
    guestCount = 0;
    guestScore.textContent = 0;
}

