Working for Kneel Diamonds
Kneel Diamonds is a jewelry store founded by James Kneel in 1937. It is currently owned and operated by his granddaughter Natasha Dimitrionov. It currently operates three physical locations around Nashville, TN and has 38 employees.

Natasha wants to expand her business to allow customers to commission works online, and have an online catalog of her existing inventory. A couple years ago, she figured she could do it herself, but her attempts quickly sputtered when she realized how difficult it was. She decided it was time to hire a professional developer to get it done correctly.

Your first day was yesterday. You completed all your paperwork, met everyone, and got all the software that you needed installed on one of their computers.

Today, you used your new key card to enter in through the back door, walked through the small kitchen and into the dark room off to the left in the back hallway. You flip on the lights and start your computer at 8:38 am.

At 9:05, you hear the back door of the office open and hear Natasha's voice. She's discussing something with another person that arrived at the same time. Five minutes later, she briskly walks into your room, pulls up a chair next to you, crosses her legs and asks, "How are you this morning?"

You tell her that you're fine and excited to build something.

She nods and quickly gets to business.

"I need you to build a web page with Java on it that lists all of the possible options that we offer to make custom jewelry. The user can choose any of the options, and a new code object should be created to represent their custom piece of jewelry. The customer can create as many jewelry items as she likes, add them to list of custom orders, and the Java code should be able to calculate the total cost."

"You mean JavaScript, right?"

She looks up at your sharply, narrows her eyes, and quips, "I remember trying to do this! It was Java. Just use it for this web page."

You realize that it's not a battle worth fighting, shrug your shoulders, and say, "Ok. I need to know what all of the options are for the customer to choose from."

She smiles quickly. You're not sure if there was a hint of smugness in that smile or not. She stands up and says, "I'll be back in just a minute."

You hear her heels clicking down the hallway, then some shuffling, a metallic clang, and then the heels again as she makes her way back to your office. She bustles up to you and hands you a large, 3-ring binder. It has "Kneel Materials & Inventory" written on an index card, which has been taped to the front of the binder.

"All of the metals, gems both precious and semi, colors, engravings, and styles for our jewelry is in there," her long index finger, tipped with a purple-painted nail, is extended towards the binder.

You spend the next several hours scouring all of the possible options, decide to start with custom rings, and finally write some JavaScript code that represents what is in the binder. You decide to price metals by the ounce.

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]
Gems are a bit tricky, you discovered, as you read the information in the binder. Intead of price following a straightforward formula per caret, it increased as the caret got larger. A one carat stone costs more than double the cost of a half carat stone. Again, two carat stones will cost significantly more.

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]
Luckily, you find that Natasha prices styles with a consistent pattern. Classic band style costs the least, modern styles cost a bit more, and vitage style cost the most because they require the most detailing.

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]
How Application Should Work
The following animation shows how the layout of the application, and how the user can select options and then click a button to generate a custom jewelry order. As soon as the order is generated, it should immediately appear in the DOM without refreshing the browser.

Up to this point, you've only handled "click" events. In this application, you will handle "change" events as well.



Project Setup
Now that you have a paying job working for Kneel Diamonds, you are going to build out an application for producing different kinds of custom jewelry orders.

Run the following command in your terminal.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nashville-software-school/client-side-mastery/cohort-49/book-4-kneel-diamonds/chapters/scripts/kneel-diamonds-setup.sh)"
It will create the following directory for your project and provider some boilerplate code. Once it is complete, move on to the next chapter.

~/workspace/kneel-diamonds

Wait, It Doesn't Work
When you start your web server for the new project and load it in the browser, you will immediately notice that there are syntax errors.



Time to practice your debugging skills again!!

This time, it's more complex. Instead of a misspelled variable, or a missing + operator, this time, there are functions missing that you need to write. Don't worry, though, you won't have to write functions that are more complex than what you've already seen quite a few times already.

Once you have updated that code so that no more errors are happening, move on to the next chapter.

