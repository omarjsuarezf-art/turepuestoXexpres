// Base de datos definitiva y ultra-variada
const inventario = [
    // ==================== MARCA: JAC ====================
    { id: 1, marca: "JAC", modelo: "Tepui / Sunray", pieza: "Pastillas de freno delanteras", precio: 25.00 },
    { id: 2, marca: "JAC", modelo: "S3 / Gallop", pieza: "Filtro de aceite", precio: 8.50 },
    { id: 3, marca: "JAC", modelo: "T6 / T8 / T9", pieza: "Filtro de aire acondicionado", precio: 15.00 },
    { id: 4, marca: "JAC", modelo: "S2 / S3", pieza: "Amortiguadores delanteras (Par)", precio: 85.00 },
    { id: 5, marca: "JAC", modelo: "T6 / T8", pieza: "Pastillas de freno delanteras", precio: 38.00 },
    { id: 6, marca: "JAC", modelo: "S2", pieza: "Filtro de aire de motor", precio: 12.00 },
    { id: 7, marca: "JAC", modelo: "Sunray", pieza: "Filtro de gasoil / combustible", precio: 22.00 },
    { id: 8, marca: "JAC", modelo: "S3", pieza: "Kit de tiempo (Correa y tensor)", precio: 65.00 },
    { id: 9, marca: "JAC", modelo: "T6 / T8", pieza: "Kit de Cloche / Embrague completo", precio: 180.00 },
    { id: 10, marca: "JAC", modelo: "S2 / S3", pieza: "Bomba de agua", precio: 45.00 },

    // ==================== MARCA: CHANGAN ====================
    { id: 11, marca: "Changan", modelo: "Alsvin", pieza: "Filtro de aceite", precio: 10.00 },
    { id: 12, marca: "Changan", modelo: "Alsvin", pieza: "Pastillas de freno delanteras", precio: 35.00 },
    { id: 13, marca: "Changan", modelo: "CS35 Plus / CS55", pieza: "Bujías de iridio (Set de 4)", precio: 40.00 },
    { id: 14, marca: "Changan", modelo: "Hunter", pieza: "Correa de tiempo", precio: 45.00 },
    { id: 15, marca: "Changan", modelo: "Alsvin", pieza: "Filtro de aire de motor", precio: 14.00 },
    { id: 16, marca: "Changan", modelo: "CS35", pieza: "Amortiguadores delanteros (Par)", precio: 95.00 },
    { id: 17, marca: "Changan", modelo: "Alsvin", pieza: "Amortiguadores traseros (Par)", precio: 70.00 },
    { id: 18, marca: "Changan", modelo: "Hunter", pieza: "Pastillas de freno delanteras", precio: 45.00 },
    { id: 19, marca: "Changan", modelo: "Alsvin", pieza: "Bomba de agua", precio: 48.00 },
    { id: 20, marca: "Changan", modelo: "CS15 / CS35", pieza: "Kit de pastillas de freno traseras", precio: 28.00 },

    // ==================== MARCA: CHERY ====================
    { id: 21, marca: "Chery", modelo: "Arauca / Orinoco", pieza: "Pastillas de freno delanteras", precio: 18.00 },
    { id: 22, marca: "Chery", modelo: "Tiggo 2 / Tiggo 4 / Tiggo 7", pieza: "Filtro de gasolina", precio: 7.00 },
    { id: 23, marca: "Chery", modelo: "Orinoco", pieza: "Kit de tiempo (Correa y tensor)", precio: 55.00 },
    { id: 24, marca: "Chery", modelo: "Grand Tiger", pieza: "Kit de Cloche / Embrague", precio: 130.00 },
    { id: 25, marca: "Chery", modelo: "Arauca", pieza: "Filtro de aceite", precio: 5.00 },
    { id: 26, marca: "Chery", modelo: "Tiggo 2 / Tiggo 3", pieza: "Pastillas de freno delanteras", precio: 25.00 },
    { id: 27, marca: "Chery", modelo: "QQ / QQ3", pieza: "Kit de tiempo completo", precio: 35.00 },
    { id: 28, marca: "Chery", modelo: "Arauca", pieza: "Amortiguadores delanteros (Par)", precio: 60.00 },
    { id: 29, marca: "Chery", modelo: "Orinoco", pieza: "Bomba de agua", precio: 38.00 },
    { id: 30, marca: "Chery", modelo: "Tiggo 4 / Tiggo 7", pieza: "Bujías de iridio (Set de 4)", precio: 45.00 },

    // ==================== MARCA: SAIPA ====================
    { id: 31, marca: "Saipa", modelo: "Turpial", pieza: "Pastillas de freno delanteras", precio: 15.00 },
    { id: 32, marca: "Saipa", modelo: "Saina / Turpial", pieza: "Filtro de aceite", precio: 6.00 },
    { id: 33, marca: "Saipa", modelo: "Turpial", pieza: "Amortiguadores traseros (Par)", precio: 50.00 },
    { id: 34, marca: "Saipa", modelo: "Saina", pieza: "Bomba de agua", precio: 35.00 },
    { id: 35, marca: "Saipa", modelo: "Saina", pieza: "Pastillas de freno delanteras", precio: 22.00 },
    { id: 36, marca: "Saipa", modelo: "Turpial", pieza: "Kit de tiempo (Correa y tensor)", precio: 30.00 },
    { id: 37, marca: "Saipa", modelo: "Turpial", pieza: "Bomba de agua", precio: 25.00 },
    { id: 38, marca: "Saipa", modelo: "Saina", pieza: "Filtro de aire de motor", precio: 10.00 },
    { id: 39, marca: "Saipa", modelo: "Turpial", pieza: "Tripode / Junta homocinética lado rueda", precio: 25.00 },
    { id: 40, marca: "Saipa", modelo: "Saina / Quik", pieza: "Kit de embrague / Cloche", precio: 95.00 },

    // ==================== MARCA: DONGFENG ====================
    { id: 41, marca: "Dongfeng", modelo: "Rich 6 / DF6", pieza: "Pastillas de freno delanteras", precio: 30.00 },
    { id: 42, marca: "Dongfeng", modelo: "T5 EVO / SX5", pieza: "Filtro de aceite", precio: 12.00 },
    { id: 43, marca: "Dongfeng", modelo: "S30", pieza: "Amortiguadores traseros (Par)", precio: 75.00 },
    { id: 44, marca: "Dongfeng", modelo: "Joyear X5 / T5", pieza: "Bomba de agua", precio: 48.00 },
    { id: 45, marca: "Dongfeng", modelo: "S30 / H30 Cross", pieza: "Pastillas de freno delanteras", precio: 22.00 },
    { id: 46, marca: "Dongfeng", modelo: "S30 / H30 Cross", pieza: "Kit de tiempo (Correa y tensor)", precio: 50.00 },
    { id: 47, marca: "Dongfeng", modelo: "Rich 6 / DF6", pieza: "Filtro de aire de motor", precio: 20.00 },
    { id: 48, marca: "Dongfeng", modelo: "T5 EVO", pieza: "Pastillas de freno delanteras", precio: 45.00 },
    { id: 49, marca: "Dongfeng", modelo: "S30", pieza: "Bomba de agua", precio: 40.00 },
    { id: 50, marca: "Dongfeng", modelo: "Joyear X5", pieza: "Amortiguadores delanteros (Par)", precio: 110.00 },

    // ==================== MARCA: GAC MOTOR ====================
    { id: 51, marca: "GAC", modelo: "GS3 / GS4", pieza: "Pastillas de freno delanteras", precio: 40.00 },
    { id: 52, marca: "GAC", modelo: "GS3 / GS4 / GS8", pieza: "Filtro de aceite", precio: 15.00 },
    { id: 53, marca: "GAC", modelo: "GS4 Pro", pieza: "Filtro de aire de motor", precio: 22.00 },
    { id: 54, marca: "GAC", modelo: "GS3 Emzoom", pieza: "Bujías de iridio (Set de 4)", precio: 50.00 }
];

