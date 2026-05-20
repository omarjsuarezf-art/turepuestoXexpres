// Base de datos de prueba local con repuestos reales, modernos y ubicaciones protegidas
const inventario = [
    // ==================== MARCA: JAC ====================
    {
        id: 1,
        marca: "JAC",
        modelo: "Tepui / Sunray",
        pieza: "Pastillas de freno delanteras",
        precio: 25.00,
        zona: "Plaza Venezuela"
    },
    {
        id: 2,
        marca: "JAC",
        modelo: "S3 / Gallop",
        pieza: "Filtro de aceite",
        precio: 8.50,
        zona: "San Martín"
    },
    {
        id: 3,
        marca: "JAC",
        modelo: "T6 / T8 / T9",
        pieza: "Filtro de aire acondicionado",
        precio: 15.00,
        zona: "Quinta Crespo"
    },
    {
        id: 4,
        marca: "JAC",
        modelo: "S2 / S3",
        pieza: "Amortiguadores delanteros (Par)",
        precio: 85.00,
        zona: "Los Chaguaramos"
    },

    // ==================== MARCA: CHANGAN ====================
    {
        id: 5,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Filtro de aceite",
        precio: 10.00,
        zona: "Chacao"
    },
    {
        id: 6,
        marca: "Changan",
        modelo: "Alsvin",
        pieza: "Pastillas de freno delanteras",
        precio: 35.00,
        zona: "Chacao"
    },
    {
        id: 7,
        marca: "Changan",
        modelo: "CS35 Plus / CS55",
        pieza: "Bujías de iridio (Set de 4)",
        precio: 40.00,
        zona: "El Cementerio"
    },
    {
        id: 8,
        marca: "Changan",
        modelo: "Hunter",
        pieza: "Correa de tiempo",
        precio: 45.00,
        zona: "Chacao"
    },

    // ==================== MARCA: CHERY ====================
    {
        id: 9,
        marca: "Chery",
        modelo: "Arauca / Orinoco",
        pieza: "Pastillas de freno delanteras",
        precio: 18.00,
        zona: "San Martín"
    },
    {
        id: 10,
        marca: "Chery",
        modelo: "Tiggo 2 / Tiggo 4 / Tiggo 7",
        pieza: "Filtro de gasolina",
        precio: 7.00,
        zona: "Quinta Crespo"
    },
    {
        id: 11,
        marca: "Chery",
        modelo: "Orinoco",
        pieza: "Kit de tiempo (Correa y tensor)",
        precio: 55.00,
        zona: "Bello Monte"
    },
    {
        id: 12,
        marca: "Chery",
        modelo: "Grand Tiger",
        pieza: "Kit de Cloche / Embrague",
        precio: 130.00,
        zona: "Boleíta Sur"
    },

    // ==================== MARCA: SAIPA ====================
    {
        id: 13,
        marca: "Saipa",
        modelo: "Turpial",
        pieza: "Pastillas de freno delanteras",
        precio: 15.00,
        zona: "Los Chaguaramos"
    },
    {
        id: 14,
        marca: "Saipa",
        modelo: "Saina / Turpial",
        pieza: "Filtro de aceite",
        precio: 6.00,
        zona: "Boleíta Norte"
    },
    {
        id: 15,
        marca: "Saipa",
        modelo: "Turpial",
        pieza: "Amortiguadores traseros (Par)",
        precio: 50.00,
        zona: "San Martín"
    },
    {
        id: 16,
        marca: "Saipa",
        modelo: "Saina",
        pieza: "Bomba de agua",
        precio: 35.00,
        zona: "Quinta Crespo"
    },

    // ==================== MARCA: DONGFENG ====================
    {
        id: 17,
        marca: "Dongfeng",
        modelo: "Rich 6 / DF6",
        pieza: "Pastillas de freno delanteras",
        precio: 30.00,
        zona: "Boleíta Norte"
    },
    {
        id: 18,
        marca: "Dongfeng",
        modelo: "T5 EVO / SX5",
        pieza: "Filtro de aceite",
        precio: 12.00,
        zona: "Los Chaguaramos"
    },
    {
        id: 19,
        marca: "Dongfeng",
        modelo: "S30",
        pieza: "Amortiguadores traseros (Par)",
        precio: 75.00,
        zona: "San Martín"
    },
    {
        id: 20,
        marca: "Dongfeng",
        modelo: "Joyear X5 / T5",
        pieza: "Bomba de agua",
        precio: 48.00,
        zona: "Quinta Crespo"
    },

    // ==================== MARCA: GAC MOTOR ====================
    {
        id: 21,
        marca: "GAC",
        modelo: "GS3 / GS4",
        pieza: "Pastillas de freno delanteras",
        precio: 40.00,
        zona: "Las Mercedes"
    },
    {
        id: 22,
        marca: "GAC",
        modelo: "GS3 / GS4 / GS8",
        pieza: "Filtro de aceite",
        precio: 15.00,
        zona: "Chacao"
    },
    {
        id: 23,
        marca: "GAC",
        modelo: "GS4 Pro",
        pieza: "Filtro de aire de motor",
        precio: 22.00,
        zona: "Boleíta Sur"
    },
    {
        id: 24,
        marca: "GAC",
        modelo: "GS3 Emzoom",
        pieza: "Bujías de iridio (Set de 4)",
        precio: 50.00,
        zona: "Las Mercedes"
    }
];

