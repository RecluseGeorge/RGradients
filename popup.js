var style_root = "background: linear-gradient(to right, ";

var names = ['Crimson Tide', 'Alive', 'Relay', 'Compare Now', 'Mello', 'Sunkist', 'Coal', 'Html', 'Mini', 'Sha la la', 'Celestial', 'Love and Liberty', 'Roseanna', 'Rose Colored Lenses', 'Jaipur', 'Vice City', 'Dawn', 'Ibiza Sunset', 'Radar', "Ed's Sunset Gradient", 'Nepal', 'Love Couple', 'Blood Red', 'Firewatch', 'Minimal Red', 'Dusk', 'Grapefruit Sunset', 'Sunset', 'Politics', 'Sweet Morning', 'Sylvia', 'Transfile', 'Tranquil', 'Red Ocean', 'Ali', 'Purple White', 'Superman', 'Forest', 'Christmas', 'Pizelex', 'Haikus', 'Blush', 'Back to the Future', 'Poncho', 'Netflix', 'Master Card', 'Passion', 'Piglet', 'Virgin America', 'Predawn', 'SoundCloud', 'Cheer Up Emo Kid', 'Man of Steel', 'Red Mist', 'Dance To Forget', 'Virgin', 'The Strain', 'Candy', 'Almost', 'Kyoto', 'A Lost Memory', 'Blurry Beach', 'Namn', 'Day Tripper', 'Miaka', 'Shrimpy', 'Influenza', 'Bourbon', 'Moonrise', 'Peach', 'Dracula', 'Cherry', 'Pinky', 'Sunrise', 'Bloody Mary', 'Rose Water', 'Playing with Reds', 'Cool Brown', 'YouTube', 'Noon to Dusk', 'Hazel', 'Learning and Leading', 'Honey Dew', 'EasyMed', 'Brady Brady Fun Fun', 'Snapchat', 'Dusk', 'Sun on the Horizon', 'Sherbert', 'Lush', 'Alihossein', 'Miami Dolphins', 'Minnesota Vikings', 'Pale Wood', 'Green and Blue', 'Light Orange', 'Sage Persuasion', 'Dark Knight', 'Ukraine', 'Green to dark', 'Fresh Turboscent', 'Koko Caramel', 'Atlas', 'Pastel Orange at the Sun', 'Crazy Orange I', 'Martini', 'Shore', 'Starfall', 'Parklife', 'Earthly', 'Autumn', 'Sirius Tamed', 'Jonquil', 'Petrichor', 'Vasily', 'Army', 'Opa', 'Juicy Orange', 'Mango Pulp', 'Frozen', 'Horizon', 'Monte Carlo', 'Lemon Twist', 'Sunny Days', 'Harmonic Energy', 'Terminal', 'Meridian', 'Mild', 'Limeade', 'Shahabi', 'Little Leaf', 'Back To Earth', 'Behongo', 'Neon Life', 'Teal Love', 'Moss', 'Mojito', 'Stripe', 'Emerald Water', 'Subu', 'Socialive', 'Telegram', 'Scooter', 'Crystal Clear', 'Visions of Grandeur', 'Chitty Chitty Bang Bang', 'Blue Skies', 'Cinnamint', 'Maldives', 'Pacific Dream', 'Orca', 'The Blue Lagoon', 'Under the Lake', 'Cocoaa Ice', 'Azure Pop', 'Disco', 'Dania', 'IIIT Delhi', 'Frost', 'Deep Sea Space', 'Solid Vault', 'Bright Vault', 'Decent', 'Dark Skies', 'Nighthawk', 'Inbox', 'Clear Sky', 'Timber', 'Between Night and Day', 'Lizard', 'Turquoise flow', 'Vine', 'Instagram', 'Endless River', 'Purple Bliss', 'Between The Clouds', 'Facebook Messenger', 'Reef', 'Winter', 'Forever Lost', 'Moor', 'Aqualicious', 'Calm Darya', 'Stellar', 'Mantle', 'Sea Blizz', 'Shroom Haze', 'Bora Bora', 'Venice Blue', 'Mirage', 'Sea Weed', 'Aqua Marine', 'Green Beach', 'Nimvelo', 'Sea Blue', 'Venice', 'Very Blue', 'Can You Feel The Love Tonight', 'Cosmic Fusion', '50 Shades of Grey', 'Royal', 'Joomla', 'Deep Purple', 'Curiosity blue', 'Twitch', 'Friday', 'Amethyst', 'Ash', 'Dirty Fog', 'Pinot Noir', 'Titanium', 'Electric Violet', 'Kashmir', 'Purple Paradise', 'Aubergine', "80's Purple", 'Black Rosé', 'Mauve', 'Suzy', 'Purplin', 'Flickr', 'Cherryblossoms', 'Shadow Night', 'Aubergine', 'Intuitive Purple', 'What lies Beyond', 'Colors Of Sky', 'Portrait', 'Metallic Toad', 'Misty Meadow', 'Clouds', 'Mystic', 'Deep Space', 'Talking To Mice Elf', 'Hersheys', 'ServQuick', 'Midnight City', 'Steel Gray'];

