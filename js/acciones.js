// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.bee(2);
		});//Cierre del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//Cierre del vibrar
	},false);//Ciere del Deviceready
});//Cierre ready