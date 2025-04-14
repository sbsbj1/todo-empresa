# API TODO TRANSFER

## Goals
- [X] Puedo crear un usuario
    - Nombre
    - Apellido
    - Email
        - El email debe ser validado
    - Contrasena
        - La contrasena debe ser minimo 8 caracteres y con numeros y letras
    - Telefono
- [X] Puedo crear un proveedor
    - Nombre o Alias
    - Rut
        - [ ] Debe ser validado como rut
    - Email
        - El email debe ser validado
    - Banco
        - Se deben mostrar las opciones de bancos por medios de una API
    - Numero de cuenta
    - Tipo de cuenta
- [X] Puedo crear una transferencia
    - Monto
    - Fecha de Transferencia
    - Tipo de Transferencia
    - Estado 
        - LIsto, Incompleto, En detalles
    - Siguiente transferencia
- [X] Se uso REST HATEOAS
- [ ] Se crearon Logs
- [ ] El registro de usuario debe ser autenticado con Oauth2
- [X] Se creo el ErrorMiddleware

## Aclaraciones
- Rut se guardo con STRING para no profundizar tanto.

