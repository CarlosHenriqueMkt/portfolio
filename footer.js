document.addEventListener('DOMContentLoaded', function() {
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);
  const currentYear = currentDate.getFullYear();

  const contentDiv = document.getElementById('content');
  const paragraph = document.createElement('p');
  paragraph.textContent = `© ${currentYear} 3D NA WEB — Todos os direitos reservados`;
  paragraph.className = 'copyright';

  contentDiv.appendChild(paragraph);
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show the button when scrolling down 20px from the top of the document
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  });
});