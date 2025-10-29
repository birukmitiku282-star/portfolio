const profile = document.querySelector('.home-image img');

profile.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  profile.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

profile.addEventListener('mouseleave', () => {
  profile.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".cert-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Thank you, your message has been sent!");
  e.target.reset();
});
