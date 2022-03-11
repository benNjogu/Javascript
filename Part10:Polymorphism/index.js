
function HtmlSelectElement() {

}

HtmlSelectElement.prototype.focus = function () {
    console.log('focus');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}

function HtmlElement() {
    console.log('click');
}

extend(HtmlElement, HtmlSelectElement);
