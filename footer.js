document.addEventListener('DOMContentLoaded', function() {
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);
  const currentYear = currentDate.getFullYear();

  const contentDiv = document.getElementById('content');
  const paragraph = document.createElement('p');
  paragraph.textContent = `© ${currentYear} Credcesta — Todos os direitos reservados`;
  paragraph.className = 'copyright';

  contentDiv.appendChild(paragraph);
});