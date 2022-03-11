
function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push;
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HTMLSelectElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