const TU_WHATSAPP = "584126039718"; 

const marcaSelect = document.getElementById('marcaSelect');
const buscarInput = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');

function ejecutarBusqueda() {
    const marcaSeleccionada = marcaSelect.value.toLowerCase().trim();
    let textoBusqueda = buscarInput.value.toLowerCase().trim();

    if (!marcaSeleccionada) {
        listaResultados.innerHTML = `<p class="placeholder-text" style="color: #ef4444;">Por favor, selecciona una marca de carro.</p>`;
        return;
    }

    // Buscador súper potente y simplificado
    const resultados = inventario.filter(item => {
        const coincideMarca = item.marca.toLowerCase().includes(marcaSeleccionada) || marcaSeleccionada.includes(item.marca.toLowerCase());
        
        // Si la barra está vacía, pasa directo todo lo de la marca
        if (!textoBusqueda) {
            return coincideMarca;
        }

        // Cortamos las S finales por si escriben en plural (ej: frenos -> freno)
        let busquedaLimpia = textoBusqueda;
        if (busquedaLimpia.endsWith('s') && busquedaLimpia.length > 3) {
            busquedaLimpia = busquedaLimpia.slice(0, -1);
        }

        const coincidePieza = item.pieza.toLowerCase().includes(busquedaLimpia);
        const coincideModelo = item.modelo.toLowerCase().includes(busquedaLimpia);
        
        return coincideMarca && (coincidePieza || coincideModelo);
    });

    renderizarResultados(resultados);
}

function renderizarResultados(lista) {
    listaResultados.innerHTML = ""; 

    if (lista.length === 0) {
        listaResultados.innerHTML = `<p class="placeholder-text">No encontramos esa pieza exacta. Intenta con otra palabra (ej: pastillas, filtro, bomba, kit).</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-repuesto';
        
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
            <a href="https://wa.me/${TU_WHATSAPP}?text=${mensajeWhatsapp}" target="_blank" class="btn-contacto">
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
