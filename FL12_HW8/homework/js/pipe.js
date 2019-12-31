const pipe = (...args)=>args.reduce((a, b) =>b(a));
function addOne(x){
    return x+1;
}
pipe(1, addOne);

