if (/Mobi|Android|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
  window.location.href = "https://mobile.ursamajorftc.org/";
}
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
  $('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var imageSrc = button.data('image');
    var modalImage = $('#modalImage');
    modalImage.attr('src', imageSrc);
});