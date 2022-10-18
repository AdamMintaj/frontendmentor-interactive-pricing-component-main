// These are my awesome variables
const slider = document.querySelector(".pricingComponent__slider");
const checkbox = document.querySelector(".switch__checkbox");
const viewsHolder = document.getElementById("views");
const priceHolder = document.getElementById("price");

const prices = [
	{ views: "10K", price: 8 },
	{ views: "50K", price: 12 },
	{ views: "100K", price: 16 },
	{ views: "500K", price: 24 },
	{ views: "1M", price: 36 },
];

// This funciton colors the covered part of the slider track
function handleProgressBar() {
	let value = slider.value;
	slider.style.backgroundSize = `${2.5 * value}%`;
}

slider.addEventListener("input", handleProgressBar);

// This function displays pageviews and price
function handleInput() {
	let discount = checkbox.checked;
	let currentOption = prices[slider.value / 10];

	viewsHolder.innerHTML = `${currentOption.views} PAGEVIEWS`;
	if (discount) {
		priceHolder.innerHTML = `${currentOption.price * 0.75}$`;
	} else {
		priceHolder.innerHTML = `${currentOption.price}$`;
	}
}

slider.addEventListener("input", handleInput);
checkbox.addEventListener("input", handleInput);
window.onload = handleInput();
