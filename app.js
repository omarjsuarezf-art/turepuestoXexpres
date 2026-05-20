// Base de datos de prueba local con repuestos reales y ubicaciones exactas
const inventario = [
    // ==================== MARCA: JAC ====================
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
        marca: "JAC",
        modelo: "T6 / T8",
        pieza: "Filtro de aire acondicionado",
        precio: 15.00,
        tienda: "Frenos y Filtros Quinta Crespo",
        direccion: "Av. Baralt, cruce con Calle Este 12, Quinta Crespo, Caracas",
        whatsapp: "584125556677"
    },
    {
        id: 4,
        marca: "JAC",
        modelo: "S2 / S3",
        pieza: "Amortiguadores delanteros (Par)",
        precio: 85.00,
        tienda: "Repuestos MultiChina Los Chaguaramos",
        direccion: "Av. Neverí, frente al Centro Comercial Chaguaramos, Caracas",
        whatsapp: "584249998877"
    },

    // ==================== MARCA: CHANGAN ====================
    {
        id: 5,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Filtro de aceite",
        precio: 10.00,
        tienda: "Concesionario Oficial Changan Caracas",
        direccion: "Av. Francisco de Miranda, Los Palos Grandes, Chacao",
        whatsapp: "584120000000"
    },
    {
        id: 6,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Pastillas de freno delanteras",
        precio: 35.00,
        tienda: "Concesionario Oficial Changan Caracas",
        direccion: "Av. Francisco de Miranda, Los Palos Grandes, Chacao",
        whatsapp: "584120000000"
    },
    {
        id: 7,
        marca: "Changan",
        modelo: "CS35 Plus",
        pieza: "Bujías de iridio (Set de 4)",
        precio: 40.00,
        tienda: "Todo Changan El Cementerio",
        direccion: "Av. Principal de El Cementerio, a media cuadra del mercado, Caracas",
        whatsapp: "584163332211"
    },
    {
        id: 8,
        marca: "Changan",
        modelo: "Hunter",
        pieza: "Correa de tiempo",
        precio: 45.00,
        tienda: "Repuestos Express Oriente",
        direccion: "Av. Libertador, Local 14, Chacao, Caracas",
        whatsapp: "584241112233"
    },

    // ==================== MARCA: CHERY ====================
    {
        id: 9,
        marca: "Chery",
        modelo: "Arauca / Orinoco",
        pieza: "Pastillas de freno delanteras",
        precio: 18.00,
        tienda: "El Palacio del Chery - San Martín",
        direccion: "Av. San Martín, cruce con Calle Angelitos, Caracas",
        whatsapp: "584127778899"
    },
    {
        id: 10,
        marca: "Chery",
        modelo: "Tiggo 2 / Tiggo 3",
        pieza: "Filtro de gasolina",
        precio: 7.00,
        tienda: "Chery Total Quinta Crespo",
        direccion: "Av. Baralt, Edif. Centro Baralt, Local B, Caracas",
        whatsapp: "584244445566"
    },
    {
        id: 11,
        marca: "Chery",
        modelo: "Orinoco",
        pieza: "Kit de tiempo (Correa y tensor)",
        precio: 55.00,
        tienda: "Distribuidora Chery Caracas",
        direccion: "Av. Principal de Bello Monte, Edif. Don Omar, Caracas",
        whatsapp: "584142223344"
    },
    {
        id: 12,
        marca: "Chery",
        modelo: "Grand Tiger",
        pieza: "Kit de Cloche / Embrague",
        precio: 130.00,
        tienda: "EuroChina Repuestos Boleíta",
        direccion: "Av. Principal de Boleíta Sur, Local 8, Caracas",
        whatsapp: "584168889900"
    },

    // ==================== MARCA: SAIPA ====================
    {
        id: 13,
        marca: "Saipa",
        modelo: "Turpial",
        pieza: "Pastillas de freno delanteras",
        precio: 15.00,
        tienda: "Repuestos Saipa El Triunfo",
        direccion: "Av. Facilidad, Edif. Centro Automotriz, Los Chaguaramos, Caracas",
        whatsapp: "584241115566"
    },
    {
        id: 14,
        marca: "Saipa",
        modelo: "Saina / Turpial",
        pieza: "Filtro de aceite",
        precio: 6.00,
        tienda: "Todo Saipa Boleíta",
        direccion: "Calle San Ernesto, Edif. Industrial, Boleíta Norte, Caracas",
        whatsapp: "584129990011"
    },
    {
        id: 15,
        marca: "Saipa",
        modelo: "Turpial",
        pieza: "Amortiguadores traseros (Par)",
        precio: 50.00,
        tienda: "Repuestera La 10 San Martín",
        direccion: "Av. San Martín, frente a la estación de servicio, Caracas",
        whatsapp: "584147776655"
    },
    {
        id: 16,
        marca: "Saipa",
        modelo: "Saina",
        pieza: "Bomba de agua",
        precio: 35.00,
        tienda: "Gran Imperio Iraní Quinta Crespo",
        direccion: "Av. Baralt, detrás del Mercado de Quinta Crespo, Caracas",
        whatsapp: "584248881122"
    }
];

// Elementos de la interfaz web
const marcaSelect = document.getElementById('marcaSelect');
const buscarInput = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');

// Función principal del buscador inteligente (soporta plurales básicos)
function ejecutarBusqueda() {
    const marcaSeleccionada = marcaSelect.value;
    let textoBusqueda = buscarInput.value.toLowerCase().trim();

    if (!marcaSeleccionada) {
        listaResultados.innerHTML = `<p class="placeholder-text" style="color: #ef4444;">Por favor, selecciona una marca de carro.</p>`;
        return;
    }

    // Truco: Si el usuario busca con "s" al final (ej. "frenos" o "pastillas"), busca también quitándole la S
    if (textoBusqueda.endsWith('s') && textoBusqueda.length > 4) {
        const sinS = textoBusqueda.slice(0, -1);
        
        const resultados = inventario.filter(item => {
            const coincideMarca = item.marca === marcaSeleccionada;
            const nombrePieza = item.pieza.toLowerCase();
            return coincideMarca && (nombrePieza.includes(textoBusqueda) || nombrePieza.includes(sinS));
        });
        
        renderizarResultados(resultados);
        return;
    }

    // Busqueda normal si no termina en S o si es una palabra muy corta
    const resultados = inventario.filter(item => {
        const coincideMarca = item.marca === marcaSeleccionada;
        return coincideMarca && item.pieza.toLowerCase().includes(textoBusqueda);
    });

    renderizarResultados(resultados);
}

// Función para pintar las tarjetas en el HTML
function renderizarResultados(lista) {
    listaResultados.innerHTML = ""; 

    if (lista.length === 0) {
        listaResultados.innerHTML = `<p class="placeholder-text">No encontramos esa pieza exacta en las sucursales registradas. Intenta con otra palabra.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-repuesto';
        
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

btnBuscar.addEventListener('click', ejecutarBusqueda);
buscarInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ejecutarBusqueda();
    }
});