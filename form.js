const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        prodi: document.getElementById("prodi").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        tgl_lahir: document.getElementById("tgl_lahir").value,
        alamat: document.getElementById("alamat").value,
    };

    // Encode data sebagai URL parameter
    const encodedData = encodeURIComponent(JSON.stringify(formData));

    // Tambahkan data sebagai parameter URL dan alihkan ke halaman tabel.html
    window.location.href = `tabel.html?formData=${encodedData}`;
});