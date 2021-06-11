import { getMetals, setMetal } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "metal") {
        const metalId = e.target.value
            // window.alert(`User chose metal ${metalId}`)
            setMetal(parseInt(metalId))
        }
    }
)

export const Metals = () => {
    const metals = getMetals()
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    } 

    html += "</ul>"
    return html
}

