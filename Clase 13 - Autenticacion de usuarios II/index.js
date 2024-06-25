import bcrypt from "bcrypt";

const plainPassword = "my_super_secret_password";
const plainPassword2 = "my_super_secret_password_2";
const saltRounds = 10;

async function main() {
  /**
   * Signup/Registro
   * Al momento de registrar al usuario, creamos un hash para su contraseña
   */
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  console.log(
    `Contraseña plana -> ${plainPassword} | Contraseña hasheada -> ${hashedPassword}`
  );

  /**
   * Login/Ingreso
   * Cuando el usuario quiera ingresar al sistema
   * tenemos que comparar la contraseña que envió con el hash guardado en la base de datos
   */
  const isValidPassword = await bcrypt.compare(plainPassword, hashedPassword);

  console.log(
    `[${plainPassword}] La contraseña es correcta? -> ${isValidPassword}`
  );

  const isValidPassword2 = await bcrypt.compare(plainPassword2, hashedPassword);

  console.log(
    `[${plainPassword2}] La contraseña es correcta? -> ${isValidPassword2}`
  );
}

main().then().catch();
