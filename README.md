# Direccionamiento de Memoria x86 - Laboratorio Didáctico

## 📚 Descripción
Herramienta educativa interactiva para el aprendizaje de direccionamiento segmentado en arquitecturas x86: Modo Real vs Modo Protegido.

## 🎯 Características
- ✅ Calculadora de Modo Real (Segmento × 16 + Desplazamiento)
- ✅ Decodificador de Selector (Índice + TI + RPL)
- ✅ Interfaz responsiva y profesional
- ✅ Ejemplos interactivos pre-rellenados

## 🏗️ Estructura del Proyecto
proyecto-arquitectura/
├── index.html # Página principal
├── css/
│ └── styles.css # Estilos (Material Design 3)
├── js/
│ ├── main.js # Inicialización y event listeners
│ ├── modo-real.js # Lógica de direccionamiento real
│ └── modo-protegido.js # Lógica de selector
├── DESIGN.md # Especificaciones de diseño
└── README.md # Este archivo


## 🚀 Cómo Usar
1. Abre `index.html` en un navegador moderno
2. En «Ejemplos de Traducción», usa las calculadoras interactivas de modo real y selector
3. Edita los valores de demostración o ingresa los tuyos en hexadecimal
4. Observa los resultados en tiempo real o pulsa «Limpiar» para reiniciar cada formulario
5. Consulta la sección técnica del selector para revisar los campos Índice, TI y RPL

## 📋 Ejemplos

### Modo Real
- Segmento: `1000H`
- Desplazamiento: `22H`
- Resultado: `10022H` (dirección real)

### Modo Protegido
- Selector: `001BH` (binario: 0000000000011011)
- Desglose:
  - Índice: 3
  - TI: 0 (GDT)
  - RPL: 3 (Aplicación)
- El decodificador también muestra un descriptor genérico de demostración para cualquier selector. Su base y límite no se obtienen de la GDT/LDT real: el selector solo identifica una entrada y esta página no lee las tablas del sistema.

## 🎨 Diseño
Sistema de diseño basado en Material Design 3 adaptado para arquitectura de computadores.

Paleta de colores:
- Primary (Protected Mode): `#4A90E2` (Azul)
- Secondary (Real Mode): `#D4A574` (Dorado)
- Descriptores:
  - Base Address: `#E74C3C` (Rojo)
  - Limit: `#3B82F6` (Azul)
  - Flags: `#F39C12` (Amarillo)
  - Access Rights: `#9B59B6` (Morado)
  - GDT/LDT: `#10B981` (Verde)

## 👨‍💻 Tecnologías Usadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos (incluyendo Tailwind)
- **JavaScript (ES6+)** - Lógica interactiva
- **Sin dependencias externas** - Vanilla JS

## 📖 Cátedra
- **Materia:** Arquitectura de Computadores
- **Universidad:** UFPS - Ingeniería de Sistemas
- **Profesor:** Miguel Robles

## 📅 Fecha de Creación
2026

## 📝 Licencia
Proyecto educativo - Uso académico permitido

---

**Nota:** Este proyecto es material didáctico para estudiantes de Ingeniería de Sistemas.
