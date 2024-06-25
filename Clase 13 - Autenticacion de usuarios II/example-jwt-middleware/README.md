Express.js + JWT + Middleware

Esta aplicación expone los siguientes endpoints

- `POST /api/auth/signup` -> Crea un usuario
- `POST /api/auth/login` -> Crea un JWT para un usuario
- `GET /api/auth/me` -> Devuelve la información del usuario logueado
  - Enviar el JWT en el header `Authorization` de la siguiente manera
  ```
  Authorization: Bearer <JWT>
  ```
- `GET /api/admin/users` -> Devuelve todos los usuarios registrados
  - Solo funciona para usuarios con el rol de `admin`
