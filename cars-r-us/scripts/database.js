const database = {
    paintColors: [
        {id: 1, paint_color: "Silver", price: 600},
        {id: 2, paint_color: "Midnight Blue", price: 600},
        {id: 3, paint_color: "Firebrick Red", price: 600},
        {id: 4, paint_color: "Spring Green", price: 600}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 800},
        {id: 2, interior: "Charcoal Fabric", price: 800},
        {id: 3, interior: "White Leather", price: 1000},
        {id: 4, interior: "Black Leather", price: 1000}
    ],
    technologies: [
        {id: 1, technology: "Basic Package (basic sound system)", price: 1000},
        {id: 2, technology: "Navigation Package (includes integrated navigation controls)", price: 1200},
        {id: 3, technology: "Visibility Package (includes side and reat cameras)", price: 1400},
        {id: 4, technology: "Ultra Package (includes navigation and visibility packages)", price: 1600}
    ],
    wheels: [
        {id: 1, wheels: "17-inch Pair Radial", price: 200},
        {id: 2, wheels: "17-inch Pair Radial Black", price: 200},
        {id: 3, wheels: "18-inch Pair Spoke Silver", price: 250},
        {id: 4, wheels: "Black Leather18-inch Pair Spoke Black", price: 300}
    ],
    cars: [
        {id: 1, paintColorsid: 2, interiorsid: 3, technologiesid: 4, wheelsid: 1, timestamp: 1614659931693}
    ]
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColors => ({...paintColors}))
}

export const getInteriors = () => {
    return database.interiors.map(interiors => ({...interiors}))
}

export const getTechnologiers = () => {
    return database.technologiers.map(technologiers => ({...technologiers}))
}

export const getWheels = () => {
    return database.Wheels.map(wheels => ({...wheels}))
}

export const getCars = () => {
    return database.cars.map(cars => ({...cars}))
}

export const setPaintColors = () => {
    return database.paintColors
}

export const setInteriors = () => {
    return database.
}

export const setTechnologiers = () => {
    return database.
}

export const setWheels = () => {
    return database.
}






