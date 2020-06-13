function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this;
}

jQuery.prototype.each = function(fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.click = function(fn) {
    this.each(element => element.addEventListener('click', fn))
    return this
}
const $ = (e) => new jQuery(e);

$('button').click(e => console.log(e.target))

jQuery.prototype.html = function(newhtmls) {
    if (newhtmls === undefined) {
        this.each(element => element.innerHTML)
    } else {
        this.each(element => element.innerHTML = newhtmls)
    }
    return this;
}
