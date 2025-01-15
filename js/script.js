document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
  
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
  
  if (/Mobi|Android|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    alert("You're visiting this site on a mobile device! Please visit on a desktop for the best experience.");
}

