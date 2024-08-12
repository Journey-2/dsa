class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return console.log("Invalid index");
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous;
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    removeFromStart() {
        if (this.head === null) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    removeFromEnd() {
        if (this.head === null) {
            return null;
        }
        if (this.head.next === null) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return current.data;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Invalid index");
        }
        let current = this.head;
        let previous = null;
        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    getSize() {
        return this.size;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.data} -> `;
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    search(data) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1; 
    }

    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(1.5, 2);
list.print(); 
console.log('Size:', list.getSize()); 
console.log('Search 1.5:', list.search(1.5)); 
console.log('Get element at index 3:', list.getAt(3));
list.removeFrom(2);
list.print();
list.reverse();
list.print(); 
console.log('Is list empty?', list.isEmpty()); 
list.clear();
console.log('Is list empty after clear?', list.isEmpty());
