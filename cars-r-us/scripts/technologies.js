import { getTechnologies, setTechnology } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "technology") {
        const [, technologyId] = e.target.value.split("--")
            // window.alert(`User chose technology ${technologyId}`)
            setTechnology(parseInt(technologyId))
        }
    }
)

export const carTechnology = () => {
    const technologys = getTechnologies()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technologys.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.technology}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
