import mysql from "mysql2/promise";

async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passs",
    database: "mi_tienda_db",
  });

  connection.query("DROP TABLE IF EXISTS productos");
  connection.query(`CREATE TABLE productos (
    id int auto_increment primary key,
    nombre varchar(100) not null,
    precio int not null,
    stock int not null,
    categoria varchar(100)
)`);

  console.time("consulta sin optimizar");
  await connection.query("SELECT * FROM productos WHERE precio > 50");
  console.timeEnd("consulta sin optimizar");

  await connection.query(
    "CREATE INDEX idx_productos_precio ON productos(precio)"
  );

  console.time("consulta con indice");
  await connection.query("SELECT * FROM productos WHERE precio > 50");
  console.timeEnd("consulta con indice");

  await connection.end();
}

main().then().catch();
