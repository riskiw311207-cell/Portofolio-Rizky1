// Simple magical floating particles
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("span");
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = 5 + Math.random() * 10 + "s";
  particle.style.opacity = Math.random();
  particleContainer.appendChild(particle);
}

// Glowing orbs that roam and pop in/out
const orbContainer = document.getElementById("orbs");
const orbs = [];

for (let i = 0; i < 10; i++) {
  const orb = document.createElement("div");
  orb.className = "orb";
  orb.style.left = Math.random() * 100 + "vw";
  orb.style.top = Math.random() * 100 + "vh";
  orb.style.animationDelay = Math.random() * 10 + "s";
  orbContainer.appendChild(orb);
  
  // Add properties for animation
  orb.x = Math.random() * window.innerWidth;
  orb.y = Math.random() * window.innerHeight;
  orb.vx = (Math.random() - 0.5) * 0.5; // velocity x (calmer)
  orb.vy = (Math.random() - 0.5) * 0.5; // velocity y (calmer)
  orbs.push(orb);
}

// Animate orbs like fairies searching
function animateOrbs() {
  orbs.forEach(orb => {
    // Update position
    orb.x += orb.vx;
    orb.y += orb.vy;
    
    // Bounce off edges
    if (orb.x <= 0 || orb.x >= window.innerWidth - 20) orb.vx *= -1;
    if (orb.y <= 0 || orb.y >= window.innerHeight - 20) orb.vy *= -1;
    
    // Occasionally change direction randomly (searching behavior)
    if (Math.random() < 0.005) { // 0.5% chance per frame (less frequent)
      orb.vx = (Math.random() - 0.5) * 1.5;
      orb.vy = (Math.random() - 0.5) * 1.5;
    }
    
    // Apply position
    orb.style.left = orb.x + "px";
    orb.style.top = orb.y + "px";
  });
  
  requestAnimationFrame(animateOrbs);
}

animateOrbs();

// Smooth scroll animation for Enter the Realm button
const enterButton = document.querySelector('.btn-magic');
enterButton.addEventListener('click', (e) => {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