Remember to use all of the resources at your disposal. the Web, your peers and your instructors.

This is a good time to remind you that this isn't school. We don't want you to do this by yourself. Professional software developers use every possible resource to get things working and do their best to learn what they can as they do it.

If you really, really, want to, you can watch how to fix the initial errors.

Kneel Diamonds Entity Relationship Diagram
Look in the database.js module and examine the data that will be used for this application. There are three main resources that the user will interact with and need to be represented in the ERD.

Metals
Sizes
Styles
There is a fourth entity that the user does not directly interact with, but it gets generated by the user's choices. The customOrders entity. It's primarily composed of foreign keys, but also has a timestamp to store when the user placed the order.

Use dbdiagram.io to generate a visualization of this database. Work with your teammates, or talk to a member of the instruction team to work past any concepts that still confuse you.

If you're truly stuck after talking to peers and instructors you can view one possible visualization.

Cars 'R Us
For this application, you are going to allow customers to design their own car detailing package and place an order for a new car with those options.

Setup
Create workspace/cars-r-us directory.
Create scripts and styles sub-directories
Create main.js and database.js in scripts directory
Options
There will be four different sets of options.

Paint Color
Customer should be able to choose one of the following paint colors. You set the price for each one.

Silver
Midnight Blue
Firebrick Red
Spring Green
Interior
Customer can choose from the follow options for interior seat types. You set the price for each one.

Beige Fabric
Charcoal Fabric
White Leather
Black Leather
Technology
Customer can choose from the follow options for the tech capabilities of the car dashboard. You set the price for each one.

Basic Package (basic sound system)
Navigation Package (includes integrated navigation controls)
Visibility Package (includes side and reat cameras)
Ultra Package (includes navigation and visibility packages)
Wheels
Customer can choose from the follow options for wheels. You set the price for each one.

17-inch Pair Radial
17-inch Pair Radial Black
18-inch Pair Spoke Silver
18-inch Pair Spoke Black
ERD
Before you create any actual state data structures in your code, create an ERD for this application. Consider not only the resources above, but also how the customer's order will be stored and the properties on those objects.

Once you have an ERD created, but are unsure if you got it right, feel free to run it by your peers or an instructor.

Database
Once your ERD is complete, then go to the database module and start setting up your data structures for each resource. Also set up the get*() and set*() function you think you need.

You might forget some of them now, and that's fine. You'll discover what you missed when you start to build out the functionality.

Showing Custom Jewelry Options
If you hadn't noticed yet, the main.js module looks a bit different than it has in previous projects. It doesn't define the main HTML structure of your application. It is deferring that responsibility to the KneelDiamonds component.

There is a function named renderAllHTML() that is defined in the main.js module, then immediately invoked. This function is needed later in the growth of the application, because for Kneel Diamonds, you are going to react to the user choosing options.

When the user chooses options, the state of your data is going to change. When the state of your data changes, then all of the HTML must be regenerated to display that new state.

More on that later. Just setting the stage now.

Render the Metal Options
Your first step is to import and render the Metals component in the HTML structure defined in the KneelDiamonds component.

Give it a shot, and if you need to, you can peek at the solution.

Render Sizes and Styles
Once you show metals, also render the components that show the options for diamond sizes and jewelry styles.

The Map Array Method
✎
The map() array method is a conversion tool. It generates a new array with as many items as are in the original array, but in the new array, it puts items in the form that you specify.
Open the Metals module and the DiamondSizes module. You will see that the list items for metals uses the for..of loop that you have seen in several previous projects for building all of the HTML representations of data.

The diamond sizes are generated in a way that is both completely different, and exactly the same.

const listItemsArray = sizes.map(
    (size) => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    }
)
html += listItemsArray.join("")
The .map() method also iterates the array, just like for..of does. Unlike a for..of loop, it invokes the function that you define.

Wait, what function?

This function.

