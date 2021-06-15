
import { carInteriors  } from "./interiors.js"
import { paintColors } from "./paintColors.js"
import { carTechnology } from "./technologies.js"
import { carWheels } from "./wheels.js"
import { Cars } from "./cars.js"
import { addCar } from "./database.js"

document.addEventListener(
    "click",
    (e) => {
        if (e.target.id === "carButton") {
            addCar()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>
        <div class="features--container">
        <article class="choices">
            <section class="choices__carTechnology options">
                <h2>Car Technology Inventory</h2>
                ${carTechnology()}
            </section>
            <section class="choices__carInteriors options">
                <h2>Car Interior Inventory</h2>
                ${carInteriors ()}
            </section>
            <section class="choices__paintColors options">
                <h2>Car Paint Colors Inventory</h2>
                ${paintColors()}
            </section>
            <section class="choices__carWheels options">
                <h2>Car Wheels Inventory</h2>
                ${carWheels()}
            </section>
        </article>
        </div>
        <article>
            <button type="submit" id="carButton">Create Custom Car</button>
        </article>

        <article class="customCars">
            <h2>Custom Cars List</h2>
            ${Cars()}
        </article>
    `
}
