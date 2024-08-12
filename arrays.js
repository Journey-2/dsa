let colors = ["red",'"blue']
console.log(colors)

let pens = new Array("Cello","Jello")
console.log(pens)

let names = new Array(2);
names[0]='Arun';
names[1]='fefa';
console.log(names)

let code = new Array("HTML","CSS","Javascript","php");
console.log(code[2])

//accessing the last element of the array 
let lastItem = code[code.length-1]
console.log(lastItem)

//modifying the array elements
code[1]="ifelse";
console.log(code[1])
code[1]="CSS"

//adding element at the end and the end of the array
code.push("Java")
console.log(code[code.length-1])

//adding element at the begining of the array
code.unshift("React")
console.log(code[0])

console.log(code)

code.pop();
code.shift();

console.log(code)
console.log(code.length)

for(let i=0;i<code.length;i++){
    console.log(code[i])
}

code.forEach(function loopingLol(elements){
    console.log(elements)
})

for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log(i+" is fizz")
        continue;
    }
    if(i%5==0){
        console.log(i+" is buzz")
        continue;
    }
    if(i%3==0&&i%5==0){
        console.log(i+" is fizzbuzz")
        continue
    }
    else{
        console.log(i+" is not fizzbuzz")
        continue
    }
}



for(let i =1;i<=100;i++){
    switch(true)
    {
        case(i%3==0):
        console.log(i+" is fizz");
        break;

        case(i%5==0):
        console.log(i+" is fizz");
        break;

        case(i%3!==0 && i%5!==0):
        console.log(i+' is not fizz nor buzz');
        break;

        default:
            console.log(i);
            break;
    }
}

let tech = new Array(1.1,"CSS","Javascript");
let newTech = new Array("React","Angular","Vue");
console.log(code);

code.forEach(function codeLooper(elements){
    console.log(elements)
})
console.log(tech.concat(newTech))

console.log(tech.toString())

console.log(typeof tech[0])

console.log(tech instanceof Object)