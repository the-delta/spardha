function load()
{
	document.getElementsByClassName("shoefootball")[0].style.animationName = "fade";
	setTimeout(function(){
		document.getElementsByClassName("spardha-logo")[0].style.animationName = "rotatelogo";
	}, 1000);
	setTimeout(function(){
		document.getElementsByClassName("head")[0].innerHTML ="<h1>1<sup>st</sup>-4<sup>th</sup> APRIL SVVV's Spardha</h1><h2 class='game'>The Game is On!</h2>";
	}, 2500);
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

function goBack()
{
	$(".display").remove();
    $("body").css("overflow","auto");
}

function loadAbout()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT SVVV");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var textitem1 = document.createTextNode("Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university established under Madhya Pradesh Niji Vishwavidyalaya ( Sthapana Avam Sanchalan) Adhiniyam in 2015 at Indore (India). The University has been established with a vision to be leader in shaping better future for mankind through quality education, training and research. It shall pursue the mission to make a difference in sustaining the growth of global societies by developing socially responsible citizens. Value based education being at the helm, the University shall promote endurance, excellence, fairness, honesty and transparency as its core values. Some of the objectives of the University are as under:");
	var bulletList1 = document.createElement("ul");
	bulletList1.setAttribute("type", "disc");
	bulletList1.className = "bullet-list-1";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("To provide teaching and training in higher education and make provision for research as well as advancement and dissemination of knowledge.");
	listitem1.appendChild(listitem1text);
	var listitem2 = document.createElement("li");
	var listitem2text = document.createTextNode("To ensure world class quality in its offerings and create higher levels of intellectual abilities.");
	listitem2.appendChild(listitem2text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("To create centres of excellence for research and development for sharing knowledge and its applications.");
	listitem3.appendChild(listitem3text);

	bulletList1.appendChild(listitem1);
	bulletList1.appendChild(listitem2);
	bulletList1.appendChild(listitem3);

	var textitem2 = document.createTextNode("Shri Vaishnav Vidyapeeth Vishwavidyalaya at Indore is a multi-disciplinary university focusing on the needs of various segments of the society.");

	divinfo.appendChild(textitem1);
	divinfo.appendChild(bulletList1);
	divinfo.appendChild(textitem2);

	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
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

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT THE BADMINTON TOURNAMENT");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var general = document.createElement("h3");
	general.className = "general-rules-heading";
	var generaltext = document.createTextNode("GENERAL RULES");
	general.appendChild(generaltext);

	var bulletList1 = document.createElement("ol");
	bulletList1.setAttribute("type", "1");
	bulletList1.className = "bullet-list-1";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("All players should come in proper kits (Shorts, T-Shirts).");
	listitem1.appendChild(listitem1text);
	var listitem2 = document.createElement("li");
	var listitem2text = document.createTextNode("Players should have clean shoes (Non Marking) and should be used only on the court (Shoes should be changed only on arriving at the court).");
	listitem2.appendChild(listitem2text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("All the rules apart from mentioned are according to the World Badminton Federation\'s rule book.");
	listitem3.appendChild(listitem3text);
	var listitem4 = document.createElement("li");
	var listitem4text = document.createTextNode("Use of abusive of foul language during the play can lead to technical fouls or expulsion depending on the referee.");
	listitem4.appendChild(listitem4text);
	var listitem5 = document.createElement("li");
	var listitem5text = document.createTextNode("Teams must arrive at the court 20 minutes before the scheduled start time.");
	listitem5.appendChild(listitem5text);
	var listitem6 = document.createElement("li");
	var listitem6text = document.createTextNode("Walkover will be given to a team if the opponent team is not able to reach the ground within 30 minutes of the scheduled time.");
	listitem6.appendChild(listitem6text);

	bulletList1.appendChild(listitem1);
	bulletList1.appendChild(listitem2);
	bulletList1.appendChild(listitem3);
	bulletList1.appendChild(listitem4);
	bulletList1.appendChild(listitem5);
	bulletList1.appendChild(listitem6);

	var format = document.createElement("h3");
	format.className = "format-heading";
	var formattext = document.createTextNode("FORMAT");
	format.appendChild(formattext);

	var bulletList2 = document.createElement("ol");
	bulletList2.setAttribute("type", "1");
	bulletList2.className = "bullet-list-2";
	var listitem21 = document.createElement("li");
	var listitem21text = document.createTextNode("Each Clash (between teams) will have 5 matches for MEN and 3 matches for WOMEN.");
	listitem21.appendChild(listitem21text);
	var listitem22 = document.createElement("li");
	var listitem22text = document.createTextNode("ORDER :");
	var listitem22bullet = document.createElement("ul");
	listitem22bullet.setAttribute("type", "disc");
	var listitem22item1 = document.createElement("li");
	var listitem22item1text = document.createTextNode("MEN - 1st singles, 2nd singles, 1st doubles, 3rd singles, 2nd doubles.");
	listitem22item1.appendChild(listitem22item1text);
	var listitem22item2 = document.createElement("li");
	var listitem22item2text = document.createTextNode("WOMEN - 1st singles, 1st doubles, 2nd singles.");
	listitem22item2.appendChild(listitem22item2text);
	listitem22bullet.appendChild(listitem22item1);
	listitem22bullet.appendChild(listitem22item2);

	listitem22.appendChild(listitem22text);
	listitem22.appendChild(listitem22bullet);

	bulletList2.appendChild(listitem21);
	bulletList2.appendChild(listitem22);

	var participation = document.createElement("h3");
	participation.className = "participation-heading";
	var participationtext = document.createTextNode("PARTICIPATION");
	participation.appendChild(participationtext);

	var bulletList3 = document.createElement("ol");
	bulletList3.setAttribute("type", "1");
	bulletList3.className = "bullet-list-3";
	var listitem31 = document.createElement("li");
	var listitem31text = document.createTextNode("Each team must consist of a minimum of 4 and maximum of 5 players in a men\'s team and a minimum of 2 and maximum of 4 players in a women\'s team.");
	listitem31.appendChild(listitem31text);
	var listitem32 = document.createElement("li");
	var listitem32text = document.createTextNode("A player can play a maximum of two matches that is 1 singles and 1 doubles.");
	listitem32.appendChild(listitem32text);

	bulletList3.appendChild(listitem31);
	bulletList3.appendChild(listitem32);

	divinfo.appendChild(general);
	divinfo.appendChild(bulletList1);

	divinfo.appendChild(format);
	divinfo.appendChild(bulletList2);

	divinfo.appendChild(participation);
	divinfo.appendChild(bulletList3);

	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
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

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT THE TABLE TENNIS TOURNAMENT");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var general = document.createElement("h3");
	general.className = "general-rules-heading";
	var generaltext = document.createTextNode("GENERAL RULES");
	general.appendChild(generaltext);

	var bulletList1 = document.createElement("ol");
	bulletList1.setAttribute("type", "1");
	bulletList1.className = "bullet-list-1";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("Matches will be conducted as per standard ITTF rules and regulations.");
	listitem1.appendChild(listitem1text);
	var listitem2 = document.createElement("li");
	var listitem2text = document.createTextNode("Apart from the teams offbeat events such as singles, doubles and shuffle will be held depending on the time available.");
	listitem2.appendChild(listitem2text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("Use of abusive foul language during the play can lead to technical fouls or expulsion depending on the referee.");
	listitem3.appendChild(listitem3text);
	var listitem4 = document.createElement("li");
	var listitem4text = document.createTextNode("Teams must arrive in the TT room 20 minutes before the scheduled start time.");
	listitem4.appendChild(listitem4text);
	var listitem5 = document.createElement("li");
	var listitem5text = document.createTextNode("Walkover will be given to a team if the opponent team is not able to reach the venue within 30 minutes of the scheduled time.");
	listitem5.appendChild(listitem5text);

	bulletList1.appendChild(listitem1);
	bulletList1.appendChild(listitem2);
	bulletList1.appendChild(listitem3);
	bulletList1.appendChild(listitem4);
	bulletList1.appendChild(listitem5);

	var format = document.createElement("h3");
	format.className = "format-heading";
	var formattext = document.createTextNode("FORMAT");
	format.appendChild(formattext);

	var bulletList2 = document.createElement("ol");
	bulletList2.setAttribute("type", "1");
	bulletList2.className = "bullet-list-2";
	var listitem21 = document.createElement("li");
	var listitem21text = document.createTextNode("Team matches will be held in ABC-XYZ format. There won\'t be any doubles match in the team\'s event. The order in which the matches will be held as follows:");
	var listitem21bullet = document.createElement("ul");
	listitem21bullet.setAttribute("type", "disc");
	var listitem21item1 = document.createElement("li");
	listitem21item1.innerHTML = 'MEN: <table class="table table-striped tttable"><tr><th>Order</th><th>Type</th><th>ABC Team</th><th>XYZ Team</th></tr><tr><td>1</td><td>Singles</td><td>A</td><td>X</td></tr><tr><td>2</td><td>Singles</td><td>B</td><td>Y</td></tr><tr><td>3</td><td>Singles</td><td>C</td><td>Z</td></tr><tr><td>4</td><td>Singles</td><td>A</td><td>Y</td></tr><tr><td>5</td><td>Singles</td><td>B</td><td>X</td></tr></table>';
	var listitem21item2 = document.createElement("li");
	listitem21item2.innerHTML = 'WOMEN: <table class="table table-striped tttable"><tr><th>Order</th><th>Type</th><th>ABC Team</th><th>XYZ Team</th></tr><tr><td>1</td><td>Singles</td><td>A</td><td>X</td></tr><tr><td>2</td><td>Singles</td><td>B</td><td>Y</td></tr><tr><td>3</td><td>Singles</td><td>C</td><td>Z</td></tr><tr><td>4</td><td>Singles</td><td>A</td><td>Y</td></tr><tr><td>5</td><td>Singles</td><td>B</td><td>X</td></tr></table>';
	listitem21bullet.appendChild(listitem21item1);
	listitem21bullet.appendChild(listitem21item2);
	listitem21.appendChild(listitem21text);
	listitem21.appendChild(listitem21bullet);


	var listitem22 = document.createElement("li");
	var listitem22text = document.createTextNode("Every individual match in the league stage will be best of 3 games with 11 points in every game. For the knockout stage the individual matches will be best of 5 games with 11 points in every game.");
	listitem22.appendChild(listitem22text);

	bulletList2.appendChild(listitem21);
	bulletList2.appendChild(listitem22);

	var participation = document.createElement("h3");
	participation.className = "participation-heading";
	var participationtext = document.createTextNode("PARTICIPATION");
	participation.appendChild(participationtext);

	var bulletList3 = document.createElement("ol");
	bulletList3.setAttribute("type", "1");
	bulletList3.className = "bullet-list-3";
	var listitem31 = document.createElement("li");
	var listitem31text = document.createTextNode("Each team must consist of a minimum of 3 and maximum of 5 players (2 extras).");
	listitem31.appendChild(listitem31text);

	bulletList3.appendChild(listitem31);

	divinfo.appendChild(general);
	divinfo.appendChild(bulletList1);

	divinfo.appendChild(format);
	divinfo.appendChild(bulletList2);

	divinfo.appendChild(participation);
	divinfo.appendChild(bulletList3);

	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
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

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

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

	var aboutRules = document.createElement("h2");
	aboutRules.className = "rules-heading";
	var aboutRulestext = document.createTextNode("RULES FOR THE TOURNAMENT");
	aboutRules.appendChild(aboutRulestext);

	var divinfoRules = document.createElement("div");
	divinfoRules.className = "div-info-rules";

	var bulletRulesList = document.createElement("ol");
	bulletRulesList.setAttribute("type", "1");
	bulletRulesList.className = "bulletrules-list";
	var listitem1rules = document.createElement("li");
	var listitem1rulestext = document.createTextNode("Chess rules as per FIDE SYSTEM will be followed.");
	listitem1rules.appendChild(listitem1rulestext);
	var listitem2rules = document.createElement("li");
	var listitem2rulestext = document.createTextNode("No phones are allowed during active games.");
	listitem2rules.appendChild(listitem2rulestext);
	var listitem3rules = document.createElement("li");
	var listitem3rulestext = document.createTextNode("Under any claim, final decision of the arbiter will be followed.");
	listitem3rules.appendChild(listitem3rulestext);


	var newline = document.createElement("br");
	var newline6 = document.createElement("br");
	var newline7 = document.createElement("br");
	divinfo.appendChild(newline);
	divinfo.appendChild(bulletList);
	divinfo.appendChild(divtexts);
	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
	dispdiv.appendChild(newline6);
	dispdiv.appendChild(aboutRules);
	divinfoRules.appendChild(newline7);
	divinfoRules.appendChild(bulletRulesList);
	dispdiv.appendChild(divinfoRules);
	div.appendChild(dispdiv);


	$("body").prepend(div);
	$(".bullet-list").append(listitem1, listitem2, listitem3, listitem4);
	$(".bulletrules-list").append(listitem1rules, listitem2rules, listitem3rules);
	$("body").css("overflow","hidden");
	return false;
}

function loadVolleyball()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT THE VOLLEYBALL TOURNAMENT");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var serve = document.createElement("h3");
	serve.className = "serve-rules-heading";
	var servetext = document.createTextNode("THE SERVE");
	serve.appendChild(servetext);

	var bulletList1 = document.createElement("ol");
	bulletList1.setAttribute("type", "1");
	bulletList1.className = "bullet-list-1";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("Server must serve from behind the end line until after contact.");
	listitem1.appendChild(listitem1text);
	var listitem2 = document.createElement("li");
	var listitem2text = document.createTextNode("Ball may be served underhand or overhand.");
	listitem2.appendChild(listitem2text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("Ball must be clearly visible to opponents before serve.");
	listitem3.appendChild(listitem3text);
	var listitem4 = document.createElement("li");
	var listitem4text = document.createTextNode("Served ball may graze the net and drop to theother side for point.");
	listitem4.appendChild(listitem4text);
	var listitem5 = document.createElement("li");
	var listitem5text = document.createTextNode("First game serve is determined by a volley, each subsequent game shall be served by the previous game loser.");
	listitem5.appendChild(listitem5text);
	var listitem6 = document.createElement("li");
	var listitem6text = document.createTextNode("Serve must be returned by a bump only. no setting or attacking a serve.");
	listitem6.appendChild(listitem6text);

	bulletList1.appendChild(listitem1);
	bulletList1.appendChild(listitem2);
	bulletList1.appendChild(listitem3);
	bulletList1.appendChild(listitem4);
	bulletList1.appendChild(listitem5);
	bulletList1.appendChild(listitem6);

	var scoring = document.createElement("h3");
	scoring.className = "scoring-rules-heading";
	var scoringtext = document.createTextNode("SCORING");
	scoring.appendChild(scoringtext);

	var bulletList2 = document.createElement("ol");
	bulletList2.setAttribute("type", "1");
	bulletList2.className = "bullet-list-2";
	var listitem21 = document.createElement("li");
	var listitem21text = document.createTextNode("Rally scoring will be used.");
	listitem21.appendChild(listitem21text);
	var listitem22 = document.createElement("li");
	var listitem22text = document.createTextNode("There will be a point scored on every score of the ball.");
	listitem22.appendChild(listitem22text);
	var listitem23 = document.createElement("li");
	var listitem23text = document.createTextNode("Offense will score on a defense miss or out of bounds hit.");
	listitem23.appendChild(listitem23text);
	var listitem24 = document.createElement("li");
	var listitem24text = document.createTextNode("Defense will score on an offensive miss, out of bounds hit, or serve into the net.");
	listitem24.appendChild(listitem24text);
	var listitem25 = document.createElement("li");
	var listitem25text = document.createTextNode("Game will be played to 25 pts.");
	listitem25.appendChild(listitem25text);
	var listitem26 = document.createElement("li");
	var listitem26text = document.createTextNode("Must win by 2 points.");
	listitem26.appendChild(listitem26text);

	bulletList2.appendChild(listitem21);
	bulletList2.appendChild(listitem22);
	bulletList2.appendChild(listitem23);
	bulletList2.appendChild(listitem24);
	bulletList2.appendChild(listitem25);
	bulletList2.appendChild(listitem26);

	var rotation = document.createElement("h3");
	rotation.className = "rotation-rules-heading";
	var rotationtext = document.createTextNode("ROTATION");
	rotation.appendChild(rotationtext);

	var bulletList3 = document.createElement("ol");
	bulletList3.setAttribute("type", "1");
	bulletList3.className = "bullet-list-3";
	var listitem31 = document.createElement("li");
	var listitem31text = document.createTextNode("Team will rotate each time they win the serve.");
	listitem31.appendChild(listitem31text);
	var listitem32 = document.createElement("li");
	var listitem32text = document.createTextNode("Players shall rotate in a clockwise manner.");
	listitem32.appendChild(listitem32text);
	var listitem33 = document.createElement("li");
	var listitem33text = document.createTextNode("There shall be 4-6 players on each side.");
	listitem33.appendChild(listitem33text);

	bulletList3.appendChild(listitem31);
	bulletList3.appendChild(listitem32);
	bulletList3.appendChild(listitem33);

	var play = document.createElement("h3");
	play.className = "play-rules-heading";
	var playtext = document.createTextNode("PLAYING THE GAME");
	play.appendChild(playtext);

	var bulletList4 = document.createElement("ol");
	bulletList4.setAttribute("type", "1");
	bulletList4.className = "bullet-list-4";
	var listitem41 = document.createElement("li");
	var listitem41text = document.createTextNode("Maximum of three hits per side.");
	listitem41.appendChild(listitem41text);
	var listitem42 = document.createElement("li");
	var listitem42text = document.createTextNode("Player may not hit the ball twice in succession (A block is not considered a hit).");
	listitem42.appendChild(listitem42text);
	var listitem43 = document.createElement("li");
	var listitem43text = document.createTextNode("Ball may be played off the net during a volley and on serve.");
	listitem43.appendChild(listitem43text);
	var listitem44 = document.createElement("li");
	var listitem44text = document.createTextNode("A ball touching a boundary line is good.");
	listitem44.appendChild(listitem44text);
	var listitem45 = document.createElement("li");
	var listitem45text = document.createTextNode("A legal hit is contact with the ball by a player body above and including the waist which does not allow the ball to visibly come to a rest.");
	listitem45.appendChild(listitem45text);
	var listitem46 = document.createElement("li");
	var listitem46text = document.createTextNode("If two or more players contact the ball simultaneously, it is considered one play and the players involved may not participate in the next play.");
	listitem46.appendChild(listitem46text);
	var listitem47 = document.createElement("li");
	var listitem47text = document.createTextNode("A player must not block or attack a serve.");
	listitem47.appendChild(listitem47text);
	var listitem48 = document.createElement("li");
	var listitem48text = document.createTextNode("Switching positions will be allowed only between front line players ( After the serve only ).");
	listitem48.appendChild(listitem48text);

	bulletList4.appendChild(listitem41);
	bulletList4.appendChild(listitem42);
	bulletList4.appendChild(listitem43);
	bulletList4.appendChild(listitem44);
	bulletList4.appendChild(listitem45);
	bulletList4.appendChild(listitem46);
	bulletList4.appendChild(listitem47);
	bulletList4.appendChild(listitem48);

	var violation = document.createElement("h3");
	violation.className = "violation-rules-heading";
	var violationtext = document.createTextNode("BASIC RULE VIOLATIONS");
	violation.appendChild(violationtext);

	var bulletList5 = document.createElement("ol");
	bulletList5.setAttribute("type", "1");
	bulletList5.className = "bullet-list-5";
	var listitem51 = document.createElement("li");
	var listitem51text = document.createTextNode("Stepping on or over the line on a serve.");
	listitem51.appendChild(listitem51text);
	var listitem52 = document.createElement("li");
	var listitem52text = document.createTextNode("Failure to serve the ball over the net successfully.");
	listitem52.appendChild(listitem52text);
	var listitem53 = document.createElement("li");
	var listitem53text = document.createTextNode("Hitting the ball illegally ( Carrying, Palming, Throwing, etc).");
	listitem53.appendChild(listitem53text);
	var listitem54 = document.createElement("li");
	var listitem54text = document.createTextNode("Touches of the net with any part of the body while the ball is in play. If the ball is driven into the net with such force that it causes the net to contact an opposing player, no foul will be called, and the ball shall continue to be in play.");
	listitem54.appendChild(listitem54text);
	var listitem55 = document.createElement("li");
	var listitem55text = document.createTextNode("Reaching over the net, except under these conditions a) When executing a follow-through b) When blocking a ball which is in the opponents court but is being returned ( the blocker must not contact the ball until after the opponent who is attempting to return the ball makes contact). Except to block the third play.");
	listitem55.appendChild(listitem55text);
	var listitem56 = document.createElement("li");
	var listitem56text = document.createTextNode("Reaches under the net ( if it interferes with the ball or opposing player ).");
	listitem56.appendChild(listitem56text);
	var listitem57 = document.createElement("li");
	var listitem57text = document.createTextNode("Failure to serve in the correct order.");
	listitem57.appendChild(listitem57text);
	var listitem58 = document.createElement("li");
	var listitem58text = document.createTextNode("Blocks or spikes from a position which is clearly not behind the 10-foot line while in a back row position.");
	listitem58.appendChild(listitem58text);

	bulletList5.appendChild(listitem51);
	bulletList5.appendChild(listitem52);
	bulletList5.appendChild(listitem53);
	bulletList5.appendChild(listitem54);
	bulletList5.appendChild(listitem55);
	bulletList5.appendChild(listitem56);
	bulletList5.appendChild(listitem57);
	bulletList5.appendChild(listitem58);

	var court = document.createElement("h3");
	court.className = "court-rules-heading";
	var courttext = document.createTextNode("THE COURT");
	court.appendChild(courttext);

	var bulletList6 = document.createElement("ol");
	bulletList6.setAttribute("type", "1");
	bulletList6.className = "bullet-list-6";
	var listitem61 = document.createElement("li");
	var listitem61text = document.createTextNode("Both indoor and outdoor courts are 18 m x 9m.");
	listitem61.appendChild(listitem61text);
	var listitem62 = document.createElement("li");
	var listitem62text = document.createTextNode("Indoor courts also include an attack area designated bya line 3 m back from the center line.");
	listitem62.appendChild(listitem62text);

	bulletList6.appendChild(listitem61);
	bulletList6.appendChild(listitem62);

	var net = document.createElement("h3");
	net.className = "net-rules-heading";
	var nettext = document.createTextNode("NET HEIGHT");
	net.appendChild(nettext);

	var bulletList7 = document.createElement("ol");
	bulletList7.setAttribute("type", "1");
	bulletList7.className = "bullet-list-7";
	var listitem71 = document.createElement("li");
	var listitem71text = document.createTextNode("Net height for men, co-ed mixed 6 is 2.43 meters.");
	listitem71.appendChild(listitem71text);
	var listitem72 = document.createElement("li");
	var listitem72text = document.createTextNode("Net height for women is 2.24 m.");
	listitem72.appendChild(listitem72text);

	bulletList7.appendChild(listitem71);
	bulletList7.appendChild(listitem72);


	divinfo.appendChild(serve);
	divinfo.appendChild(bulletList1);
	divinfo.appendChild(scoring);
	divinfo.appendChild(bulletList2);
	divinfo.appendChild(rotation);
	divinfo.appendChild(bulletList3);
	divinfo.appendChild(play);
	divinfo.appendChild(bulletList4);
	divinfo.appendChild(violation);
	divinfo.appendChild(bulletList5);
	divinfo.appendChild(court);
	divinfo.appendChild(bulletList6);
	divinfo.appendChild(net);
	divinfo.appendChild(bulletList7);


	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
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

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("ABOUT THE BASKETBALL TOURNAMENT");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	var general = document.createElement("h3");
	general.className = "general-rules-heading";
	var generaltext = document.createTextNode("GENERAL RULES");
	general.appendChild(generaltext);

	var bulletList1 = document.createElement("ol");
	bulletList1.setAttribute("type", "1");
	bulletList1.className = "bullet-list-1";
	var listitem1 = document.createElement("li");
	var listitem1text = document.createTextNode("All players should come in proper kits (eg. Jersey and other sport gear).");
	listitem1.appendChild(listitem1text);
	var listitem3 = document.createElement("li");
	var listitem3text = document.createTextNode("All the rules apart from mentioned are according to the FIBA rule book.");
	listitem3.appendChild(listitem3text);
	var listitem4 = document.createElement("li");
	var listitem4text = document.createTextNode("Use of abusive of foul language during the play can lead to technical fouls or expulsion depending on the referee.");
	listitem4.appendChild(listitem4text);
	var listitem5 = document.createElement("li");
	var listitem5text = document.createTextNode("Teams must arrive at the court 20 minutes before the scheduled start time.");
	listitem5.appendChild(listitem5text);
	var listitem6 = document.createElement("li");
	var listitem6text = document.createTextNode("Walkover will be given to a team if the opponent team is not able to reach the ground within 30 minutes of the scheduled time.");
	listitem6.appendChild(listitem6text);

	bulletList1.appendChild(listitem1);
	bulletList1.appendChild(listitem3);
	bulletList1.appendChild(listitem4);
	bulletList1.appendChild(listitem5);
	bulletList1.appendChild(listitem6);

	var format = document.createElement("h3");
	format.className = "format-heading";
	var formattext = document.createTextNode("FORMAT");
	format.appendChild(formattext);

	/*var bulletList2 = document.createElement("ol");
	bulletList2.setAttribute("type", "1");
	bulletList2.className = "bullet-list-2";
	var listitem21 = document.createElement("li");
	var listitem21text = document.createTextNode("Each Clash (between teams) will have 5 matches for MEN and 3 matches for WOMEN.");
	listitem21.appendChild(listitem21text);
	var listitem22 = document.createElement("li");
	var listitem22text = document.createTextNode("ORDER :");
	var listitem22bullet = document.createElement("ul");
	listitem22bullet.setAttribute("type", "disc");
	var listitem22item1 = document.createElement("li");
	var listitem22item1text = document.createTextNode("MEN - 1st singles, 2nd singles, 1st doubles, 3rd singles, 2nd doubles.");
	listitem22item1.appendChild(listitem22item1text);
	var listitem22item2 = document.createElement("li");
	var listitem22item2text = document.createTextNode("WOMEN - 1st singles, 1st doubles, 2nd singles.");
	listitem22item2.appendChild(listitem22item2text);
	listitem22bullet.appendChild(listitem22item1);
	listitem22bullet.appendChild(listitem22item2);

	listitem22.appendChild(listitem22text);
	listitem22.appendChild(listitem22bullet);

	bulletList2.appendChild(listitem21);
	bulletList2.appendChild(listitem22);*/

	var participation = document.createElement("h3");
	participation.className = "participation-heading";
	var participationtext = document.createTextNode("PARTICIPATION");
	participation.appendChild(participationtext);

	/*var bulletList3 = document.createElement("ol");
	bulletList3.setAttribute("type", "1");
	bulletList3.className = "bullet-list-3";
	var listitem31 = document.createElement("li");
	var listitem31text = document.createTextNode("Each team must consist of a minimum of 4 and maximum of 5 players in a men\'s team and a minimum of 2 and maximum of 4 players in a women\'s team.");
	listitem31.appendChild(listitem31text);
	var listitem32 = document.createElement("li");
	var listitem32text = document.createTextNode("A player can play a maximum of two matches that is 1 singles and 1 doubles.");
	listitem32.appendChild(listitem32text);

	bulletList3.appendChild(listitem31);
	bulletList3.appendChild(listitem32);*/

	divinfo.appendChild(general);
	divinfo.appendChild(bulletList1);

	divinfo.appendChild(format);
	/*divinfo.appendChild(bulletList2);*/

	divinfo.appendChild(participation);
	/*divinfo.appendChild(bulletList3);*/


	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
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

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("SCHEDULE");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}

/*function loadRegulations()
{
	var div = document.createElement("div");
	div.className = 'container display';
	var dispdiv = document.createElement("div");
	dispdiv.className = 'col-lg-5 col-md-6 col-sm-11 col-xs-12 display-box';

	var back = document.createElement("div");
	back.className = "back";
	back.setAttribute("onclick","goBack();");

	var about = document.createElement("h2");
	about.className = "sports-heading";
	var abouttext = document.createTextNode("REGULATIONS");
	about.appendChild(abouttext);

	var divinfo = document.createElement("div");
	divinfo.className = "div-info";

	dispdiv.appendChild(back);
	dispdiv.appendChild(about);
	dispdiv.appendChild(divinfo);
	div.appendChild(dispdiv);

	$("body").prepend(div);
	$("body").css("overflow","hidden");
	return false;
}*/

