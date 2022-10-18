// object destructuring

const color ={
    one : "red",
    two : "green",
    three:"blue"
};

const { one,...restProps} = color;
console.log(one);
console.log(restProps);