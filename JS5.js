// Define a class for representing individual menu items
class MenuItem {
    constructor(name, price) {
        this.name = name; // Name of the menu item
        this.price = price; // Price of the menu item
    }

    // Method to display the details of the menu item
    display() {
        return `${this.name}: $${this.price}`;
    }
}

// Define a class for managing the restaurant menu
class RestaurantMenu {
    constructor() {
        this.menuItems = []; // Array to store menu items
    }

    // Method to add a new menu item
    addItem(name, price) {
        const newItem = new MenuItem(name, price); // Create a new menu item object
        this.menuItems.push(newItem); // Add the new item to the menu
        console.log(`Item '${name}' added to the menu.`);
    }

    // Method to view all menu items
    viewItems() {
        console.log("Restaurant Menu:");
        if (this.menuItems.length === 0) {
            console.log("Menu is empty.");
        } else {
            // Display each menu item
            this.menuItems.forEach(item => {
                console.log(item.display());
            });
        }
    }

    // Method to delete a menu item by name
    deleteItem(name) {
        const index = this.menuItems.findIndex(item => item.name === name); // Find the index of the item with the specified name
        if (index !== -1) {
            // If the item is found, remove it from the menu
            this.menuItems.splice(index, 1);
            console.log(`Item '${name}' deleted from the menu.`);
        } else {
            console.log("Item not found in the menu.");
        }
    }
}

// Example usage:
const menu = new RestaurantMenu(); // Create a new instance of the RestaurantMenu class

// Add some initial menu items
menu.addItem("Burger", 8.99);
menu.addItem("Pizza", 12.99);
menu.addItem("Salad", 6.99);

menu.viewItems(); // View all menu items

menu.deleteItem("Pizza"); // Delete an item

menu.viewItems(); // View updated menu
