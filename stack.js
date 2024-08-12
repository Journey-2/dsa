// class Stack{
//     constructor(maxSize){
//         this.maxSize=maxSize;
//         this.top=-1;
//         this.stack= new Array(maxSize);
//     }

//     push(value){
//         if(this.top>=this.maxSize-1){
//             console.log("Stack OverFlowed");
//             return
//         }
//         this.stack[++this.top]=value
//     }

//     pop(){
//         if(this.top<0){
//             console.log("Stack Underflow")
//             return undefined
//         }
//         return this.stack[this.top--]
//     }

//     peek(){
//         if(this.top<0){
//             console.log("Stack Empty")
//             return this.isEmpty()
//         }
//         return this.stack[this.top]
//     }

//     isEmpty(){
//         if(this.top<0){
//             return this.top
//         }
//         else{
//             console.log("Not empty")
//         }
//     }

//     isFull(){
//         if(this.top>=this.maxSize-1){
//             console.log("full")
//         }
//         else{
//             console.log("Not full")
//         }
//     }

//     print(){
//         for(let i=0;i<=this.top;i++){
//             console.log(this.stack[i])
//         }
//     }
// }

// const stack = new Stack(5)

// stack.push(4)
// stack.push(6)
// stack.push(8)
// stack.push(10)
// stack.push(12)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()

// // stack.push(14)
// stack.isEmpty()
// stack.isFull()
// // stack.pop()
// // stack.peek()
// stack.print()
// console.log("Value at the top",stack.peek())


class Stack{
    constructor(maxSize){
        this.maxSize=maxSize;
        this.stack=new Array(maxSize)
        this.top=-1;
    }

    push(value){
        if(this.top>this.maxSize-1){
            console.log("Stack Overflow")
            return
        }
        this.isFull()
        this.stack[++this.top]=value

    }

    pop(){
        if(this.top<0){
            console.log("Stack Underlow")
            return undefined
        }
        return this.stack[this.top--]
    }

    peek(){
        console.log("At the top of the stack",this.stack[this.top])
    }

    isFull(){
        if(this.top>this.maxSize){
            console.log("Stack is full")
        }
        else{
            console.log("Not full: proceed")
        }
    }

    isEmpty(){
        if(this.top<0){
            console.log("Stack is Empty")
        }
        else{
            console.log("Not full: proceed")
        }
    }

    print(){
        for(let i=0;i<=this.top;i++){
            console.log(this.stack[i])
        }
    }
}

const stack = new Stack(4)

stack.push(1)
stack.push(2)
stack.peek()
// stack.isEmpty()
// stack.isFull()
stack.print()