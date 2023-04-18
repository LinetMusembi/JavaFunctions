// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.


// Create an array containing the names of all items in the inventory maximum of 10.
items = ["cheese","eggs","sauce","oil","cereals","vegetables","fruits"]
console.log(items)


// Create a separate array with the corresponding stock quantities of each item maximum of 10.
itemsQuantity = ["cheese",60,"eggs",30,"sauce",50,"oil",70,"cereals",90,"vegetables",20,"fruits",34]
console.log(itemsQuantity)

// Write a function to add a new item to the inventory, updating both arrays.
function newArray(items,itemsQuantity){
    items.push("milk")
    console.log(items)

    itemsQuantity.push("milk",20);
    console.log(itemsQuantity)
}
newArray(items,itemsQuantity)

// Write a function to update the stock quantity of an existing item.
function updateStock(items,itemsQuantity){
    return items,itemsQuantity

}
console.log(items,itemsQuantity)

// Write a function to calculate the total number of items in the inventory.
function totalLength(items){
    let itemArr = (items.length)
    console.log(itemArr)


}
totalLength(items)

// Write a function to find the item with the lowest stock quantity.
let min = items[0]
function lowestQuantity(items){
    for(let i=0;i<items.length;i++){
        if(items[i]>min)
        min = items[i]
    }
    console.log(min)
    

                   
}
lowestQuantity(items)

