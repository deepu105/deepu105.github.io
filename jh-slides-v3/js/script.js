$(function() {

    impress().init();

	$("#next").click(function () {
	   impress().next();
	});

	$("#prev").click(function () {
	   impress().prev();
	});

	//ruby script

	$('.ruby').css('opacity',0.1);
	window.addEventListener('impress:stepenter', function() {
	  $('.ruby.active').animate({'opacity': 1});
	});
	window.addEventListener('impress:stepleave', function() {
	  $('.ruby.past').animate({'opacity': 0.1});
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.ruby.active p img').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.ruby.past p img').removeClass('animated bounceInDown');
	});

	//what we do

	window.addEventListener('impress:stepenter', function() {
	  $('#what_content.active p.text-center').addClass('animated tada');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#what_content.past p.text-center').removeClass('animated tada');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#what_content.future p.text-center').removeClass('animated tada');
	});


	//how we do

	window.addEventListener('impress:stepenter', function() {
	  $('#robotics.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#robotics.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#robotics.future p.title').removeClass('animated bounceInDown');
	});
	
	window.addEventListener('impress:stepenter', function() {
	  $('#server_db.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#server_db.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#server_db.future p.title').removeClass('animated bounceInDown');
	});
	
	window.addEventListener('impress:stepenter', function() {
	  $('#desktop.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#desktop.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#desktop.future p.title').removeClass('animated bounceInDown');
	});
	
	window.addEventListener('impress:stepenter', function() {
	  $('#mob_app.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#mob_app.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#mob_app.future p.title').removeClass('animated bounceInDown');
	});

	window.addEventListener('impress:stepenter', function() {
	  $('#web_app.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#web_app.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#web_app.future p.title').removeClass('animated bounceInDown');
	});
	
	window.addEventListener('impress:stepenter', function() {
	  $('#website.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#website.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#website.future p.title').removeClass('animated bounceInDown');
	});
	//lets chet

	window.addEventListener('impress:stepenter', function() {
	  $('#first.active p.title').addClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#first.past p.title').removeClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#first.future p.title').removeClass('animated bounceInRight');
	});


	//prototype

	window.addEventListener('impress:stepenter', function() {
	  $('#second.active p.title').addClass('animated bounceInLeft');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#second.past p.title').removeClass('animated bounceInLeft');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#second.future p.title').removeClass('animated bounceInLeft');
	});

	//create

	window.addEventListener('impress:stepenter', function() {
	  $('#third.active p.title').addClass('animated bounceInUp');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#third.past p.title').removeClass('animated bounceInUp');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#third.future p.title').removeClass('animated bounceInUp');
	});

	//creative

	window.addEventListener('impress:stepenter', function() {
	  $('#fourth.active p.title').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#fourth.past p.title').removeClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#fourth.future p.title').removeClass('animated bounceInDown');
	});

	//Dreams

	window.addEventListener('impress:stepenter', function() {
	  $('#five.active p.title').addClass('animated rollIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#five.past p.title').removeClass('animated rollIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#five.future p.title').removeClass('animated rollIn');
	});	

	//frontend

	window.addEventListener('impress:stepenter', function() {
	  $('.animar.active ul li').addClass('animated bounceIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.animar.past ul li').removeClass('animated bounceIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.animar.future ul li').removeClass('animated bounceIn');
	});

	//backend

	window.addEventListener('impress:stepenter', function() {
	  $('.anim2.active ul li').addClass('animated rollIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.anim2.past ul li').removeClass('animated rollIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('.anim2.future ul li').removeClass('animated rollIn');
	});	


	//software factory

	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_one.active p').addClass('animated lightSpeedIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_one.future p').removeClass('animated lightSpeedIn');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_one.active p img').addClass('animated lightSpeedIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_one.active p img').removeClass('animated lightSpeedIn');
	});
	//lines 

	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.active p.upLine').addClass('animated bounceInDown');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.past p.upLine').removeClass('animated bounceInDown');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.future p.upLine').removeClass('animated bounceInDown');
	});	

	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.active p.downLine').addClass('animated bounceInUp');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.past p.downLine').removeClass('animated bounceInUp');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.future p.downLine').removeClass('animated bounceInUp');
	});	

	//stacks list

	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.active p.scaleZero').addClass('animated bounceIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.past p.scaleZero').removeClass('animated bounceIn');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#stacks_tags.future p.scaleZero').removeClass('animated bounceIn');
	});	

	//mobile LOGOs

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg').addClass('animated pulse');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.past div.map_bg').removeClass('animated pulse');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.future div.map_bg').removeClass('animated pulse');
	});	

	// START mobile EXTRICT 

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.california').delay(1000).queue(function(next){
	  	$(this).addClass("californiaMove");
	  	next();
	  });
	});

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.atlanta').delay(1200).queue(function(next){
	  	$(this).addClass("atlantaMove");
	  	next();
	  });
	});

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.baires').delay(1400).queue(function(next){
	  	$(this).addClass("bairesMove");
	  	next();
	  });
	});	

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.tcm').delay(1600).queue(function(next){
	  	$(this).addClass("tcmMove");
	  	next();
	  });
	});

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.baires2').delay(1700).queue(function(next){
	  	$(this).addClass("baires2Move");
	  	next();
	  });
	});		

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.active div.map_bg div.spain').delay(1750).queue(function(next){
	  	$(this).addClass("spainMove");
	  	next();
	  });
	});		

	//removieng clases from mobile map

	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.past div.map_bg div.clients-logos').removeClass('spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.future div.map_bg div.clients-logos').removeClass('spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove');
	});	

	$('#mobile_map.past').css('opacity',0);
	window.addEventListener('impress:stepenter', function() {
	  $('#mobile_map.past div.map_bg.active').animate({'opacity': 1});
	});
	window.addEventListener('impress:stepleave', function() {
	  $('#mobile_map.past div.map_bg.past').animate({'opacity': 0});
	});
	//animate finish

	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.present div.drop_box span#drop_down').addClass('animated hinge');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.past div.drop_box span#drop_down').removeClass('animated hinge');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.future div.drop_box span#drop_down').removeClass('animated hinge');
	});	
	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.present #border-radius').addClass('animated rollIn show');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.past #border-radius').removeClass('animated rollIn');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#intro-finish.future #border-radius').removeClass('animated rollIn');
	});	
});


// disable mousewheet
$(document).ready(function(){

document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
if(document.addEventListener){ /* Chrome, Safari, Firefox */
  document.addEventListener('DOMMouseScroll', stopWheel, false);
}

function stopWheel(e){
  if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
  if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
  e.returnValue = false; /* IE7, IE8 */
  };
});