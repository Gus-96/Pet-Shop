// Função para inicializar o mapa com a localização da loja
function initMap() {
  const loja = { lat: -9.37790, lng: -40.52705 }; // Coordenadas da loja

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: loja
  });

  const marker = new google.maps.Marker({
    position: loja,
    map: map,
    title: 'Nossa Loja'
  });
}

// Exibir o botão "Voltar ao Topo" ao rolar a página
window.onscroll = function() {
  const backToTopButton = document.getElementById('backToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Função para voltar ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}