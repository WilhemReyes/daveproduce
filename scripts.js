document.addEventListener('DOMContentLoaded', function () {
  // Configuración para WhatsApp Business
  const phoneNumber = "+34641126874"; // Número en formato internacional sin el símbolo +
  const message = encodeURIComponent("Hola, estoy interesado en tus servicios de producción musical.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Asignar listener a todos los botones con clase .whatsapp-button
  const whatsappButtons = document.querySelectorAll('.whatsapp-button');
  whatsappButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      window.open(whatsappUrl, '_blank');
    });
  });
  
  // Menú desplegable para móviles
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      // Actualiza el atributo aria-expanded para accesibilidad
      const isExpanded = menu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});
