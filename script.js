let saturnVisible = false;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const saturn = document.getElementById('saturn');
	
	// Ensure Saturn starts hidden
	saturn.style.bottom = '-400px';
	saturnVisible = false;
	
	// Add click event listener to trigger Saturn animation
	document.addEventListener('click', () => {
		// Toggle Saturn visibility on each click
		if (saturnVisible) {
			saturn.style.bottom = '-400px';
			saturnVisible = false;
		} else {
			saturn.style.bottom = '50px';
			saturnVisible = true;
		}
	});
});