var styles = ['rgb(100, 43, 115), rgb(198, 66, 110));', 'rgb(203, 53, 107), rgb(189, 63, 50));', 'rgb(58, 28, 113), rgb(215, 109, 119), rgb(255, 175, 123));', 'rgb(239, 59, 54), rgb(255, 255, 255));', 'rgb(192, 57, 43), rgb(142, 68, 173));', 'rgb(242, 153, 74), rgb(242, 201, 76));', 'rgb(235, 87, 87), rgb(0, 0, 0));', 'rgb(228, 77, 38), rgb(241, 101, 41));', 'rgb(48, 232, 191), rgb(255, 130, 53));', 'rgb(214, 109, 117), rgb(226, 149, 135));', 'rgb(195, 55, 100), rgb(29, 38, 113));', 'rgb(32, 1, 34), rgb(111, 0, 0));', 'rgb(255, 175, 189), rgb(255, 195, 160));', 'rgb(232, 203, 192), rgb(99, 111, 164));', 'rgb(219, 230, 246), rgb(197, 121, 109));', 'rgb(52, 148, 230), rgb(236, 110, 173));', 'rgb(243, 144, 79), rgb(59, 67, 113));', 'rgb(238, 9, 121), rgb(255, 106, 0));', 'rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155));', 'rgb(255, 126, 95), rgb(254, 180, 123));', 'rgb(222, 97, 97), rgb(38, 87, 235));', 'rgb(58, 97, 134), rgb(137, 37, 62));', 'rgb(248, 80, 50), rgb(231, 56, 39));', 'rgb(203, 45, 62), rgb(239, 71, 58));', 'rgb(240, 0, 0), rgb(220, 40, 30));', 'rgb(44, 62, 80), rgb(253, 116, 108));', 'rgb(233, 100, 67), rgb(144, 78, 149));', 'rgb(11, 72, 107), rgb(245, 98, 23));', 'rgb(33, 150, 243), rgb(244, 67, 54));', 'rgb(255, 95, 109), rgb(255, 195, 113));', 'rgb(255, 75, 31), rgb(255, 144, 104));', 'rgb(22, 191, 253), rgb(203, 48, 102));', 'rgb(238, 205, 163), rgb(239, 98, 159));', 'rgb(29, 67, 80), rgb(164, 57, 49));', 'rgb(255, 75, 31), rgb(31, 221, 255));', 'rgb(186, 83, 112), rgb(244, 226, 216));', 'rgb(0, 153, 247), rgb(241, 23, 18));', 'rgb(90, 63, 55), rgb(44, 119, 68));', 'rgb(47, 115, 54), rgb(170, 58, 56));', 'rgb(17, 67, 87), rgb(242, 148, 146));', 'rgb(253, 116, 108), rgb(255, 144, 104));', 'rgb(178, 69, 146), rgb(241, 95, 121));', 'rgb(192, 36, 37), rgb(240, 203, 53));', 'rgb(64, 58, 62), rgb(190, 88, 105));', 'rgb(142, 14, 0), rgb(31, 28, 24));', 'rgb(244, 107, 69), rgb(238, 168, 73));', 'rgb(229, 57, 53), rgb(227, 93, 91));', 'rgb(238, 156, 167), rgb(255, 221, 225));', 'rgb(123, 67, 151), rgb(220, 36, 48));', 'rgb(255, 161, 127), rgb(0, 34, 62));', 'rgb(254, 140, 0), rgb(248, 54, 0));', 'rgb(85, 98, 112), rgb(255, 107, 107));', 'rgb(120, 2, 6), rgb(6, 17, 97));', 'rgb(0, 0, 0), rgb(231, 76, 60));', 'rgb(255, 78, 80), rgb(249, 212, 35));', 'rgb(201, 255, 191), rgb(255, 175, 189));', 'rgb(135, 0, 0), rgb(25, 10, 5));', 'rgb(211, 149, 155), rgb(191, 230, 186));', 'rgb(221, 214, 243), rgb(250, 172, 168));', 'rgb(194, 21, 0), rgb(255, 197, 0));', 'rgb(222, 98, 98), rgb(255, 184, 140));', 'rgb(213, 51, 105), rgb(203, 173, 109));', 'rgb(167, 55, 55), rgb(122, 40, 40));', 'rgb(248, 87, 166), rgb(255, 88, 88));', 'rgb(252, 53, 76), rgb(10, 191, 188));', 'rgb(228, 58, 21), rgb(230, 82, 69));', 'rgb(192, 72, 72), rgb(72, 0, 72));', 'rgb(236, 111, 102), rgb(243, 161, 131));', 'rgb(218, 226, 248), rgb(214, 164, 164));', 'rgb(237, 66, 100), rgb(255, 237, 188));', 'rgb(220, 36, 36), rgb(74, 86, 157));', 'rgb(235, 51, 73), rgb(244, 92, 67));', 'rgb(221, 94, 137), rgb(247, 187, 151));', 'rgb(255, 81, 47), rgb(240, 152, 25));', 'rgb(255, 81, 47), rgb(221, 36, 118));', 'rgb(229, 93, 135), rgb(95, 195, 228));', 'rgb(211, 16, 39), rgb(234, 56, 77));', 'rgb(96, 56, 19), rgb(178, 159, 148));', 'rgb(229, 45, 39), rgb(179, 18, 23));', 'rgb(255, 110, 127), rgb(191, 233, 255));', 'rgb(119, 161, 211), rgb(121, 203, 202), rgb(230, 132, 174));', 'rgb(247, 151, 30), rgb(255, 210, 0));', 'rgb(67, 198, 172), rgb(248, 255, 174));', 'rgb(220, 227, 91), rgb(69, 182, 73));', 'rgb(0, 195, 255), rgb(255, 255, 28));', 'rgb(255, 252, 0), rgb(255, 255, 255));', 'rgb(255, 216, 155), rgb(25, 84, 123));', 'rgb(252, 234, 187), rgb(248, 181, 0));', 'rgb(247, 157, 0), rgb(100, 243, 140));', 'rgb(86, 171, 47), rgb(168, 224, 99));', 'rgb(247, 255, 0), rgb(219, 54, 164));', 'rgb(77, 160, 176), rgb(211, 157, 56));', 'rgb(86, 20, 176), rgb(219, 214, 92));', 'rgb(234, 205, 163), rgb(214, 174, 123));', 'rgb(194, 229, 156), rgb(100, 179, 244));', 'rgb(255, 183, 94), rgb(237, 143, 3));', 'rgb(204, 204, 178), rgb(117, 117, 25));', 'rgb(186, 139, 2), rgb(24, 24, 24));', 'rgb(0, 79, 249), rgb(255, 249, 76));', 'rgb(106, 145, 19), rgb(20, 21, 23));', 'rgb(241, 242, 181), rgb(19, 80, 88));', 'rgb(209, 145, 60), rgb(255, 209, 148));', 'rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200));', 'rgb(255, 179, 71), rgb(255, 204, 51));', 'rgb(211, 131, 18), rgb(168, 50, 121));', 'rgb(253, 252, 71), rgb(36, 254, 65));', 'rgb(112, 225, 245), rgb(255, 209, 148));', 'rgb(240, 194, 123), rgb(75, 18, 72));', 'rgb(173, 209, 0), rgb(123, 146, 10));', 'rgb(100, 145, 115), rgb(219, 213, 164));', 'rgb(218, 210, 153), rgb(176, 218, 185));', 'rgb(239, 239, 187), rgb(212, 211, 221));', 'rgb(255, 238, 238), rgb(221, 239, 187));', 'rgb(102, 102, 0), rgb(153, 153, 102));', 'rgb(233, 211, 98), rgb(51, 51, 51));', 'rgb(65, 77, 11), rgb(114, 122, 23));', 'rgb(61, 126, 170), rgb(255, 228, 122));', 'rgb(255, 128, 8), rgb(255, 200, 55));', 'rgb(240, 152, 25), rgb(237, 222, 93));', 'rgb(64, 59, 74), rgb(231, 233, 187));', 'rgb(0, 57, 115), rgb(229, 229, 190));', 'rgb(204, 149, 192), rgb(219, 212, 180), rgb(122, 161, 210));', 'rgb(60, 165, 92), rgb(181, 172, 73));', 'rgb(237, 229, 116), rgb(225, 245, 196));', 'rgb(22, 160, 133), rgb(244, 208, 63));', 'rgb(0, 0, 0), rgb(15, 155, 15));', 'rgb(40, 60, 134), rgb(69, 162, 71));', 'rgb(103, 178, 111), rgb(76, 162, 205));', 'rgb(161, 255, 206), rgb(250, 255, 209));', 'rgb(168, 0, 119), rgb(102, 255, 0));', 'rgb(118, 184, 82), rgb(141, 194, 111));', 'rgb(0, 201, 255), rgb(146, 254, 157));', 'rgb(82, 194, 52), rgb(6, 23, 0));', 'rgb(179, 255, 171), rgb(18, 255, 247));', 'rgb(170, 255, 169), rgb(17, 255, 189));', 'rgb(19, 78, 94), rgb(113, 178, 128));', 'rgb(29, 151, 108), rgb(147, 249, 185));', 'rgb(31, 162, 255), rgb(18, 216, 250), rgb(166, 255, 203));', 'rgb(52, 143, 80), rgb(86, 180, 211));', 'rgb(12, 235, 235), rgb(32, 227, 178), rgb(41, 255, 198));', 'rgb(6, 190, 182), rgb(72, 177, 191));', 'rgb(28, 146, 210), rgb(242, 252, 254));', 'rgb(54, 209, 220), rgb(91, 134, 229));', 'rgb(21, 153, 87), rgb(21, 87, 153));', 'rgb(0, 0, 70), rgb(28, 181, 224));', 'rgb(0, 121, 145), rgb(120, 255, 214));', 'rgb(86, 204, 242), rgb(47, 128, 237));', 'rgb(74, 194, 154), rgb(189, 255, 243));', 'rgb(178, 254, 250), rgb(14, 210, 247));', 'rgb(52, 232, 158), rgb(15, 52, 67));', 'rgb(68, 160, 141), rgb(9, 54, 55));', 'rgb(67, 198, 172), rgb(25, 22, 84));', 'rgb(9, 48, 40), rgb(35, 122, 87));', 'rgb(192, 192, 170), rgb(28, 239, 255));', 'rgb(239, 50, 217), rgb(137, 255, 253));', 'rgb(78, 205, 196), rgb(85, 98, 112));', 'rgb(190, 147, 197), rgb(123, 198, 204));', 'rgb(128, 128, 128), rgb(63, 173, 168));', 'rgb(0, 4, 40), rgb(0, 78, 146));', 'rgb(44, 62, 80), rgb(76, 161, 175));', 'rgb(58, 123, 213), rgb(58, 96, 115));', 'rgb(0, 210, 255), rgb(146, 141, 171));', 'rgb(76, 161, 175), rgb(196, 224, 229));', 'rgb(75, 121, 161), rgb(40, 62, 81));', 'rgb(41, 128, 185), rgb(44, 62, 80));', 'rgb(69, 127, 202), rgb(86, 145, 200));', 'rgb(0, 92, 151), rgb(54, 55, 149));', 'rgb(252, 0, 255), rgb(0, 219, 222));', 'rgb(44, 62, 80), rgb(52, 152, 219));', 'rgb(48, 67, 82), rgb(215, 210, 204));', 'rgb(19, 106, 138), rgb(38, 120, 113));', 'rgb(0, 191, 143), rgb(0, 21, 16));', 'rgb(81, 127, 164), rgb(36, 57, 73));', 'rgb(67, 206, 162), rgb(24, 90, 157));', 'rgb(54, 0, 51), rgb(11, 135, 147));', 'rgb(115, 200, 169), rgb(55, 59, 68));', 'rgb(0, 198, 255), rgb(0, 114, 255));', 'rgb(0, 210, 255), rgb(58, 123, 213));', 'rgb(230, 218, 218), rgb(39, 64, 70));', 'rgb(93, 65, 87), rgb(168, 202, 186));', 'rgb(97, 97, 97), rgb(155, 197, 195));', 'rgb(80, 201, 195), rgb(150, 222, 218));', 'rgb(95, 44, 130), rgb(73, 160, 157));', 'rgb(116, 116, 191), rgb(52, 138, 199));', 'rgb(36, 198, 220), rgb(81, 74, 157));', 'rgb(28, 216, 210), rgb(147, 237, 199));', 'rgb(92, 37, 141), rgb(67, 137, 162));', 'rgb(43, 192, 228), rgb(234, 236, 198));', 'rgb(8, 80, 120), rgb(133, 216, 206));', 'rgb(22, 34, 42), rgb(58, 96, 115));', 'rgb(76, 184, 196), rgb(60, 211, 173));', 'rgb(26, 41, 128), rgb(38, 208, 206));', 'rgb(2, 170, 176), rgb(0, 205, 172));', 'rgb(49, 71, 85), rgb(38, 160, 218));', 'rgb(43, 88, 118), rgb(78, 67, 118));', 'rgb(97, 144, 232), rgb(167, 191, 232));', 'rgb(5, 117, 230), rgb(2, 27, 121));', 'rgb(69, 104, 220), rgb(176, 106, 179));', 'rgb(255, 0, 204), rgb(51, 51, 153));', 'rgb(189, 195, 199), rgb(44, 62, 80));', 'rgb(20, 30, 48), rgb(36, 59, 85));', 'rgb(30, 60, 114), rgb(42, 82, 152));', 'rgb(103, 58, 183), rgb(81, 45, 168));', 'rgb(82, 82, 82), rgb(61, 114, 180));', 'rgb(100, 65, 165), rgb(42, 8, 69));', 'rgb(131, 164, 212), rgb(182, 251, 255));', 'rgb(157, 80, 187), rgb(110, 72, 170));', 'rgb(96, 108, 136), rgb(63, 76, 107));', 'rgb(185, 147, 214), rgb(140, 166, 219));', 'rgb(75, 108, 183), rgb(24, 40, 72));', 'rgb(40, 48, 72), rgb(133, 147, 152));', 'rgb(71, 118, 230), rgb(142, 84, 233));', 'rgb(97, 67, 133), rgb(81, 99, 149));', 'rgb(29, 43, 100), rgb(248, 205, 218));', 'rgb(32, 0, 44), rgb(203, 180, 212));', 'rgb(65, 41, 90), rgb(47, 7, 67));', 'rgb(244, 196, 243), rgb(252, 103, 250));', 'rgb(66, 39, 90), rgb(115, 75, 109));', 'rgb(131, 77, 155), rgb(208, 78, 214));', 'rgb(106, 48, 147), rgb(160, 68, 255));', 'rgb(255, 0, 132), rgb(51, 0, 27));', 'rgb(251, 211, 233), rgb(187, 55, 125));', 'rgb(0, 0, 0), rgb(83, 52, 109));', 'rgb(170, 7, 107), rgb(97, 4, 95));', 'rgb(218, 34, 255), rgb(151, 51, 238));', 'rgb(240, 242, 240), rgb(0, 12, 64));', 'rgb(224, 234, 252), rgb(207, 222, 243));', 'rgb(142, 158, 171), rgb(238, 242, 243));', 'rgb(171, 186, 171), rgb(255, 255, 255));', 'rgb(33, 95, 0), rgb(228, 228, 217));', 'rgb(236, 233, 230), rgb(255, 255, 255));', 'rgb(117, 127, 154), rgb(215, 221, 232));', 'rgb(0, 0, 0), rgb(67, 67, 67));', 'rgb(148, 142, 153), rgb(46, 20, 55));', 'rgb(30, 19, 12), rgb(154, 132, 120));', 'rgb(72, 85, 99), rgb(41, 50, 60));', 'rgb(35, 37, 38), rgb(65, 67, 69));', 'rgb(31, 28, 44), rgb(146, 141, 171));'];

