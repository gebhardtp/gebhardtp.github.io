// --- TYPEWRITER EFFECT LOGIC ---
const textElement = document.getElementById('typewriter');
const phrases = [
    "\"Building digital products...\"", 
    "\"Designing user experiences...\"", 
    "\"Optimizing code...\"", 
    "\"Coming Soon...\""
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Schneller beim Löschen
    } else {
        textElement.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normale Tippgeschwindigkeit
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause am Ende der Phrase
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Zur nächsten Phrase wechseln
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Animation starten, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', type);