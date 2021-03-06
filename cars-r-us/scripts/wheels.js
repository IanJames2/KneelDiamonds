import { getWheels, setWheel } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "wheel") {
            // window.alert(`User chose tire set ${wheelId}`)
            const wheelId = e.target.value
            setWheel(parseInt(wheelId))
        }
    }
)

export const carWheels = () => {
    const wheels = getWheels()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheels}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
