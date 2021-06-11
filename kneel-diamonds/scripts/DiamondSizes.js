import { getSizes, setSize } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "size") {
        const sizeId = e.target.value
            // window.alert(`User chose size ${sizeId}`)
            setSize(parseInt(sizeId))
        }
    }
)

export const DiamondSizes = () => {
    const sizes = getSizes()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

