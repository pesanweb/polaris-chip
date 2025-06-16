// server-static.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

console.log("Memulai server...");

try {
    app.use(express.static(path.join(__dirname, 'dist')));
    console.log("Middleware static diatur untuk folder:", path.join(__dirname, 'dist'));

    // Komentari bagian ini
    /*
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
      console.log("Mengirim index.html untuk URL:", req.originalUrl);
    });
    */

    app.listen(port, () => {
      console.log(`Server frontend berjalan di http://localhost:${port}`);
      console.log('Tekan Ctrl+C untuk menghentikan.');
    });
} catch (e) {
    console.error("Kesalahan saat menginisialisasi server:", e.message);
    console.error("Stack trace:", e.stack);
    process.exit(1);
}