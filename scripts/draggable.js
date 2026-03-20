const draggableElement = document.querySelector('.draggableElement');
let offsetX = 0, offsetY = 0;
draggableElement.addEventListener('mousedown', function (e) {
    // Preventing default behavior to avoid unwanted selections
    e.preventDefault();

    // Calculating initial offsets
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    // Adding the 'dragging' class to apply styling changes
    draggableElement.classList.add('dragging');

    // Adding event listeners for mousemove and mouseup
    document.addEventListener('mousemove', dragElement);
    document.addEventListener('mouseup', stopDragging);
});
function dragElement(e) {
    // Updating the element's position based on mouse movements
    draggableElement.style.left = `${e.clientX - offsetX}px`;
    draggableElement.style.top = `${e.clientY - offsetY}px`;
}
function stopDragging(e) {
    // Preventing default behavior to avoid unwanted selections
    e.preventDefault();

    // Removing the 'dragging' class to revert styling changes
    draggableElement.classList.remove('dragging');

    // Removing event listeners to stop tracking mouse movements
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
}