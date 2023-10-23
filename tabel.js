const dataRow = document.getElementById("dataRow");

// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const formData = params.get("formData");

if (formData) {
    const parsedData = JSON.parse(decodeURIComponent(formData));

    // Tampilkan data dalam tabel
    for (const key in parsedData) {
        const cell = document.createElement("td");
        cell.textContent = parsedData[key];
        dataRow.appendChild(cell);
    }
}