// DATOS DE CATÁLOGO DE PELÍCULAS Y SERIES
const mediaData = {
  tendencias: [
    { id: 1, title: 'Dune: Part Two', genre: 'Sci-Fi / Acción', year: '2024', age: '13+', duration: '2h 46m', match: '98%', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400', desc: 'Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.' },
    { id: 2, title: 'Fallout', genre: 'Sci-Fi / Drama', year: '2024', age: '18+', duration: '1 Temporada', match: '95%', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=400', desc: 'En un futuro postapocalíptico, los residentes de los refugios nucleares se ven obligados a regresar al ambiente desolado.' },
    { id: 3, title: 'Furiosa', genre: 'Acción / Aventura', year: '2024', age: '16+', duration: '2h 28m', match: '92%', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=400', desc: 'El origen de la guerrera Imperator Furiosa antes de formar equipo con Mad Max en el desierto.' },
    { id: 4, title: 'Masters of the Air', genre: 'Bélico / Drama', year: '2024', age: '16+', duration: '1 Temporada', match: '91%', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400', desc: 'Cinco millas por encima del suelo y detrás de las líneas enemigas, diez hombres luchan contra escuadrones de cazas alemanes.' },
    { id: 5, title: 'Monkey Man', genre: 'Acción / Thriller', year: '2024', age: '18+', duration: '2h 01m', match: '89%', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400', desc: 'Un joven anónimo desata una campaña de venganza contra los líderes corruptos que asesinaron a su madre.' },
    { id: 6, title: 'Shogun', genre: 'Drama / Histórico', year: '2024', age: '18+', duration: '1 Temporada', match: '99%', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=400', desc: 'Cuando un misterioso barco europeo encalla en un pueblo pesquero japonés, surgen grandes conspiraciones políticas.' }
  ],
  populares: [
    { id: 7, title: 'Baby Reindeer', genre: 'Drama / Suspenso', year: '2024', age: '18+', duration: '1 Temporada', match: '94%', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400', desc: 'Un comediante en apuros tiene un acto de amabilidad hacia una mujer vulnerable que desata una obsesión asfixiante.' },
    { id: 8, title: 'Ripley', genre: 'Crimen / Thriller', year: '2024', age: '16+', duration: '1 Temporada', match: '88%', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=400', desc: 'Un estafador que vive en Nueva York a principios de la década de 1960 es contratado para viajar a Italia.' },
    { id: 9, title: 'Sugar', genre: 'Misterio', year: '2024', age: '16+', duration: '1 Temporada', match: '86%', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400', desc: 'Un detective privado de Los Ángeles investiga la misteriosa desaparición de la nieta de un productor de Hollywood.' },
    { id: 10, title: 'The Gentlemen', genre: 'Comedia / Crimen', year: '2024', age: '18+', duration: '1 Temporada', match: '93%', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400', desc: 'Eddie Halstead hereda la propiedad de su padre, solo para descubrir que alberga un imperio del cannabis.' }
  ],
  scifi: [
    { id: 11, title: 'Civil War', genre: 'Acción / Drama', year: '2024', age: '18+', duration: '1h 49m', match: '90%', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=400', desc: 'Un equipo de periodistas viaja a través de EE. UU. durante una guerra civil que se intensifica rápidamente.' },
    { id: 12, title: 'Kingdom of the Apes', genre: 'Sci-Fi / Acción', year: '2024', age: '13+', duration: '2h 25m', match: '87%', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400', desc: 'Muchos años después del reinado de César, un joven simio emprende un viaje que lo llevará a cuestionar todo.' },
    { id: 13, title: 'The Sympathizer', genre: 'Drama / Espionaje', year: '2024', age: '16+', duration: '1 Temporada', match: '85%', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=400', desc: 'Un espía comunista franco-vietnamita durante los últimos días de la Guerra de Vietnam y su exilio en EE. UU.' }
  ]
};

// INICIALIZACIÓN DE LA APLICACIÓN
document.addEventListener('DOMContentLoaded', () => {
  renderCarousel('carousel-tendencias', mediaData.tendencias);
  renderCarousel('carousel-populares', mediaData.populares);
  renderCarousel('carousel-scifi', mediaData.scifi);

  setupScrollButtons();
  setupNavbarScroll();
  setupSearch();
  setupModalEvents();
});

// POBLAR CARROUSELES DINÁMICAMENTE
function renderCarousel(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="card" onclick="openModal('${item.title}', '${item.genre}', '${item.year}', '${item.age}', '${item.duration}', '${escapeHtml(item.desc)}', '${item.img}', '${item.match}')">
      <div class="card-img-wrapper">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="card-info">
        <div class="card-title">${item.title}</div>
        <div class="card-details">
          <span class="card-match">${item.match}</span>
          <span class="card-badge">${item.age}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// CONTROL DE DESPLAZAMIENTO HORIZONTAL
function setupScrollButtons() {
  document.querySelectorAll('.row-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.media-carousel');
    const btnLeft = wrapper.querySelector('.scroll-left');
    const btnRight = wrapper.querySelector('.scroll-right');

    if (btnLeft && carousel) {
      btnLeft.addEventListener('click', () => {
        carousel.scrollBy({ left: -400, behavior: 'smooth' });
      });
    }

    if (btnRight && carousel) {
      btnRight.addEventListener('click', () => {
        carousel.scrollBy({ left: 400, behavior: 'smooth' });
      });
    }
  });
}

// CAMBIO DE FONDO EN NAVEGACIÓN
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// BÚSQUEDA DE PELÍCULAS Y SERIES
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    
    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(term)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// CONTROL DEL MODAL
function openModal(title, genre, year, age, duration, desc, img, match = '95%') {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalGenre').textContent = genre;
  document.getElementById('modalYear').textContent = year;
  document.getElementById('modalAge').textContent = age;
  document.getElementById('modalDuration').textContent = duration;
  document.getElementById('modalDescription').textContent = desc;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalMatch').textContent = `${match} de coincidencia`;

  const modal = document.getElementById('mediaModal');
  modal.classList.add('active');
}

function setupModalEvents() {
  const modal = document.getElementById('mediaModal');
  const closeBtn = document.getElementById('closeModal');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'");
}
