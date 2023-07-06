const mysql = require('mysql');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: 'host_kalian',
    user: 'username_kalian',
    password: 'password_kalian',
    database: 'nama_database',
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;