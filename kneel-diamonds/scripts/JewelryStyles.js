import { getStyles, setStyle } from "./database.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "styles") {
            const styleId = e.target.value
                // window.alert(`User chose style ${styleId}`)
                setStyle(parseInt(styleId))
        }
    }
)

export const JewelryStyles = () => {
    const styles = getStyles()
    let html = "<ul>"

    const listStyles = styles.map(styles => {
        return `<li>
        <input type="radio" name="styles" value="${styles.id}" /> ${styles.style}
    </li>`
    })

    html += listStyles.join("")
    html += "</ul>"

    return html
}












/*
export const JewelryStyles = () => {
    const styles = getStyles()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray =


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}
*/
