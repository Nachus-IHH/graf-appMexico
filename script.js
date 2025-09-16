// Elementos
const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeBox = document.getElementById("verde-box");
const rojoBox = document.getElementById("rojo-box");

const verdeHex = document.getElementById("verde-hex");
const rojoHex = document.getElementById("rojo-hex");

// Función para actualizar colores
function actualizarColores() {
  const verde = parseInt(verdeSlider.value);
  const rojo = parseInt(rojoSlider.value);

  // Verde -> RGB(0, verde, 0)
  const verdeColor = `rgb(0, ${verde}, 0)`;
  verdeBox.style.backgroundColor = verdeColor;
  verdeHex.textContent = rgbToHex(0, verde, 0);

  // Rojo -> RGB(rojo, 0, 0)
  const rojoColor = `rgb(${rojo}, 0, 0)`;
  rojoBox.style.backgroundColor = rojoColor;
  rojoHex.textContent = rgbToHex(rojo, 0, 0);
}

// Conversión RGB a HEX
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  ).toUpperCase();
}

// Inicializar
verdeSlider.addEventListener("input", actualizarColores);
rojoSlider.addEventListener("input", actualizarColores);
actualizarColores();