(size) => {
    return `<li>
        <input type="radio" name="size" value="${size.id}" /> ${size.carets}
    </li>`
}
That function is the first, and only, argument that the .map() method will accept. As it iterates the array, it will take the object at the current location and pass it as an argument to your function. Your function defines the size parameter.

So an object comes into your function, and a string gets returned. That string goes into a new array.

Original Array
[
    { id: 1, carets: 0.5, price: 405 },
    { id: 2, carets: 0.75, price: 782 },
    { id: 3, carets: 1, price: 1470 },
    { id: 4, carets: 1.5, price: 1997 },
    { id: 5, carets: 2, price: 3638 }
]
Array that Map() Generates
[
   "<li> <input type="radio" name="size" value="1" /> 0.5 </li>",
   "<li> <input type="radio" name="size" value="2" /> 0.75 </li>",
   "<li> <input type="radio" name="size" value="3" /> 1 </li>",
   "<li> <input type="radio" name="size" value="4" /> 1.5 </li>",
   "<li> <input type="radio" name="size" value="5" /> 2 </li>"
]
Here's a quick example. An array filled with numbers. Observe how changes made to what the function returns affects the resulting array (in blue at the end).



The Join() Array Method
The .join() array method, luckily, does exactly what its name infers - it joins things together.

More specifically, it join all of the individual items in the array into a single string... all squished together.



If you join the strings in this array...

[
   "<li> <input type="radio" name="size" value="1" /> 0.5 </li>",
   "<li> <input type="radio" name="size" value="2" /> 0.75 </li>",
   "<li> <input type="radio" name="size" value="3" /> 1 </li>",
   "<li> <input type="radio" name="size" value="4" /> 1.5 </li>",
   "<li> <input type="radio" name="size" value="5" /> 2 </li>"
]
...you end up with one long string filled with HTML.

"<li> <input type="radio" name="size" value="1" /> 0.5 </li>
<li> <input type="radio" name="size" value="2" /> 0.75 </li>
<li> <input type="radio" name="size" value="3" /> 1 </li>
<li> <input type="radio" name="size" value="4" /> 1.5 </li>
<li> <input type="radio" name="size" value="5" /> 2 </li>"
Generate Jewelry Styles Options
Now it's your turn. Use the .map() array method in the JewelryStyles component function to generate one long string of HTML that contains the <li> elements for the options.

Display Your Options
Create a module that is responsible for displaying the overall HTML structure for your app. It will be the equivalent of the KneelDiamonds module.
Create four modules in your scripts directory, each being responsible for display the four different option groups, just like you did in Kneel Diamonds.
Import those four modules into the module you created in step one and interpolate them in the appropriate places in the overall HTML structure.
Make sure you have a heading for each group of options.

New Event Type: Change
Learning Objectives
You should be able to remember that radio button controls generate a change event that you can listen for.
You should be able to remember that when the user selects a radio input options, that the value of the event target will be the value attribute of the chosen option.
You should be able to implement an event listener for a group of radio input options.
Change Listeners
Now, you need to listen for when the user makes a choice in one of the option groups. Start with metals.

kneel-diamonds/scripts/Metals.js
import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)
When you choose a metal, you should now see a message displayng the primary key of the chosen metal.

Showing Chosen Options
In each of the modules that display an option group, add an event listener that reacts to the customer choosing one of the options.

When an option is chosen, use window.alert to display a message that says which option the user chose.

Modifying State
Learning Objectives
You should be able to recite the definition of state as it pertains to web applications.
You should be able to identify the component whose responsiblity it is to change application state.
You should be able to understand that functions should be used to change application state.
Tracking User Choices as State
When a person is providing input in your application, you need to store that input - keep track of it. In this application, when the user chooses one of the radio buttons, they are changing the state of the application.

You need a place to store that state. State is always stored in your database, or data store, for your application. Time to add a new key to your database object to keep track of the style, size, and metal that the user clicks on with their mouse.

You can call this new state whatever you like. Here's a suggestion.

