// typing effect
const words = ["Python Developer", "DSA Enthusiast", "Web Developer"];
let i = 0, j = 0, del = false;

function type() {
    let word = words[i];

    if (!del) {
        document.getElementById("typing").innerText = word.substring(0, j++);
        if (j > word.length) del = true;
    } else {
        document.getElementById("typing").innerText = word.substring(0, j--);
        if (j === 0) {
            del = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, del ? 60 : 100);
}
type();

// simple galaxy background
const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 80; i++) {
    stars.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.5
    });
}

function draw() {
    ctx.fillStyle = "rgba(11,18,32,0.4)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#38bdf8";

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.y += 0.3;
        if (s.y > c.height) s.y = 0;
    });

    requestAnimationFrame(draw);
}

draw();

// loader remove
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});