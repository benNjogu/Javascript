
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

    this.render = function () {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

HTMLSelectElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;


function HtmlImageElement(src) {
    this.src = src;


    this.render = function () {
        return `<img src = "${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
