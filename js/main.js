// Shared utilities, page initialization, tabs, and user feedback.
function normalizarHexadecimal(value) {
  const cleaned = String(value ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/^0x/i, "")
    .replace(/h$/i, "");

  if (!/^[0-9a-f]+$/i.test(cleaned)) {
    throw new Error("Ingresa un valor hexadecimal válido (0-9, A-F).");
  }

  return cleaned.toUpperCase();
}

function hexToDecimal(hex) {
  const normalized = normalizarHexadecimal(hex);
  const value = Number.parseInt(normalized, 16);

  if (!Number.isSafeInteger(value)) {
    throw new Error("El valor hexadecimal es demasiado grande.");
  }

  return value;
}

function decimalToHex(decimal, minLength = 4) {
  if (!Number.isSafeInteger(decimal) || decimal < 0) {
    throw new TypeError("El valor debe ser un entero no negativo.");
  }

  return `0x${decimal.toString(16).toUpperCase().padStart(minLength, "0")}`;
}

function esHexadecimalValido(value) {
  try {
    normalizarHexadecimal(value);
    return true;
  } catch {
    return false;
  }
}

function formatearHex(value, minLength = 4) {
  if (String(value ?? "").trim() === "") {
    return "";
  }

  return `0x${normalizarHexadecimal(value).padStart(minLength, "0")}`;
}

function obtenerOcrearContenedorAlertas() {
  let container = document.getElementById("alerts-container");
  if (container) {
    return container;
  }

  const simulator = document.getElementById("simulator");
  if (!simulator) {
    return null;
  }

  container = document.createElement("div");
  container.id = "alerts-container";
  container.className = "max-w-7xl mx-auto w-full px-gutter";
  container.setAttribute("aria-live", "polite");
  simulator.insertBefore(container, simulator.firstChild);
  return container;
}

function mostrarMensaje(mensaje, tipo, etiqueta, colorClasses) {
  const container = obtenerOcrearContenedorAlertas();
  if (!container) {
    console.error(mensaje);
    return;
  }

  container.replaceChildren();
  const alert = document.createElement("div");
  alert.className = `mb-4 rounded-lg p-4 ${colorClasses}`;
  alert.setAttribute("role", tipo === "error" ? "alert" : "status");

  const heading = document.createElement("strong");
  heading.textContent = `${etiqueta}: `;
  const text = document.createElement("span");
  text.textContent = mensaje;
  alert.append(heading, text);
  container.appendChild(alert);

  window.clearTimeout(mostrarMensaje.timeoutId);
  mostrarMensaje.timeoutId = window.setTimeout(() => {
    if (alert.isConnected) {
      alert.remove();
    }
  }, 5000);
}

function mostrarError(mensaje) {
  mostrarMensaje(mensaje, "error", "Error", "bg-error-container text-error");
}

function mostrarAdvertencia(mensaje) {
  mostrarMensaje(mensaje, "warning", "Advertencia", "bg-secondary-fixed text-secondary");
}

function mostrarExito(mensaje) {
  mostrarMensaje(mensaje, "success", "Éxito", "bg-tertiary-fixed text-tertiary");
}

function limpiarMensajes() {
  const container = document.getElementById("alerts-container");
  if (container) {
    container.replaceChildren();
  }
  window.clearTimeout(mostrarMensaje.timeoutId);
}

function leerValor(id) {
  return document.getElementById(id)?.value ?? "";
}

function agregarListener(id, eventName, callback) {
  document.getElementById(id)?.addEventListener(eventName, callback);
}

function inicializarAplicacion() {
  const formReal = document.getElementById("form-real");
  formReal?.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularDireccionReal(leerValor("input-segmento"), leerValor("input-desplazamiento"));
  });
  agregarListener("btn-limpiar-real", "click", limpiarFormularioReal);

  const formProtegido = document.getElementById("form-protegido");
  formProtegido?.addEventListener("submit", (event) => {
    event.preventDefault();
    decodificarSelector(leerValor("input-selector"));
  });
  agregarListener("btn-limpiar-protegido", "click", limpiarFormularioProtegido);

  const liveInputs = [
    ["input-segmento", "input-desplazamiento", calcularDireccionReal],
    ["input-selector", null, (selector) => decodificarSelector(selector)],
  ];

  for (const [firstId, secondId, callback] of liveInputs) {
    const update = () => {
      const firstValue = leerValor(firstId);
      const secondValue = secondId ? leerValor(secondId) : null;
      if (!firstValue.trim() || (secondValue !== null && !secondValue.trim())) {
        limpiarMensajes();
        return;
      }
      callback(firstValue, secondValue);
    };

    agregarListener(firstId, "input", update);
    if (secondId) {
      agregarListener(secondId, "input", update);
    }
    update();
  }

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializarAplicacion, { once: true });
} else {
  inicializarAplicacion();
}
