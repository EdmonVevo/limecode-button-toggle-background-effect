$(document).ready(()=>{
	
	$('.button').on('click',function(){
		$(this).toggleClass('button_rotate');
		$('.background').toggleClass('background_cover');
	})

})