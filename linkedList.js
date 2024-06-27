import Node from "./nodeFactory.js";



export default class LinkedList { // represents the full list
    contstructor() {
        this.listHead = null;
    }

    // adds a new node containing value to the end of the list
    append(value) {
        if (this.listHead == null) this.prepend(value);
        else {
            let temp = this.listHead;
            while (temp.nextNode != null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }
    }
    
    // adds a new node containing value to the start of the list
    prepend(value) {
        let temp = null;
        if (this.listHead != null) temp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = temp;
    }

    // returns the total number of nodes in the list
    size() {
        let temp = this.listHead;
        let counter = 0;
        while (temp != null) {
            counter++;
            temp = temp.nextNode;
        }
        return counter;
    }

    // returns the first node in the list
    head() {
        return this.listHead;
    }

    // returns the last node in the list
    tail() {
        let temp = this.listHead;
        while (temp.nextNode != null) temp = temp.nextNode;
        return temp;
    }

    // returns the node at the given index
    at(index) {
        let temp = this.listHead;
        for (let i = 0; i < index; i++) {
            temp = temp.nextNode;
            if (temp == null) return "There is no element at this index";
        }
        return temp;
    }
    
    // removes the last element from the list
    pop() {
        let current = this.listHead;
        let previous = null;
        while (current.nextNode != null) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    // returns true if the passed in value is in the list, or returns false
    contains(value) {
        let temp = this.listHead;
        while (temp != null) {
            if (temp.value === value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        let temp = this.listHead;
        let index = 0;
        while (temp != null) {
            if (temp.value === value) return index;
            temp = temp.nextNode;
            index++;
        }
        return null;
    }

    // represents LinkedList objects as strings, so you can print them out and preview them in the console
    // expected format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let temp = this.listHead;
        let stringList = "";
        while (temp != null) {
            stringList += `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }
        return (stringList += "null");
    }

    // inserts a new node with provided value at given index
    insertAt(value, index) {
        if (this.listHead == null) this.prepend(value);
        else {
            let current = this.listHead;
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.nextNode;
                if (current == null) break; // if index > end of list, add node at end of list
            }
            const temp = new Node(value);
            previous.nextNode = temp;
            temp.nextNode = current;
        }
    }

    removeAt(index) {
        if (this.listHead == null) return "List is already empty";

        let current = this.listHead;
        let previous = null;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
            if (current == null) return "There is no element at this index";
        }
        previous.nextNode = current.nextNode;
    }
}