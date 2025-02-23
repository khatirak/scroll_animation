window.addEventListener('scroll', () => {
	const saturn = document.getElementById('saturn');
	const scrollPos = window.scrollY;
	const windowHeight = window.innerHeight;
	
	// Section 1 -> Section 2: Saturn rises
	if (scrollPos > windowHeight * 0.5) {
	  saturn.style.bottom = '50px';
	} else {
	  saturn.style.bottom = '-400px';
	}
  });