const sections = document.querySelectorAll(".info-section");
const menuSection = document.querySelectorAll(".internal-link");
const divider = 1.5;

const linkCleaning = () => {
    menuSection.forEach(link => {
        link.parentNode.classList.remove("active");
    })
}

const currentSection = () => {
	let current;
	sections.forEach(section => {
		if (scrollY >= (section.offsetTop - section.clientHeight / divider)) {
			current = '#' + section.getAttribute('id');
		}
	});
	return current;
}

const activeSection = (current) => {
	menuSection.forEach(link => {
		if (link.getAttribute("href") == current) {
			link.parentNode.classList.add("active");
		return;
		}
    });
}

window.addEventListener("scroll", () => {
    linkCleaning();
	activeSection(currentSection());
})