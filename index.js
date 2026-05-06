const colorSchemes = document.getElementById("color-schemes");
const colorInput = document.getElementById("color");
document.addEventListener("click", function (e) {
  if (e.target.id === "get-color-scheme-btn") {
    renderColorScheme();
  }
  const colorBox = e.target.closest(".color-box");
  if (colorBox) {
    if (colorBox.querySelector(".hex")) {
      copyToClipboard(colorBox.querySelector(".hex"));
    }
  }
});
function renderColorScheme() {
  let colorScheme = colorSchemes.value;
  const hex = colorInput.value.replace("#", "");
  const schemeMode = [
    "monochrome",
    "monochrome-light",
    "monochrome-dark",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
  ];
  const apiUrl = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorScheme}&count=5`;
  if (schemeMode.includes(colorScheme)) {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API fetch request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((scheme) => {
        let schemeHtml = "";
        scheme.colors.forEach(function (color) {
          schemeHtml += `
          <div class="color-box">
          <p class="color-name">${color.name.value}</p>
          <div class="color-preview" style="background-color: ${color.hex.value};"></div>
            <p class="hex">${color.hex.value}</p>
            </div>
            `;
        });
        document.getElementById("scheme-section").innerHTML = schemeHtml;
      })
      .catch((error) => {
        console.error("Error fetching color scheme:", error);
        document.getElementById(
          "scheme-section"
        ).innerHTML = `<p class="error">Failed to load color scheme. Please try again.</p>`;
      });
  }
}
function copyToClipboard(element) {
  const hexValue = element.textContent;
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      const originalText = element.textContent;
      element.textContent = "Copied!";
      setTimeout(() => {
        element.textContent = originalText;
      }, 1000);
    })
    .catch((error) => {
      alert("Failed to copy to clipboard");
    });
}
