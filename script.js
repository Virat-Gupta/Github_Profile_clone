// Add a sticky navbar on scroll
window.onscroll = function() {
	stickyNavbar();
};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function stickyNavbar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}


// Add event listener to the Follow button
const followBtn = document.querySelector('.btn');

followBtn.addEventListener('click', function() {
    followBtn.classList.toggle('following');
    if (followBtn.classList.contains('following')) {
    followBtn.textContent = 'Following';
    } else {
    followBtn.textContent = 'Follow';
    }
});