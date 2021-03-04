var checkbox = document.getElementById("checkbox");
var label_switch = document.getElementById("switch");
var toggle = document.getElementById("toggle");
var price = document.getElementById("usd");
var views = document.getElementById("views");
var slider = document.getElementById("oneRange");
var sum = 0;

function loadValue()
{
	if(checkbox.checked)
		sum = (0.75*(0.05*slider.value+11)).toFixed(2);
	else
		sum = (0.05*slider.value+11).toFixed(2);

	views.innerHTML = slider.value + "K";
	price.innerHTML = "$" + sum;
}

window.onload = loadValue();
slider.addEventListener("input", loadValue);

function bananas()
{
	if(checkbox.checked)
		{
			label_switch.style.backgroundColor = "#A5F3EB";
			toggle.style.right = "4px";
		}
	else
		{
			label_switch.style.backgroundColor = "#CDD7EE";
			toggle.style.right = "22px";
		}

	loadValue();
}

checkbox.addEventListener("click", bananas);

slider.addEventListener("input", function()
{
	slider.classList.add(".js");
})