kneel-diamonds/scripts/database.js
const database = {
    orderBuilder: {},
❓
Can you explain why this state has to be stored as an object, and not an array, string, or number?
Responsbility of Changing State
Now that you have a new state key in your database, you need a way to store user choices. What are the choices the user is making as she uses the application?

Metal
Size
Style
Our new orderBuilder state object will store which one of those options was chosen.

What uniquely identifies each object in a database?
That's right! The primary key, or id property.

Also remember that no other modules are allowed to have direct access to the database. That's why you have exported functions that return copies of the current state. Other modules invoke those function to get state.

Now you need to export functions whose responsibility is to set state.

kneel-diamonds/scripts/database.js
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}
Setting State
Instead of showing an alert when a metal is chosen, you now need to set the corresponding property of the order builder object in application state.

Make sure you update your import statement to get the setMetal() function.

kneel-diamonds/scripts/Metals.js
import { getMetals, setMetal } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)
Use your debugging skills to see how this code works.

Put a breakpoint on the line of code with the if statement
Click on one of the metals
Inspect the value of event.target
Inspect the value of event.target.name
Inspect the value of event.target.value
Then, step into the setMetal() function and inspect that value of the parameter
Inspect the value of database.orderBuilder after its state is updated

Saving All State
Using the code examples from the previous chapter that shows how to store the chosen metal as state in the database, update the code in the DiamondSizes and JewelryStyles components to do the same.

When the user has chosen all three types of options, the orderBuilder state object should have three properties on it.

Here's an example.

{
    metalId: 2,
    styleId: 3,
    sizeId: 1
}
Use your debugging skills to watch the state build up every time the user chooses an option.

Saving User Options to State
Update your change event listeners in each of the options modules to remove the window.alert code, and instead store the user's choice in your database.

Just like in Kneel Diamonds, there should be a state variable in the database that starts as an empty object, and then gets keys added to it when the user chooses one of the options for each group.

Defining Your Own Events
In the last two chapters, you implemented code that updated the state of your database by storing options that a person chooses. It's temporary state, in that the user can keep making choices over and over again, and the state of the chosen metal, style, and size will constantly change.

Now it's time to handle making a permanent change to state. You are going to implement the click hander for the purchase button.

It will modify permanent state. When state changes for your application, you need to regenerate the HTML to display the new state to the user.

Storing a Custom Order
When the user clicks on the Create Custom Order button in the application, you need to store their choices permanently. This is where the customOrder state comes into play. You will be adding objects to that state array.

Since that's a new task that the application needs to perform, you need a function. The function's sole reponsibility will be to take the temporary choices currently being stored in the orderBuilder state object and make them permanent.

kneel-diamonds/scripts/database.js
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
Custom Events
First, watch this short video about using custom events in JavaScript. It shows a simple demonstration of how you can use custom events to make things happen in your application when you want them to happen instead of only reacting to click or change events that the browser broadcasts.

Video: Custom Events in Javascript

Now, every time in your application when the permanent state changes in your data store, you will broadcast a notification that the state has changed.

document.dispatchEvent(new CustomEvent("stateChanged"))
You can broadcast this message whenever you want. Right now, you don't know when that would be, but you'll discover more ways to do this soon.

Listening for Custom Events
Luckily, reacting to a custom event is just like reacting to a browser generated event like click and change. You use an event listener.

When state changes for your application, you need to regenerate the HTML to display the new state to the user.

Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.

That means that the main module should listen for the stateChanged event. When it is dispatched by the database module, the main module will generate all the HTML again and display it.

Put the following code at the bottom of the main module.

kneel-diamonds/scripts/main.js
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
Now make some choices and place a custom order. You should see a new order show up in the browser.



Recap
You implemented a new event listener for the browser-generated click event on the order button.
You wrote a new function in the database module that is responsible for changing permanent state.
Since it changed permanent state, it dispatched a custom event.
You implemented a new event listener in the main module for the custom stateChanged event.
That event listener invokes the renderAllHTML() function to regenerate the HTML so that new state is displayed to the user.

