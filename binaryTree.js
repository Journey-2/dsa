

class binaryTree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function insert(root,value){
    const newNode = new binaryTree(value)//constructure initialization

    if(!root){
        return newNode;//if there is not root node return the new node as the root node
    }

    const queue = [root];

    while(queue.length>0){
        const node = queue.shift()

        if(!node.left){
            node.left=newNode;
            break;
        }
        else{
            queue.push(node.left)
        }

        if(!node.right){
            node.right=newNode
            break
        }
        else{
            queue.push(node.right)
        }

    }
    return root
}

function preOrderTrav(node){
    if(!node){
        return -1
    }

    console.log(node.value);
    preOrderTrav(node.left)
    preOrderTrav(node.right)
}

function inOrderTrav(node){
    if(!node){
        return -1
    }

    inOrderTrav(node.left)
    console.log(node.value);
    inOrderTrav(node.right)
}

function postOrderTrav(node){
    if(!node){
        return -1
    }

    postOrderTrav(node.left)
    postOrderTrav(node.right)
    console.log(node.value);

}

let root = new binaryTree(1)
root=insert(root,2)
root=insert(root,3)
root=insert(root,4)

console.log("PreOrder Traversal")
preOrderTrav(root)

console.log("InOrder Traversal")
inOrderTrav(root)

console.log("PostOrder Traversal")
postOrderTrav(root)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.inOrderTraversal(node.left, result);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            this.inOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}



const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.inOrderTraversal())
console.log(tree.preOrderTraversal())
console.log(tree.postOrderTraversal())




