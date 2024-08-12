function createNode(data){
    return{
        data:data,
        next:null
    }
}

function createLinkedList(){
    return{
        head:null,
        size:0
    }
}

function appendAtEnd(list,data){
    const newNode=createNode(data)
    if(list.head==null){
        list.head=newNode
    }
    else{
        let current = list.head
        while(current.next!=null){
            current=current.next 
        }
        current.next=newNode;
    }
    list.size++
}

function appendAtBeginning(list,data){
    const newNode=createNode(data)
    newNode.next=list.head
    list.head=newNode
    list.size++
}

function insertAtIndex(list, data, index) {
    if (index < 0 || index > list.size) {
        return console.log("Invalid index");
    }
    const newNode = createNode(data);
    let current = list.head;
    let previous;
    if (index === 0) {
        newNode.next = list.head;
        list.head = newNode;
    } else {
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
    }
    list.size++;
}

function print(list) {
    let current = list.head;
    let result = '';
    while (current !== null) {
        // result += `${current.data} -> `;
        result = result+current.data+"->"
        current = current.next;
    }
    result=result+"null";
    console.log(result);
}

function removeFromStart(list) {
    if (list.head === null) {
        return null;
    }
    const data = list.head.data;
    list.head = list.head.next;
    list.size--;
    return data;
}

function removeFromEnd(list){
    if(list.head==null){
        return null
    }
    if(list.head.next===null){
        const data = lsit.head.data
        list.head==null
        list.size--
        return data
    }
    let current=list.head
    let previous=null
    while(current.next!=null){
        previous=current
        current=current.next 
    }
    previous.next=null
    list.size--
    return current.data
}

function removeFromIndex(list, index) {
    if (index < 0 || index >= list.size) {
        return console.log("Invalid index");
    }
    let current = list.head;
    let previous = null;
    if (index === 0) {
        list.head = current.next;
    } else {
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
    list.size--;
    return current.data;
}

function search(list, data) {
    let current = list.head;
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

let list = createLinkedList()
appendAtEnd(list,1)
appendAtEnd(list,2)
appendAtBeginning(list,0)
print(list)
// insertAtIndex(list,6,3)
// removeFromStart(list)
// removeFromIndex(list,1)
removeFromEnd(list)
search(list,2)
print(list)