// Tu número de WhatsApp correcto configurado directamente
const TU_WHATSAPP = "584243498330"; 

// Elementos de la interfaz web
const marcaSelect = document.getElementById('marcaSelect');
const buscarInput = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');

// Función principal del buscador inteligente
function ejecutarBusqueda() {
    const marcaSeleccionada = marcaSelect.value;
    let textoBusqueda = buscarInput.value.toLowerCase().trim();

    if (!marcaSeleccionada) {
        listaResultados.innerHTML = `<p class="placeholder-text" style="color: #ef4444;">Por favor, selecciona una marca de carro.</p>`;
        return;
    }

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

    const resultados = inventario.filter(item => {
        const coincideMarca = item.marca === marcaSeleccionada;
        return coincideMarca && item.pieza.toLowerCase().includes(textoBusqueda);
    });

    renderizarResultados(resultados);
}

// Función para pintar las tarjetas con la versión amigable (Oculta zona y destaca el servicio)
function renderizarResultados(lista) {
    listaResultados.innerHTML = ""; 

    if (lista.length === 0) {
        listaResultados.innerHTML = `<p class="placeholder-text">No encontramos esa pieza exacta en las sucursales registradas. Intenta con otra palabra.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-repuesto';
        
        // Mensaje automatizado impecable para cerrar la venta por WhatsApp
        const mensajeWhatsapp = encodeURIComponent(`Hola RepuestosXExpress! Vi en la página que tienen disponible: ${item.pieza} para ${item.marca} ${item.modelo} ($${item.precio.toFixed(2)}). Deseo coordinar la compra, recibir la dirección exacta de retiro o consultar opciones de delivery. (Ref: #${item.id})`);

        card.innerHTML = `
            <div class="card-header">
                <h4>${item.pieza}</h4>
                <span class="precio">$${item.precio.toFixed(2)}</span>
            </div>
            <div class="tienda-info">
                <p><strong>Aplica para:</strong> ${item.marca} ${item.modelo}</p>
                <p><strong>Disponibilidad:</strong> En Stock (Verificado)</p>
                <p style="color: #38bdf8; font-weight: bold; margin-top: 8px;"><strong>Ubicación:</strong> 📦 Disponible para Delivery o Retiro Coordinado</p>
            </div>
            <a href="https://wa.me/${TU_WHATSAPP}?text=${mensajeWhatsapp}" target="_blank" class="btn-contacto" style="background-color: #22c55e; color: #ffffff; font-weight: bold; display: block; text-align: center; text-decoration: none; padding: 10px; border-radius: 6px; margin-top: 15px;">
                🟢 Solicitar Ubicación de Retiro / Comprar
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