function showElements(){
	displaytext = "";
	for(var i = 0;i<=names.length-3;i++){
		displaytext += "<tr><td><div style='"+style_root+styles[i]+";' class='gradient-block' id='"+(i+1)+"'><div class='grad-font'><p align='center' id='"+(i+1)+"p'>"+names[i]+"</p></div></div></td><td><div style='"+style_root+styles[i+1]+";' class='gradient-block' id='"+(i+2)+"'><div class='grad-font'><p align='center' id='"+(i+2)+"p'>"+names[i+3]+"</p></div></div></td><td><div style='"+style_root+styles[i+2]+";' class='gradient-block'  id='"+(i+3)+"'><div class='grad-font'><p align='center' id='"+(i+3)+"p'>"+names[i+2]+"</p></div></div></td></tr>";
		i+=2
	}
	document.getElementById("gradients-whole").innerHTML = displaytext;
	addHoverFeat();
}

function copyStyle(element){
	var style = element.style.background;
	clipboard.copy("background: "+style);
	pid = element.id+"p";
	var nameus = document.getElementById(pid).innerHTML

	if(document.getElementById("recent-tr").childNodes.length <3){
		document.getElementById("recent-tr").innerHTML = "<td><div style='background:"+style+";' class='gradient-block' class='recent-grad'><div class='grad-font'><p align='center'>"+nameus+"</p></div></div></td>"+document.getElementById("recent-tr").innerHTML;

		var childs = document.getElementById("recent-tr").childNodes;
		var childchilds = new Array();
		for(var i=0;i<=childs.length-1;i++){
			for(var j=0;j<=childs[i].childNodes.length-1;j++){
				if(childs[i].childNodes[j].tagName == "DIV"){
					childchilds.push(childs[i].childNodes[j]);
				}
			}
		}
		var data = new Array();
		for(var i=0;i<=childchilds.length-1;i++){
			if(childchilds[i].tagName == "DIV"){
				data.push(childchilds[i].style.background);
			}
		}
		cacheJS.set({recent:1,type:"view"},data);
		recentListeners();
		addHoverFeat();

	}
	else if(document.getElementById("recent-tr").childNodes.length >= 3){
		var child = document.getElementById("recent-tr").childNodes[2];

		child.remove();

		document.getElementById("recent-tr").innerHTML = "<td><div style='background:"+style+";' class='gradient-block' class='recent-grad'><div class='grad-font'><p align='center'>"+nameus+"</p></div></div></td>"+document.getElementById("recent-tr").innerHTML;
		
		var childs = document.getElementById("recent-tr").childNodes;
		var childchilds = new Array();
		for(var i=0;i<=childs.length-1;i++){
			for(var j=0;j<=childs[i].childNodes.length-1;j++){
				if(childs[i].childNodes[j].tagName == "DIV"){
					childchilds.push(childs[i].childNodes[j]);
				}
			}
		}
		var data = new Array();
		for(var i=0;i<=childchilds.length-1;i++){
			if(childchilds[i].tagName == "DIV"){
				data.push(childchilds[i].style.background);
			}
		}
		cacheJS.set({recent:1,type:"view"},data);
		recentListeners();
		addHoverFeat();
	}
	


}

