/* Name: Amrita S
 * Date: 7/7/21
 * Page: landingPageMain.js
 * See this page in action! https://www.amritascreations.com/landingPage.html
 */

// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const caLocation = document.getElementById('caLocation');

// Options
const showAmPm = true;

// Show Time
function showTime()
{
	let today = new Date(),
		hour = today.getHours(), // # from 0 - 23
		min = today.getMinutes(),
		sec = today.getSeconds();
	
	// Set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';
	
	// 12 Hour Format
	hour = hour % 12 || 12;
	
	// Output the time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
	
	setTimeout(showTime, 1000); // 1 sec
}

// Add zeros
function addZero(n)
{
	return ((parseInt(n, 10) < 10 ? '0' : '') + n);
}

// Set background and Greeting
function setBgAndGreet()
{
	let today = new Date(),
		hour = today.getHours();
	if(hour < 12) // morning
	{
		document.body.style.backgroundImage= "url('../img/DSC07295splashCliffHwy101.JPG')";
		document.body.style.backgroundSize = "100% auto";
		greeting.textContent = 'Good Morning';
		caLocation.textContent = 'Davenport Pier in Davenport, Ca';
	}
	else if(hour < 18) // Afternoon
	{
		document.body.style.backgroundImage= "url('../img/DSC07148RockSplashPtLobos.JPG')";
		document.body.style.backgroundSize= "100% auto";
		greeting.textContent = 'Good Afternoon';
		caLocation.textContent = 'Point Lobos State Natural Reserve in Caramel-By-The-Sea, Ca';
	}
	else // Evening
	{
		document.body.style.backgroundImage= "url('../img/DSC07307SFCliff.JPG')";
		document.body.style.backgroundSize= "100% auto";
		greeting.textContent = 'Good Evening';
		caLocation.textContent = 'San Francisco, Ca';
	}
}

// Get Name
function getName()
{
	if(localStorage.getItem('name') == null) // No name in local storage
	{
		name.textContent = '[Enter Name]';
	}
	else
	{
		name.textContent = localStorage.getItem('name');
	}
}

// Set Name
function setName(e)
{
	// keypress - user hit enter
	if(e.type === 'keypress')
	{
	   if(e.which == 13 || e.keyCode == 13) // pressed the enter key which is #13
		{
			localStorage.setItem('name', e.target.innerText);
			name.blur(); // Doesn't take us to the next line
		}
	}
	else
	{
		localStorage.setItem('name', e.target.innerText);
	}
}

// Get Focus
function getFocus()
{
	if(localStorage.getItem('focus') == null) // No name in local storage
	{
		focus.textContent = '[Enter Focus]';
	}
	else
	{
		focus.textContent = localStorage.getItem('focus');
	}
}

// Set Focus
function setFocus(e)
{
	// keypress - user hit enter
	if(e.type === 'keypress')
	{
	   if(e.which == 13 || e.keyCode == 13) // pressed the enter key which is #13
		{
			localStorage.setItem('focus', e.target.innerText);
			focus.blur(); // Doesn't take us to the next line
		}
	}
	else
	{
		localStorage.setItem('focus', e.target.innerText);
	}
}

// Add event listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgAndGreet();
getName();
getFocus();