import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

// const renderAllHTML = () => {
//     mainContainer.innerHTML = KneelDiamonds()
// }

export const renderAllHTML = () => {
    document.querySelector("#container").innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", e => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

