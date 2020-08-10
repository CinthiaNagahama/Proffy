// Find button
document.querySelector("#add-time")

// When the button is clicked
.addEventListener("click", cloneField)

// Execute action
function cloneField(){
    // Duplicates field container
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Refresh fields
    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(field) {
        field.value = ""
    })

    // Put the duplicate on the page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}