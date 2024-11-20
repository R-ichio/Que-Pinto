const pantallaInicial = document.getElementById('pantalla-inicial');
const menuPersonajes = document.getElementById('menu-personajes');
const enfrentamiento = document.getElementById('enfrentamiento');

const btnIniciar = document.getElementById('btn-iniciar');
const botonesPersonajes = document.querySelectorAll('.btn-personaje');

function mostrarSeccion(seccion) {
    pantallaInicial.style.display = 'none';
    menuPersonajes.style.display = 'none';
    enfrentamiento.style.display = 'none';
    seccion.style.display = 'flex';
}

btnIniciar.addEventListener('click', () => {
    mostrarSeccion(menuPersonajes);
});

botonesPersonajes.forEach((boton) => {
    boton.addEventListener('click', () => {
        mostrarSeccion(enfrentamiento);
    });
});
