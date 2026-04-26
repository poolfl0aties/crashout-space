let box = document.querySelector(".box");
let boxCenter= {
	x: box.width / 2, 
    y: box.height / 2
};

document.addEventListener("mousemove", e => {
	let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);	    
	box.style.transform = `rotate(${angle}deg)`;  
})