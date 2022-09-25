const nombre = "Guido"
const apellido = "Pérez"
const persona = {
    nombre, 
    apellido
}

// sessionStorage.setItem("persona", JSON.stringify(persona))
// localStorage.setItem("persona", JSON.stringify(persona))

const now = new Date()

// document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 2 * 60000).toUTCString()}`

// console.log(document.cookie)