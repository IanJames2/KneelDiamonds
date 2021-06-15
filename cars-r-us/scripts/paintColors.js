import { getPaintColors, setPaintColor } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "paintColors") {
            const paintColorsId = e.target.value
            // window.alert(`You have selected paint color --> ${paintColorsId}`)
            setPaintColor(parseInt(paintColorsId))
        }
    }
)

export const paintColors = () => {
    const colors = getPaintColors()
    let html = "<ul>"

    const listPaintColors = colors.map(colors => {
        return `<li>
        <input type="radio" name="colors" value="${colors.id}" /> ${colors.paint_color}
    </li>`
    })

    html += listPaintColors.join("")
    html += "</ul>"

    return html
}