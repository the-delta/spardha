function load()
{
	document.getElementsByClassName("shoefootball")[0].style.animationName = "fade";

	setTimeout(function(){
		document.getElementsByClassName("head")[0].innerHTML ="<h1>1<sup>st</sup>-4<sup>th</sup> APRIL SVVV's Spardha</h1><h2 class='game'>The Game is On!</h2>";
	}, 5500);
}


$(document).mouseup(function (e){
    var container = $(".display-box");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".display").remove();
        $("body").css("overflow","auto");
    }
});

function loadAbout()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-6 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadBadminton()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadTT()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadChess()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT THE CHESS TOURNAMENT");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var bulletList = document.createElement("ol");
	bulletList.setAttribute("type", "1");
	bulletList.className = "bullet-list";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("DURATION: April 1st-4th, 2017");
	listitem1.appendChild(listitem1text);
	var listitem2 = document.createElement("li");
	var listitem2text = document.createTextNode("TYPE: League based tournament");
	listitem2.appendChild(listitem2text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("VENUE: SVVV, Gram Baroli, Sanwer Road, Indore");
	listitem3.appendChild(listitem3text);
	var listitem4 = document.createElement("li");
	var listitem4text = document.createTextNode("Time per Round: 1 hour");
	listitem4.appendChild(listitem4text);


	var textitem1 = document.createTextNode("For registrations contact:");
	var textitem2 = document.createTextNode(" Saharsh Goyal : 8109789680");
	var textitem3 = document.createTextNode(" Pranay Jain : 9826641008");
	var textitem4 = document.createTextNode("On the spot registrations available.");

	var newline1 = document.createElement("br");
	var newline2 = document.createElement("br");
	var newline3 = document.createElement("br");
	var newline4 = document.createElement("br");
	var newline5 = document.createElement("br");

	var divtexts = document.createElement("div");


	divtexts.appendChild(newline1);
	divtexts.appendChild(textitem1);
	divtexts.appendChild(newline2);
	divtexts.appendChild(textitem2);
	divtexts.appendChild(newline3);
	divtexts.appendChild(textitem3);
	divtexts.appendChild(newline4);
	divtexts.appendChild(newline5);
	divtexts.appendChild(textitem4);


	var newline = document.createElement("br");
	divinfo.appendChild(newline);
	divinfo.appendChild(bulletList);
	divinfo.appendChild(divtexts);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
	div.appendChild(dispdiv);


	$("body").prepend(div);
	$(".bullet-list").append(listitem1, listitem2, listitem3, listitem4);
	$("body").css("overflow","hidden");
	return false;
}

function loadVolleyball()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadBasketball()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadSchedule()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

function loadRegulations()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}