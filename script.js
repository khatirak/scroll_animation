let saturnVisible = false;

// Add click event listener to trigger Saturn animation
document.addEventListener('click', () => {
	const saturn = document.getElementById('saturn');
	
	// Toggle Saturn visibility on each click
	if (saturnVisible) {
		saturn.style.bottom = '-400px';
		saturnVisible = false;
	} else {
		saturn.style.bottom = '50px';
		saturnVisible = true;
	}
});