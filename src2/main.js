window.$ = window.jQuery
$('#test').find('.child').addClass('red').addClass('blue').end().addClass('grey').addClass('yellow').each((el,i)=>console.log(el,i))
$('#test').children().print()