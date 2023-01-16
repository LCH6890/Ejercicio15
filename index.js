const nombre = "Lorena"
const apellido = "Chamorro"

const persona ={
    nombre: "Lorena",
    apellido: "Chamorro",
}

//sessionStorage.setItem("persona", JSON.stringify(persona))
//localStorage.setItem("persona", JSON.stringify(persona))

document.cookie = "nombre-cookie=LorenaCookie; expires=" + new Date(2023, 0, 16,18,2)