// Real-mode segment:offset address calculator.
function calcularDireccionReal(segmento, desplazamiento) {
  document.getElementById("resultado-real")?.replaceChildren();
  if (!String(segmento ?? "").trim() || !String(desplazamiento ?? "").trim()) {
    mostrarError("Ingresa ambos valores: segmento y desplazamiento.");
    return;
  }

  try {
    const segmentHex = normalizarHexadecimal(segmento);
    const offsetHex = normalizarHexadecimal(desplazamiento);
    if (segmentHex.length > 4 || offsetHex.length > 4) {
      throw new RangeError("Cada valor debe caber en 16 bits (máximo 0xFFFF).");
    }

    const segmentValue = Number.parseInt(segmentHex, 16);
    const offsetValue = Number.parseInt(offsetHex, 16);
    const physicalAddress = (segmentValue << 4) + offsetValue;
    const inRange = physicalAddress <= 0xFFFFF;
    const result = {
      segmento: formatearHex(segmentHex),
      desplazamiento: formatearHex(offsetHex),
      baseSegmento: decimalToHex(segmentValue << 4, 5),
      direccionReal: decimalToHex(physicalAddress, 5),
      decimal: physicalAddress,
      binario: physicalAddress.toString(2).padStart(20, "0"),
      valido: inRange,
    };

    limpiarMensajes();
    mostrarResultadoReal(result);
    if (!inRange) {
      mostrarAdvertencia(
        `La dirección ${result.direccionReal} excede el espacio de 20 bits (0xFFFFF).`,
      );
    }
  } catch (error) {
    mostrarError(error.message);
  }
}

function limpiarFormularioReal() {
  const segment = document.getElementById("input-segmento");
  const offset = document.getElementById("input-desplazamiento");
  const result = document.getElementById("resultado-real");
  if (segment) segment.value = "";
  if (offset) offset.value = "";
  if (result) result.replaceChildren();
  limpiarMensajes();
}

function mostrarResultadoReal(datos) {
  const result = document.getElementById("resultado-real");
  if (!result) {
    throw new Error("No se encontró el contenedor de resultados del modo real.");
  }

  const validityClass = datos.valido ? "text-tertiary" : "text-error";
  const validityText = datos.valido
    ? "Dirección válida dentro del espacio de 20 bits."
    : "La dirección excede el límite de 1 MB (20 bits).";

  result.innerHTML = `
    <article class="card elevation-1" role="status" aria-live="polite">
      <h4 class="font-headline-sm mb-3">Cálculo de Dirección Real</h4>
      <p class="font-code-md text-on-surface-variant mb-4">
        [${datos.segmento} × 16] + ${datos.desplazamiento} =
        <strong class="text-secondary">${datos.direccionReal}</strong>
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3 bg-surface-container rounded">
          <span class="font-label-sm text-on-surface-variant block">Base del segmento</span>
          <p class="font-code-lg text-on-surface">${datos.baseSegmento}</p>
        </div>
        <div class="p-3 bg-surface-container rounded">
          <span class="font-label-sm text-on-surface-variant block">Decimal</span>
          <p class="font-code-lg text-on-surface">${datos.decimal.toLocaleString("es-CO")}</p>
        </div>
        <div class="p-3 bg-surface-container rounded sm:col-span-2">
          <span class="font-label-sm text-on-surface-variant block">Binario (${datos.binario.length} bits)</span>
          <p class="font-code-md break-all text-on-surface">${datos.binario}</p>
        </div>
      </div>
      <p class="mt-3 font-label-md ${validityClass}">${validityText}</p>
    </article>
  `;
}
