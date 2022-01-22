window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    //querySelectorAll() 方法返回文档中匹配指定 CSS 选择器的所有元素，返回 NodeList对象。
    return {
        addClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            return this;
        },
        removeClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.remove(className);
            return this;
        },
        create (string) {
            for(let i = 0; i < elements.length; i++)elements[i].innerHTML = string.trim();
            return this;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const el2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(el2);
            }
            return jQuery(array);
        }
    };
};

//# sourceMappingURL=index.51585d64.js.map
