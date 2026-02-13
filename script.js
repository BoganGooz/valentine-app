function startGame(answer) {
    const app = document.getElementById("app");

    if (!answer) {
        document.getElementById("sadSong").play();
        app.innerHTML = `
            <h1>It's okay, I'm okay</h1>
            <img src="images/sad.jpeg" class="image"/>
            <button onclick="reset()">I changed my mind</button>
        `;
    } else {
        choosePerson();
    }
}

function reset() {
    location.reload();
}

function choosePerson() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Choose the person you want to go with </h1>
        <img src="images/moi1.jpeg" class="image" onclick="chooseYou()"/>
        <img src="images/moi2.JPG" class="image" onclick="chooseYou()"/>
        <img src="images/ponzu.jpg" class="image" onclick="choosePonzu()"/>
        <img src="images/moi3.JPG" class="image" onclick="chooseYou()"/>
        <img src="images/moi4.jpeg" class="image" onclick="chooseYou()"/>
    `;
}

function choosePonzu() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Sorry, Ponzu already has a Valentine :/ </h1>
        <img src="images/ponzu_taken.png" class="image"/>
        <button onclick="choosePerson()">Choose another person to go with</button>
    `;
}

function chooseYou() {
    chooseRestaurant();
}

function chooseRestaurant() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Where would you like to go for our date?</h1>
        <img src="images/kfc.jpeg" class="image" onclick="fastFood('KFC')"/>
        <img src="images/maccas.jpg" class="image" onclick="fastFood('Maccas')"/>
        <img src="images/subway.png" class="image" onclick="fastFood('Subway')"/>
        <img src="images/hungryjacks.jpg" class="image" onclick="fastFood('Hungry Jacks')"/>
        <img src="images/bed.jpg" class="image" onclick="bedChoice()"/>
        <button class="image big-button" onclick="surprise()">Surprise 🎁</button>

    `;
}

function fastFood(place) {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Great choice, ${place} is such a romantic place!</h1>
        <button onclick="chooseRestaurant()">I changed my mind, ${place} is too fancy for us</button>
    `;
}

function bedChoice() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Ohhh naughty girl 😏</h1>
        <img src="images/naughty.jpg" class="image"/>
        <button onclick="chooseRestaurant()">I like your idea, bu let's keep that for after the date</button>
    `;
}

function surprise() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Okay, let’s set it for the 22nd of this month 💖</h1>
        <p>Can’t wait to spend my first Valentine’s ever with you my love, miss you and love you more ❤️</p>
        <button onclick="celebrate()">Celebrate 🎉</button>
    `;
}

function celebrate() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}


