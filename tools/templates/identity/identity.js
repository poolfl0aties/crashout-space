const filterArray = ["gender", "alterhuman", "orientation"];

function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}

function filterItem(filter) {
    console.log("filter");
    for(i=0 ; i < filterArray.length ; i++) { // for the number of items in the filter list
        if(filterArray[i] !== filter) { // if the item selected doesn't match the input filter
            let object = filterArray[i];
            let objectArray = document.getElementsByClassName(object); // get all the elements with the class
            for(i=0 ; i < objectArray.length ; i++ ) {
                objectArray[i].classList.add("hidden");
            }
        }
    }
}