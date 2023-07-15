const SUBMITBUTTON = document.querySelector(".submit-button");
const CLEARBUTTON = document.querySelector(".clear-button");
const OL = document.querySelector("#ordered-list");
const ITEMINPUTFIELD = document.querySelector("#item-input");

ITEMINPUTFIELD.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        AddListItem();
    }
});

SUBMITBUTTON.addEventListener("click", () => {
    AddListItem();
    ITEMINPUTFIELD.focus();
});

CLEARBUTTON.addEventListener("click", () => {
    RemoveAllListItems();
    ITEMINPUTFIELD.focus();
});

let AddListItem = () => {
    // 1. Create a list item container (div).
    let listItemContainer = document.createElement("div")
    OL.appendChild(listItemContainer);
    listItemContainer.classList.add("list-item-container");

    // 2. Create a list item (li) inside the list item container.
    let listItem = document.createElement("li")
    listItemContainer.appendChild(listItem);
    listItem.innerHTML = document.querySelector(".item-input").value;;

    // 3. Create a delete list button (button) with the value of "X" inside the list item container.
    let deleteButton = document.createElement("button")
    listItemContainer.appendChild(deleteButton);
    deleteButton.innerHTML = "X"
    deleteButton.classList.add("delete-list-button");

    // 4. Reset input field.
    ITEMINPUTFIELD.value = "";

    // 5. Add an event listener to the delete list button that when clicked, deletes the list item container.
    deleteButton.addEventListener("click", () => {
        console.log(listItemContainer)
        console.log("^ was removed.")
        listItemContainer.remove();
    })
}

let RemoveAllListItems = () => {
    while (OL.firstChild) {
        OL.removeChild(OL.firstChild);
    }
}