function recentCopy(element){
	var style = element.style.background;
	console.log(style);
	clipboard.copy("background: "+style);
}


function assignListeners(){
	for(var i = 0;i<=236;i++){
		document.getElementById((i+1).toString()).addEventListener('click',function(){copyStyle(this)},false);
	}
	addHoverFeat();
}

function recentListeners(){
	var elements = document.getElementById("recent-tr").childNodes;
	for(var i=0;i<=elements.length-1;i++){
		var childchis = elements[i].childNodes
		for(var j = 0;j<=elements[i].childNodes.length-1;j++){
			elements[i].childNodes[j].addEventListener("click",function(){recentCopy(this);},false);
		}
	}
}

window.onload = function(){
	showElements();
	assignListeners();
	addRecent();
	assignDataToSearch();
	addDropElements();
	document.getElementById("submit").addEventListener("click",rgbtool,false);
	createSlider("sliderr","rone","rtwo");
	createSlider("sliderg","gone","gtwo");
	createSlider("sliderb","bone","btwo");
	window.setInterval(searchbar,1);
	window.setInterval(dropbar,1);
	addHoverFeat();
}

function assignDataToSearch(){
	var input = document.getElementById("searchbar");
	var dataassigner = new Awesomplete(input);
	dataassigner.list = names;
}

