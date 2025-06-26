// Interactividad del formulario de contacto
const contactForm = document.getElementById('contactForm');
const contactoExito = document.getElementById('contacto-exito');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactoExito.classList.remove('d-none');
    contactForm.reset();
    setTimeout(() => contactoExito.classList.add('d-none'), 3000);
  });
}

// Galería de portafolio (puedes personalizar los proyectos)
const proyectos = [
  {
    titulo: 'Landing Page Creativa',
    descripcion: 'Sitio web moderno y responsivo para una marca personal.',
    imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    titulo: 'E-commerce Minimalista',
    descripcion: 'Tienda online elegante y fácil de usar.',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    titulo: 'Dashboard Interactivo',
    descripcion: 'Panel de control con visualizaciones y estadísticas.',
    imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];

const gallery = document.getElementById('portfolio-gallery');
if (gallery) {
  proyectos.forEach(proyecto => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${proyecto.titulo}</h5>
          <p class="card-text">${proyecto.descripcion}</p>
          <a href="${proyecto.link}" class="btn btn-outline-primary" target="_blank">Ver proyecto</a>
        </div>
      </div>
    `;
    gallery.appendChild(col);
  });
}

// Experiencia (timeline)
const experiencias = [
  {
    puesto: 'Desarrolladora Web Freelance',
    empresa: 'Proyectos Independientes',
    periodo: '2021 - Actualidad',
    descripcion: 'Desarrollo de sitios web modernos, responsivos y optimizados para clientes de diferentes sectores.'
  },
  {
    puesto: 'Diseñadora UI/UX',
    empresa: 'Agencia Creativa XYZ',
    periodo: '2019 - 2021',
    descripcion: 'Diseño de interfaces atractivas y experiencia de usuario para aplicaciones web y móviles.'
  },
  {
    puesto: 'Practicante de Desarrollo Frontend',
    empresa: 'Tech Solutions',
    periodo: '2018 - 2019',
    descripcion: 'Colaboración en el desarrollo de componentes y páginas web usando HTML, CSS y JavaScript.'
  }
];

const timeline = document.querySelector('.timeline');
if (timeline) {
  experiencias.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <h5>${exp.puesto} <span class="text-muted fs-6">@ ${exp.empresa}</span></h5>
      <small class="text-primary">${exp.periodo}</small>
      <p>${exp.descripcion}</p>
    `;
    timeline.appendChild(item);
  });
}

// Slider dinámico del header
const slides = document.querySelectorAll('.header-slider .slide');
let currentSlide = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// Agregar modal de información personal al body
const personalModalHTML = `
<div class="modal fade" id="personalInfoModal" tabindex="-1" aria-labelledby="personalInfoModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content personal-card">
      <div class="row g-0 align-items-center">
        <div class="col-md-4 text-center bg-dark text-white py-4 rounded-start">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Marianys Jiménez" class="img-fluid rounded-circle mb-2" style="width: 80px; height: 80px; object-fit: cover;">
          <h5 class="mb-0">Marianys Jiménez</h5>
          <small>Caracas, Venezuela</small>
        </div>
        <div class="col-md-8 p-3">
          <div class="card-body">
            <h6 class="card-title mb-1">Desarrolladora Web Frontend &amp; UI/UX</h6>
            <p class="card-text mb-2">Apasionada por crear experiencias digitales elegantes, funcionales y creativas. Especialista en diseño y desarrollo web moderno.</p>
            <a href="cv-marianys-jimenez.pdf" class="btn btn-outline-primary btn-sm rounded-pill" target="_blank">Ver mi CV</a>
            <button type="button" class="btn btn-link text-danger d-block mt-2" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', personalModalHTML);

// Modificar los botones 'Ver proyecto' para mostrar el modal de información personal
if (gallery) {
  const showPersonalInfo = (e) => {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('personalInfoModal'));
    modal.show();
  };
  // Esperar a que los botones existan en el DOM
  setTimeout(() => {
    const verBtns = gallery.querySelectorAll('.btn-outline-primary');
    verBtns.forEach(btn => {
      btn.removeAttribute('target');
      btn.addEventListener('click', showPersonalInfo);
    });
  }, 100);
} 