// Protected-mode selector decoder.
const NOMBRES_PRIVILEGIO = [
  "Kernel (Ring 0)",
  "Sistema (Ring 1)",
  "Sistema extendido (Ring 2)",
  "Aplicación (Ring 3)",
];

function decodificarSelector(selector) {
  document.getElementById("resultado-protegido")?.replaceChildren();
  if (!String(selector ?? "").trim()) {
    mostrarError("Ingresa un selector hexadecimal de 16 bits.");
    return;
  }

  try {
    const selectorHex = normalizarHexadecimal(selector);
    if (selectorHex.length > 4) {
      throw new RangeError("El selector debe tener como máximo 16 bits (4 dígitos hex).");
    }

    const value = Number.parseInt(selectorHex, 16);
    const index = value >>> 3;
    const ti = (value >>> 2) & 1;
    const rpl = value & 0b11;
    const binary = value.toString(2).padStart(16, "0");
    const isNull = value === 0;
    const table = ti === 0 ? "GDT (Global Descriptor Table)" : "LDT (Local Descriptor Table)";
    const mockDescriptor = {
      base: "0x00400000",
      limit: "0xFFFFFFFF",
    };

    limpiarMensajes();
    mostrarResultadoSelector({
      selector: formatearHex(selectorHex),
      binario: binary,
      indice: index,
      ti,
      tabla: table,
      rpl,
      privilegio: NOMBRES_PRIVILEGIO[rpl],
      esNulo: isNull,
      mockDescriptor,
    });
  } catch (error) {
    mostrarError(error.message);
  }
}

function limpiarFormularioProtegido() {
  const input = document.getElementById("input-selector");
  const result = document.getElementById("resultado-protegido");
  if (input) input.value = "";
  if (result) result.replaceChildren();
  limpiarMensajes();
}

function mostrarResultadoSelector(datos) {
  const result = document.getElementById("resultado-protegido");
  if (!result) {
    throw new Error("No se encontró el contenedor de resultados del selector.");
  }

  const descriptorDetails = `
      <div class="p-3 bg-primary-fixed rounded sm:col-span-2">
        <span class="font-label-sm text-primary font-bold">Descriptor genérico de demostración</span>
        <p class="font-code-sm text-on-surface-variant">
          Base ${datos.mockDescriptor.base} · Límite ${datos.mockDescriptor.limit}
        </p>
        <p class="font-body-sm text-on-surface-variant mt-2">
          Estos valores ilustran un descriptor, pero no pertenecen necesariamente al selector ingresado. El selector solo indica una entrada de la GDT/LDT; esta página no consulta las tablas reales del sistema. ${datos.esNulo ? "Además, el selector nulo no referencia ningún descriptor." : ""}
        </p>
      </div>`

  result.innerHTML = `
    <article class="card elevation-1" role="status" aria-live="polite">
      <h4 class="font-headline-sm mb-4">Decodificación de Selector</h4>
      <div class="mb-4 p-4 bg-surface-container rounded">
        <span class="font-label-sm text-on-surface-variant mb-2 block">Representación binaria (16 bits)</span>
        <p class="font-code-md break-all text-on-surface">
          ${datos.binario.slice(0, 13)} | ${datos.binario.slice(13, 14)} | ${datos.binario.slice(14)}
        </p>
        <div class="font-label-sm text-on-surface-variant mt-2 flex justify-between gap-2">
          <span>Índice (13 bits)</span><span>TI</span><span>RPL (2 bits)</span>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3 bg-primary-fixed rounded">
          <span class="font-label-sm text-primary font-bold">Selector</span>
          <p class="font-code-lg text-primary">${datos.selector}</p>
        </div>
        <div class="p-3 bg-secondary-fixed rounded">
          <span class="font-label-sm text-secondary font-bold">Índice (bits 15:3)</span>
          <p class="font-code-lg text-secondary">${datos.indice}</p>
          <span class="font-body-sm text-on-surface-variant">Desplazamiento en tabla: ${datos.indice * 8} bytes</span>
        </div>
        <div class="p-3 bg-tertiary-fixed rounded">
          <span class="font-label-sm text-tertiary font-bold">Indicador de tabla (TI = ${datos.ti})</span>
          <p class="font-body-sm text-tertiary">${datos.tabla}</p>
        </div>
        <div class="p-3 bg-error-container rounded">
          <span class="font-label-sm text-error font-bold">Privilegio solicitado (RPL = ${datos.rpl})</span>
          <p class="font-body-sm text-error">${datos.privilegio}</p>
        </div>
        ${descriptorDetails}
      </div>
    </article>
  `;
}