function addRecent(){
	recentText = "";
	var recent = cacheJS.get({recent:1,type:"view"});
	var recentText = "";
	for(var k = recent.length-1;k>=0;k--){
		for(var i=0;i<=styles.length;i++){
			if(recent[k].replace("linear-gradient(to right, ","")+";" == styles[i]){
				var grads = names[i];
				var styless = recent[k];
				var nameuss = grads;
				recentText += "<td><div style='background:"+styless+";' class='gradient-block' class='recent-grad'><div class='grad-font'><p align='center'>"+nameuss+"</p></div></div></td>"
			}
			
		}
	}
	document.getElementById("recent-tr").innerHTML = recentText;
	recentListeners();
	addHoverFeat();

}

function addSearchListener(){
	document.getElementById("searchbar").addEventListener("input",searchbar,false);
}

function searchbar(){
	var query = document.getElementById("searchbar").value;
	if(names.indexOf(query) != -1){
		var pos = names.indexOf(query);
		var sstyles = styles[pos];
		var sname = names[pos];
		var template = "<div style='"+style_root+sstyles+";' class='gradient-block'><div class='grad-font'><p align='center'>"+sname+"</p></div></div>";
		document.getElementById("search-td").innerHTML = template;
		document.getElementById("search-td").childNodes[0].addEventListener("click",addSearchListener,false);
	}
}

