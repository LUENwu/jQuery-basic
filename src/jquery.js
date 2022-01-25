window.jQuery= function(selectorOrArray){
  let elements
  if(typeof selectorOrArray ==='string'){  
    elements = document.querySelectorAll(selectorOrArray)
}else if(selectorOrArray instanceof Array){
    elements = selectorOrArray
} ;
//querySelectorAll() 方法返回文档中匹配指定 CSS 选择器的所有元素，返回 NodeList对象。
    return {
     addClass(className){
       for(let i =0;i<elements.length;i++){
         elements[i].classList.add(className)   
       }
       return this
     },
     removeClass(className){
      for(let i =0;i<elements.length;i++){
        elements[i].classList.remove(className)
      }
      return this
     },
     create(string){
      for (let i=0;i<elements.length;i++){
        elements[i].innerHTML=string.trim()
      }
      return this
     },
     find(selector){
       let array=[]
        for(let i=0;i<elements.length;i++){
        const el2 = Array.from(elements[i].querySelectorAll(selector))
        array=array.concat(el2)
        }
        oldApi=this
       return jQuery(array);
       //重新传参数构建jQuery对象,此时这个对象才能去调用jquery里的方法
     },
     end(){
       return oldApi
     },
     each(fn){
       for(let i=0;i<elements.length;i++){
         fn.call(null,elements[i],i)
       }
       return this
     },
     parent(){
       let array=[]
         this.each((node)=>{
           array.push(node.parentNode)
         })
       return jQuery(array)
     },
     print(){
      console.log(elements)
     },
     children(){
      let array=[]
      this.each((node)=>{
        if(arr.indexOf(node.children)===1){
        array.push(...node.children)//...可将数组元素里拆开
      }
    })
    return jQuery(array)
     },
     siblings(){
       let arr =[]
       this.each(node=>{
         arr.push(...node.parentNode.children)
       })
       return jQuery(arr)
     },
     remove(){
       let arr =[]
       for(let i =0;i<elements.length;i++){
         elements[i].remove()
         arr.push(elements[i])
       }
       return jQuery(arr)
     },
     getter(){
      let arr =[]
      this.each((node)=>{
        arr.push(Array.from(node.classList))
      })
      return jQuery(arr)
      },
     setter(name,value){
      for(let i= 0;i<elements.length;i++){
        elements[i].setAttribute(name,value)
      }
      return this  
     },
    text(){
      if(arguments.length===2){
        
      }
    }
      
      
     
       
     

     
     
       
       
     }
  }
  

   
