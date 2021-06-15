import { getInteriors, setInterior } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "interiors") {
            const interiorsId = e.target.value
                // window.alert(`You have selected interior ${interiorsId}`)
                setInterior(parseInt(interiorsId))
        }
    }
)

export const carInteriors = () => {
    const interiors = getInteriors()
    let html = "<ul>"

    const listInteriors = interiors.map(interiors => {
        return `<li>
        <input type="radio" name="interiors" value="${interiors.id}" /> ${interiors.interior}
    </li>`
    })

    html += listInteriors.join("")
    html += "</ul>"

    return html
}