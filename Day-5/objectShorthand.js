const age = 20;
const batch = "B52WD";

const student = {
    name :"Deepak",
    age: age,
    batch: batch
}

console.log(student);
//   paranthisis  = (veriable ) l
const add = (num) => num + num ;

console.log(add(43));

// function onSubmit() {
//     var that = this;
//     orderService(order, function(result){
//         that.result = result;
//     })
// };

function onSubmit(){
    orderService.store(order, result => {
        this.result = result;
    });
}
