Placing a Car Order
When the user clicks the button to place an order, take their currently chosen options (which are currently stored as state in the database) and construct a new order object to be placed in state.

Make sure there is a foreign key for each options type on the new object.
Make sure there is a new primary key value that is 1 greater than the current highest one.
Make sure there is a timestamp on the order.
Make sure you clear out the state that was being used to store the user options once the order state is created.
Trigger the stateChanged custom events and have the main module listen for it and regenerate all of the HTML.
Once regenerated, the new order should appear in the DOM. Example:
Order #1 was placed on 16895837301

Showing Prices on Jewelry Orders
You are currently showing a simple message for each jewelry order. Natasha wants to see the cost of each order in the list because if there are two orders that need to be done at the same time, she can focus on the one(s) that generate the most revenue first.

Finding the Metal Price
Go to your code where you are generating the HTML representation of the orders that customers place. Add the following code to find the price of the chosen metal.

const metals = getMetals()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price
Then, you can interpolate the price in the HTML string.

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

`<li>
    Order #${order.id} cost ${costString}
</li>`
Finding all the Prices
Now it's your turn. Follow the same process as above to find the price for the chosen size and style for each order. Then take those values and add them to the value of the totalCost variable.

Displaying Total Added Cost
Time to update the list of car orders to show the total cost of all customizations that the user has chosen.

Where are you generating the list of orders as HTML?
Use find() to get the related objects for wheels, paint, tech, and interior customizations.
Get the property from each object whose value is the cost.
Add all the costs together.
Display that cost on each HTML representation of the orders.

Custom Earring and Necklace Orders
💡
There are multiple ways to implement this feature. You will be stretching your Creative Thinking Core Skill because there is no "right way" to do this.
Add Ability to Choose Type
Add a radio button group above the order button that allows the user to choose a ring, earrings, or a necklace to be made with the materials chosen.



Pricing of Types
If the user chooses a ring, the default prices in the database will be used to show the cost.
If the user chooses earrings, the price will be 2x the default prices.
If the user chooses earrings, the price will be 4x the default prices.

Choosing Vehicle Models
💡
There are multiple ways to implement this feature. You will be stretching your Creative Thinking Core Skill because there is no "right way" to do this.
Provide the ability for the user to choose from one of the following vehicle types.

Car
SUV
Truck
If a car is chosen, the prices are standard.

If an SUV is chosen, the prices are 1.5x the standard.

If a car is chosen, the prices are 2.25x the standard.

User Choices as State
You seen the following phrase several times in the chapters of this book.

When the state of your data changes, your HTML must be regenerated to display that new state to the person using the application.

However, there's one case in your existing application where you are not following that design pattern.

When the user chooses a size, styles, or metal, you are updating the value of one of the keys in the orderBuilder state in your database. Right now, the HTML is not regenerated when that happens.

Your challenge is to regenerate the HTML every time one of the following functions is invoked in your database.js module.

setType()
setStyle()
setMetal()
Expressing User Choices in HTML
Once you get that working, you run into a problem. Since the HTML is being regenerated every time your choose an option, the user choices are not being retained.

In the animation below, you will see that there are logging messages that the HTML is being regenerated when the state is set, yet the radio buttons that the user selected are not selected.

That means that every time you regenerate the HTML for the radio buttons, you need to determine which one should be checked by default - based on the current state of orderBuilder.

Reference: How to select a radio button by default?

Data Access Layer
Currently, the database.js module has three main responsibilities.

Maintain state of application data.
Provide functions to access state.
Provide functions to change state.
Your challenge is to break apart the responsbilities.

The database module should only store state.

You need to create a brand new module whose sole responsibility is provide access to the state. You can name this module dataAccess.js.

It is this new data access module that all other modules should be working with, instead of directly with the database module. It will contain all of the get*() functions and set*() functions. It should import the database module so that it can interact with the state directly.

It will be the only module that directly interacts with the raw state.