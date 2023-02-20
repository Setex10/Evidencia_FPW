const contentGalery = document.querySelector(".galeria-port")
const contentPatrocinadores = document.querySelector(".servicio-cont");

const rutas = (ruta, terminacion, cantidad) => {
    const rutas = []
    for (let i = 1; i <= cantidad; i++) {
        const path = `${ruta}${i}${terminacion}`
        rutas.push(path)
    }
    return rutas
}

const ilustraciones = rutas("./img/ilustracion", ".png", 6)
const pathProductos = rutas("./img/img", ".jpg", 8)


pathProductos.map(producto => {
    const content = document.createElement("div")
    content.setAttribute("class", "imagen-port")
    // <div class="imagen-port"></div>

    const img = document.createElement("img")
    img.setAttribute("src", producto)
    // <img src = productos ></img>

    const hover_galeria = document.createElement("div")
    hover_galeria.setAttribute("class", "hover-galeria")
    // <div class="hover-galeria"></div>

    const description = document.createElement("p")
    description.textContent = "Nuestra Merch"
    // <p>Nuestra merch</p>

    hover_galeria.append(description)
    // <div class="hover-galeria">
    //<p>Nuestra merch</p>
    //</div>

    content.append(img)
    content.append(hover_galeria)

    contentGalery.append(content)
})

ilustraciones.map((ilustracion) => {
    const servicioInd = document.createElement("div")
    servicioInd.setAttribute("class", "servicio-ind")

    const img = document.createElement("img")
    img.setAttribute("src", ilustracion)
    
    servicioInd.appendChild(img)
    contentPatrocinadores.append(servicioInd)
})