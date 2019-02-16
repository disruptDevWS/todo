//Check off todo's by clicking
$("ul").on('click', 'li',function(){
	$(this).toggleClass('completed');
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text form input
		const todoText = $(this).val();
		//clear the input upon enter
		$(this).val('');
		//create a new li and add to the ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle();
})
