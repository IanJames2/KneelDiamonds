import { getCars, getWheels, getPaintColors, getInteriors, getTechnologies } from "./database.js"

const buildCarListItem = (car) => {
    const wheels = getWheels()
    // Remember that the function you pass to find() must return true/false
   const foundWheel = wheels.find(
      (wheel) => {
        if (wheel.id === car.wheelsId){
        return true    
        }
    }
   )

    const paintColors = getPaintColors()
    // Remember that the function you pass to find() must return true/false
   const foundPaint = paintColors.find(
      (paint) => {
        if (paint.id === car.paintColorsId){
        return true    
        }
    }
   )
   
    const interiors = getInteriors()
    // Remember that the function you pass to find() must return true/false
   const foundInterior = interiors.find(
      (interior) => {
        if (interior.id === car.interiorsId){
        return true    
        }
    }
   )

    const technologies = getTechnologies()
    // Remember that the function you pass to find() must return true/false
   const foundTech = technologies.find(
      (tech) => {
        if (tech.id === car.technologiesId){
        return true    
        }
    }
   )

   const totalCost = foundWheel.price + foundPaint.price + foundInterior.price + foundTech.price



    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
       currency: "USD"
    })
  return `<li>
    Order #${car.id} cost ${costString} and was placed on ${car.timestamp}
    </li>`
}

export const Cars = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Cars, but not the others?
    */
    const cars = getCars()

    let html = "<ul>"

    const listItems = cars.map(buildCarListItem)

    html += listItems.join("")

    html += "</ul>"

    return html
}   
