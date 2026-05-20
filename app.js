// Base de datos de prueba local con repuestos reales y ubicaciones exactas
const inventario = [
    {
        id: 1,
        marca: "JAC",
        modelo: "Tepui / Sunray",
        pieza: "Pastillas de freno delanteras",
        precio: 25.00,
        tienda: "China Car - Plaza Venezuela",
        direccion: "Av. Intercomunal, Sede Central China Car, Caracas",
        whatsapp: "584243498330"
    },
    {
        id: 2,
        marca: "JAC",
        modelo: "S3 / Gallop",
        pieza: "Filtro de aceite",
        precio: 8.50,
        tienda: "China Car - San Martín",
        direccion: "Av. San Martín, diagonal al Bloque de Armas, Caracas",
        whatsapp: "584243498330"
    },
    {
        id: 3,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Filtro de aceite",
        precio: 10.00,
        tienda: "Concesionario Oficial Changan Caracas",
        direccion: "Av. Francisco de Miranda, Los Palos Grandes, Chacao",
        whatsapp: "584120000000"
    },
    {
        id: 4,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Pastillas de freno delanteras",
        precio: 35.00,
        tienda: "Concesionario Oficial Changan Caracas",
        direccion: "Av. Francisco de Miranda, Los Palos Grandes, Chacao",
        whatsapp: "584120000000"
    }
];

// Elementos de la interfaz web
const marcaSelect = document.getElementById('marcaSelect');
const buscarInput = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');

// Función principal del buscador
function ejecutarBusqueda() {
    const marcaSeleccionada = marcaSelect.value;
    const textoBusqueda = buscarInput.value.toLowerCase().trim();

    if (!marcaSeleccionada) {
        listaResultados.innerHTML = `<p class="placeholder-text" style="color: #ef4444;">Por favor, selecciona una marca de carro.</p>`;
        return;
    }

    // Filtrar en el inventario local
    const resultados = inventario.filter(item => {
        const coincideMarca = item.marca === marcaSeleccionada;
        const coincidePieza = item.pieza.toLowerCase().includes(textoBusqueda);
        return coincideMarca && coincidePieza;
    });

    // Mostrar los resultados en pantalla
    renderizarResultados(resultados);
}

// Función para pintar las tarjetas en el HTML
function renderizarResultados(lista) {
    listaResultados.innerHTML = ""; // Limpiar pantalla

    if (lista.length === 0) {
        listaResultados.innerHTML = `<p class="placeholder-text">No encontramos esa pieza exacta en las sucursales registradas. Intenta con otra palabra.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-repuesto';
        
        // Creamos el mensaje de WhatsApp automático para el cliente
        const mensajeWhatsapp = encodeURIComponent(`Hola, vi en RepuestosXExpress que tienen disponible: ${item.pieza} para ${item.marca} ${item.modelo}. ¿Tienen stock disponible hoy?`);

        card.innerHTML = `
            <div class="card-header">
                <h4>${item.pieza}</h4>
                <span class="precio">$${item.precio.toFixed(2)}</span>
            </div>
            <div class="tienda-info">
                <p><strong>Aplica para:</strong> ${item.marca} ${item.modelo}</p>
                <p><strong>Disponible en:</strong> ${item.tienda}</p>
                <p style="color: #94a3b8; font-size: 0.85rem;"><strong>Ubicación:</strong> ${item.direccion}</p>
            </div>
            <a href="https://wa.me/${item.whatsapp}?text=${mensajeWhatsapp}" target="_blank" class="btn-contacto">
                📱 Contactar Tienda / Ir a Buscar
            </a>
        `;
        listaResultados.appendChild(card);
    });
}

// Escuchar los clics del botón
btnBuscar.addEventListener('click', ejecutarBusqueda);

// También buscar si el usuario presiona "Enter" en el teclado
buscarInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ejecutarBusqueda();
    }
});