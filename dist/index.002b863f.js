window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    return {
        find (selector) {
            let arr = [];
            for(let i = 0; i < elements.length; i++){
                let el2 = Array.from(elements[i].querySelectorAll(selector));
                arr = arr.concat(el2);
            }
            opi = this;
            return jQuery(arr);
        },
        addClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            return this;
        },
        print () {
            for(let i = 0; i < elements.length; i++)console.log(elements);
        },
        end () {
            return opi;
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
        },
        getter () {
            let arr = [];
            this.each((node)=>{
                arr.push(Array.from(node.classList));
            });
            return jQuery(arr);
        },
        setter (name, value) {
            for(let i = 0; i < elements.length; i++)elements[i].setAttribute(name, value);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(...node.parentNode);
            });
            return jQuery(array);
        },
        children () {
            const arr = [];
            this.each((node)=>{
                if (arr.indexOf(node.parentNode) === -1) arr.push(...node.children);
            });
            return jQuery(arr);
        }
    };
};

//# sourceMappingURL=index.002b863f.js.map
