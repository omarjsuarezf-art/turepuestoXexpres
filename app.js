// Base de datos EXPANDIDA con repuestos reales y variados por modelo
const inventario = [
    // ==================== MARCA: JAC ====================
    { id: 1, marca: "JAC", modelo: "Tepui / Sunray", pieza: "Pastillas de freno delanteras", precio: 25.00, zona: "Plaza Venezuela" },
    { id: 2, marca: "JAC", modelo: "S3 / Gallop", pieza: "Filtro de aceite", precio: 8.50, zona: "San Martín" },
    { id: 3, marca: "JAC", modelo: "T6 / T8 / T9", pieza: "Filtro de aire acondicionado", precio: 15.00, zona: "Quinta Crespo" },
    { id: 4, marca: "JAC", modelo: "S2 / S3", pieza: "Amortiguadores delanteras (Par)", precio: 85.00, zona: "Los Chaguaramos" },
    { id: 5, marca: "JAC", modelo: "T6 / T8", pieza: "Pastillas de freno delanteras", precio: 38.00, zona: "Boleíta" },
    { id: 6, marca: "JAC", modelo: "S2", pieza: "Filtro de aire de motor", precio: 12.00, zona: "San Martín" },
    { id: 7, marca: "JAC", modelo: "Sunray", pieza: "Filtro de gasoil / combustible", precio: 22.00, zona: "Plaza Venezuela" },
    { id: 8, marca: "JAC", modelo: "S3", pieza: "Kit de tiempo (Correa y tensor)", precio: 65.00, zona: "Quinta Crespo" },
    { id: 9, marca: "JAC", modelo: "T6 / T8", pieza: "Kit de Cloche / Embrague completo", precio: 180.00, zona: "Chacao" },
    { id: 10, marca: "JAC", modelo: "S2 / S3", pieza: "Bomba de agua", precio: 45.00, zona: "Los Chaguaramos" },

    // ==================== MARCA: CHANGAN ====================
    { id: 11, marca: "Changan", modelo: "Alsvin", pieza: "Filtro de aceite", precio: 10.00, zona: "Chacao" },
    { id: 12, marca: "Changan", modelo: "Alsvin", pieza: "Pastillas de freno delanteras", precio: 35.00, zona: "Chacao" },
    { id: 13, marca: "Changan", modelo: "CS35 Plus / CS55", pieza: "Bujías de iridio (Set de 4)", precio: 40.00, zona: "El Cementerio" },
    { id: 14, marca: "Changan", modelo: "Hunter", pieza: "Correa de tiempo", precio: 45.00, zona: "Chacao" },
    { id: 15, marca: "Changan", modelo: "Alsvin", pieza: "Filtro de aire de motor", precio: 14.00, zona: "Boleíta" },
    { id: 16, marca: "Changan", modelo: "CS35", pieza: "Amortiguadores delanteros (Par)", precio: 95.00, zona: "El Cementerio" },
    { id: 17, marca: "Changan", modelo: "Alsvin", pieza: "Amortiguadores traseros (Par)", precio: 70.00, zona: "Chacao" },
    { id: 18, marca: "Changan", modelo: "Hunter", pieza: "Pastillas de freno delanteras", precio: 45.00, zona: "San Martín" },
    { id: 19, marca: "Changan", modelo: "Alsvin", pieza: "Bomba de agua", precio: 48.00, zona: "Quinta Crespo" },
    { id: 20, marca: "Changan", modelo: "CS15 / CS35", pieza: "Kit de pastillas de freno traseras", precio: 28.00, zona: "Los Chaguaramos" },

    // ==================== MARCA: CHERY ====================
    { id: 21, marca: "Chery", modelo: "Arauca / Orinoco", pieza: "Pastillas de freno delanteras", precio: 18.00, zona: "San Martín" },
    { id: 22, marca: "Chery", modelo: "Tiggo 2 / Tiggo 4 / Tiggo 7", pieza: "Filtro de gasolina", precio: 7.00, zona: "Quinta Crespo" },
    { id: 23, marca: "Chery", modelo: "Orinoco", pieza: "Kit de tiempo (Correa y tensor)", precio: 55.00, zona: "Bello Monte" },
    { id: 24, marca: "Chery", modelo: "Grand Tiger", pieza: "Kit de Cloche / Embrague", precio: 130.00, zona: "Boleíta Sur" },
    { id: 25, marca: "Chery", modelo: "Arauca", pieza: "Filtro de aceite", precio: 5.00, zona: "San Martín" },
    { id: 26, marca: "Chery", modelo: "Tiggo 2 / Tiggo 3", pieza: "Pastillas de freno delanteras", precio: 25.00, zona: "Quinta Crespo" },
    { id: 27, marca: "Chery", modelo: "QQ / QQ3", pieza: "Kit de tiempo completo", precio: 35.00, zona: "Bello Monte" },
    { id: 28, marca: "Chery", modelo: "Arauca", pieza: "Amortiguadores delanteros (Par)", precio: 60.00, zona: "San Martín" },
    { id: 29, marca: "Chery", modelo: "Orinoco", pieza: "Bomba de agua", precio: 38.00, zona: "Bello Monte" },
    { id: 30, marca: "Chery", modelo: "Tiggo 4 / Tiggo 7", pieza: "Bujías de iridio (Set de 4)", precio: 45.00, zona: "Chacao" },

    // ==================== MARCA: SAIPA ====================
    { id: 31, marca: "Saipa", modelo: "Turpial", pieza: "Pastillas de freno delanteras", precio: 15.00, zona: "Los Chaguaramos" },
    { id: 32, marca: "Saipa", modelo: "Saina / Turpial", pieza: "Filtro de aceite", precio: 6.00, zona: "Boleíta Norte" },
    { id: 33, marca: "Saipa", modelo: "Turpial", pieza: "Amortiguadores traseros (Par)", precio: 50.00, zona: "San Martín" },
    { id: 34, marca: "Saipa", modelo: "Saina", pieza: "Bomba de agua", precio: 35.00, zona: "Quinta Crespo" },
    { id: 35, marca: "Saipa", modelo: "Saina", pieza: "Pastillas de freno delanteras", precio: 22.00, zona: "Los Chaguaramos" },
    { id: 36, marca: "Saipa", modelo: "Turpial", pieza: "Kit de tiempo (Correa y tensor)", precio: 30.00, zona: "Boleíta Norte" },
    { id: 37, marca: "Saipa", modelo: "Turpial", pieza: "Bomba de agua", precio: 25.00, zona: "San Martín" },
    { id: 38, marca: "Saipa", modelo: "Saina", pieza: "Filtro de aire de motor", precio: 10.00, zona: "Quinta Crespo" },
    { id: 39, marca: "Saipa", modelo: "Turpial", pieza: "Tripode / Junta homocinética lado rueda", precio: 25.00, zona: "Los Chaguaramos" },
    { id: 40, marca: "Saipa", modelo: "Saina / Quik", pieza: "Kit de embrague / Cloche", precio: 95.00, zona: "Boleíta Norte" },

    // ==================== MARCA: DONGFENG ====================
    { id: 41, marca: "Dongfeng", modelo: "Rich 6 / DF6", pieza: "Pastillas de freno delanteras", precio: 30.00, zona: "Boleíta Norte" },
    { id: 42, marca: "Dongfeng", modelo: "T5 EVO / SX5", pieza: "Filtro de aceite", precio: 12.00, zona: "Los Chaguaramos" },
    { id: 43, marca: "Dongfeng", modelo: "S30", pieza: "Amortiguadores traseros (Par)", precio: 75.00, zona: "San Martín" },
    { id: 44, marca: "Dongfeng", modelo: "Joyear X5 / T5", pieza: "Bomba de agua", precio: 48.00, zona: "Quinta Crespo" },
    { id: 45, marca: "Dongfeng", modelo: "S30 / H30 Cross", pieza: "Pastillas de freno delanteras", precio: 22.00, zona: "San Martín" },
    { id: 46, marca: "Dongfeng", modelo: "S30 / H30 Cross", pieza: "Kit de tiempo (Correa y tensor)", precio: 50.00, zona: "Quinta Crespo" },
    { id: 47, marca: "Dongfeng", modelo: "Rich 6 / DF6", pieza: "Filtro de aire de motor", precio: 20.00, zona: "Boleíta Norte" },
    { id: 48, marca: "Dongfeng", modelo: "T5 EVO", pieza: "Pastillas de freno delanteras", precio: 45.00, zona: "Los Chaguaramos" },
    { id: 49, marca: "Dongfeng", modelo: "S30", pieza: "Bomba de agua", precio: 40.00, zona: "San Martín" },
    { id: 50, marca: "Dongfeng", modelo: "Joyear X5", pieza: "Amortiguadores delanteros (Par)", precio: 110.00, zona: "Quinta Crespo" },

    // ==================== MARCA: GAC MOTOR ====================
    { id: 51, marca: "GAC", modelo: "GS3 / GS4", pieza: "Pastillas de freno delanteras", precio: 40.00, zona: "Las Mercedes" },
    { id: 52, marca: "GAC", modelo: "GS3 / GS4 / GS8", pieza: "Filtro de aceite", precio: 15.00, zona: "Chacao" },
    { id: 53, marca: "GAC", modelo: "GS4 Pro", pieza: "Filtro de aire de motor", precio: 22.00, zona: "Boleíta Sur" },
    { id: 54, marca: "GAC", modelo: "GS3 Emzoom", pieza: "Bujías de iridio (Set de 4)", precio: 50.00, zona: "Las Mercedes" }
];

const TU_WHATSAPP = "584126039718"; 

const marcaSelect = document.getElementById('marcaSelect');
const buscarInput = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');

function ejecutarBusqueda() {
    const marcaSeleccionada = marcaSelect.value;
    let textoBusqueda = buscarInput.value.toLowerCase().trim();

    if (!marcaSeleccionada) {
        listaResultados.innerHTML = `<p class="placeholder-text" style="color: #ef4444;">Por favor, selecciona una marca de carro.</p>`;
        return;
    }

    // Buscador flexible por palabras
    const resultados = inventario.filter(item => {
        const coincideMarca = item.marca === marcaSeleccionada;
        const coincidePieza = item.pieza.toLowerCase().includes(textoBusqueda);
        const coincideModelo = item.modelo.toLowerCase().includes(textoBusqueda);
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

