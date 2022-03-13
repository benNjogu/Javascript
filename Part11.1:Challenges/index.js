
const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(item) {
        if (item == null)
            throw new Error('invalid item');

        _items.get(this).push(item);
    }

    get peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('stack is empty.');

        return items[items.length - 1];

    }

    pop() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('stack is empty.');

        return items.pop();
    }

    get count() {
        return _items.get(this).length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(1);