function addDropElements(){
	var parent = document.getElementById("searchdrop");
	disptext = "<option></option>";
	for(var i=0;i<=names.length-1;i++){
		disptext += "<option>"+names[i]+"</option>"
	}
	parent.innerHTML = disptext;
}

function dropbar(){
	var query = document.getElementById("searchdrop").value;
	if(names.indexOf(query) != -1){
		var pos = names.indexOf(query);
		var sstyles = styles[pos];
		var sname = names[pos];
		var template = "<div style='"+style_root+sstyles+";' class='gradient-block'><div class='grad-font'><p align='center'>"+sname+"</p></div></div>";
		document.getElementById("searchdrop-td").innerHTML = template;
		document.getElementById("searchdrop-td").childNodes[0].addEventListener("click",addDropListener,false);
	}
}

function addSearchListener(){
	var se = document.getElementById("search-td").childNodes[0];
	recentCopy(se);
}

function addDropListener(){
	var se = document.getElementById("searchdrop-td").childNodes[0];
	recentCopy(se);
}

function rgbtool(){
	var rone = Math.round(document.getElementById("rone").value);
	var gone = Math.round(document.getElementById("gone").value);
	var bone = Math.round(document.getElementById("bone").value);

	var rtwo = Math.round(document.getElementById("rtwo").value);
	var gtwo = Math.round(document.getElementById("gtwo").value);
	var btwo = Math.round(document.getElementById("btwo").value);

	var style = "rgb("+rone+", "+gone+", "+bone+"), rgb("+rtwo+", "+gtwo+", "+btwo+"))";

	console.log(style);
	
	var template = "<div style='"+style_root+style+";margin-bottom:-150px;' class='gradient-block' id='custom'><div class='grad-font'></div></div>";

	document.getElementById("result").innerHTML = template;

	document.getElementById("custom").addEventListener("click",function(){clipboard.copy(document.getElementById("custom").style.background)},false);

	addHoverFeat();

}


function createSlider(id,uid,did){
	var sliderr = document.getElementById(id);
	
	noUiSlider.create(sliderr, {
		start: [40,210],
		connect: true,
		range: {
			'min': 0,
			'max': 255	
		}
	});

	sliderr.noUiSlider.on('update', function( values, handle ) {
		var m = sliderr.noUiSlider.get();
		document.getElementById(uid).value = m[0];
		document.getElementById(did).value = m[1];
	});

}

function addHoverFeat(){
	var elemelons = document.getElementsByClassName("gradient-block")
	for(var i=0;i<=elemelons.length-1;i++){
		elemelons[i].addEventListener("mouseover",function(){hoveronbg(this);},false);
	}
}

function hoveronbg(elem){
	console.log("change");
	console.log(elem.style.background);
	console.log(document.body.style.background);
	document.body.style.background  = elem.style.background;
}


