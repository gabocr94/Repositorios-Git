$("document").ready(function(){
	
	$("#texto").hover(function(){
		$("#texto").fadeout("slow");
		
	});
	
	$("#texto").mouseout(function(){
		$("#texto").css("color","green");
		$("#texto").css("font-size","36px");
		$("#texto").css("opacity","1");
	});
});