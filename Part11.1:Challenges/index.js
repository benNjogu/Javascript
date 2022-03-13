
class Stack {
    constructor() {
        this.count = 0;
        this.item = null
        this.top = 0;
        this.itemsArray = [];
    }

    push(item) {
        if (item == null) {
            console.error('invalid item');
            return;
        }

        this.itemsArray.push(item);
        this.count++;
        this.top++;
    }

    get peek() {
        if (this.itemsArray.length == 0) {
            console.error('no items found');
            return;
        }
        return this.itemsArray[--this.top];
    }

    pop() {
        if (this.itemsArray.length == 0) {
            console.error('stack is empty');
            return;
        }

        this.itemsArray.pop();
        this.count--;
        this.top--;
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(1);
console.log(stack.count);
console.log(stack.top);
console.log(stack.peek);
stack.pop
stack.pop
stack.pop
stack.pop
console.log(stack.count);