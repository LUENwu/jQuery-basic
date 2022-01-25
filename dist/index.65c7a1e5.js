/*jquery通过获取页面的元素,内部提供一个函数,接受一个选择器.这个选择器获取到这些元素.但不返回元素.不返回elements.返会api对象,
这个称为jQuery构造的对象,而这些元素里有些方法,可以操控对应的元素来改变页面.*/ // api.addClass('red').addClass('blue').addClass('black') //由于返回了对象,可再次使用方法去添加/删除,这是链式操作
jQuery('.test').find('.child').addClass('red').addClass('blue').addClass('black').end().addClass('grey');
// const api2 =jQuery('#tab')
// api2.create('<div class="div1">div1</div>')*/
// const api3 = jQuery('.test1').parent().print()
const api4 = jQuery('.test1').index() //  api3.addClass('yellow').each((div=>console.log(div)))
 //api.removeClass('blue').removeClass('black')
;

//# sourceMappingURL=index.65c7a1e5.js.map
