'use strict'
// const user = {
//     name: 'Nurislam',
//     age: 26,
//     car: 'bmv',
//     drive: function(){
//         return car + ' поехали'
//     },
//     data: ()=>{
//         console.log(name + ': ' + age)
//     }
// }
// export default user;



//////////////////////////example///////////

function isPalindrom(str){
    const a = str.split('').reverse().join('');
    if(str == a){
        return true
    }else{
        return false
    }
}
console.log(isPalindrom('test'))
console.log(isPalindrom('mam'))
export default isPalindrom

// function findShort(str){
//     return str.split(' ').reduce((acum,prev)=>{
//         if(acum.length < prev.length){
//             return acum
//         }else{
//             return prev
//         }
//     })
// }
// console.log(findShort('Самое кароткое слово в этой жизни'));
// console.log(findShort('ipsum dolor sit amet consectetur adipisicing elit.'))


// function toInitials(str){
//     return str.split(' ').map((item,i)=>{
//         if(i < 2){
//             return item.split('')[0].toUpperCase()
//         }else{
            
//         }
//     }).join('.')
// }
// console.log(toInitials('Nurislam Manarbekovich'))
// console.log(toInitials('ainura nursultanova'))


// function sumDigits(num){
//     if(num.toString().match(/\D/g)){
//         let p = num.toString().match(/\D/g).toString();
//         let a = num.toString().split('')
//         let index = a.indexOf(p);
//         a.splice(index,1);
//         return a.reduce((acum,prev)=>{
//             return +acum + +prev
//         })
//     }
//     return num.toString().split('').reduce((acum,prev)=>{
//         return Number(acum)+Number(prev)
//     })
    
// }
// console.log(sumDigits('d75123'))
// console.log(sumDigits(456))
// console.log(sumDigits(-46))


// ///////////////////////call, bind///////////////////////////////////////////
// // function showName(str){
// //     console.log(this)
// //     console.log(this.name +': ' + this.surname + ' new' + str)
// // }
// // const user = {
// //     name: 'nurislam',
// //     surname: 'Aituarov'
// // }
// // showName.call(user,'drive')
// // const newShowName = showName.bind(user)
// // newShowName('Ainur')
// function count(){
//     let m = 6;
//     return function q(n){
//         return n + m
//     }
// }
// const r = count();
// console.log(r(2))


// function acum(str){
//     const p = str.split('').map((item,i)=>{
//         switch (i){
//             case 0:
//                 return item.toUpperCase();
//             case 1:
//                 return item.toUpperCase() + item.toUpperCase(); 
//             case 2:
//                 return item.toUpperCase() + item.toUpperCase() + item.toUpperCase(); 
//             case 3:
//                 return item.toUpperCase() + item.toUpperCase() + item.toUpperCase() + item.toUpperCase(); 
//         }
//     })
//     return p
// }
// console.log(acum('abcd'))

// function capitals(str){
//     let a = str.split('');
//     let p = [];
//     a.forEach((item,i)=>{
//         if(item === item.toUpperCase()){
//             p.push(i)
//         }
//     })
//     return p
// }
// console.log(capitals('CodEWaRs'));
// console.log(capitals('justForTest'))



// // fetch('https://api.openweathermap.org/data/2.5/weather?q=kostanai&lang=ru&appid=27fea4477bdb8c2af91b743f1f6cc1ff')
// // .then((data)=>data.json())
// // .then((arr)=>{
// //     document.querySelector('.weather__name').textContent = arr.name;
// //     document.querySelector('.weather__temp').textContent = (arr.main.temp - 273).toFixed(0);
// //     document.querySelector('.speed').textContent = arr.wind.speed + ' м/с'
// //     console.log(arr)
// // })

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// // .then((data)=>data.json())
// // .then((arr)=>console.log(arr))












// function fooBar(num){
//     let a = []; 
//     for(let i = 1; i <= num; i++){  
//         if(i%3===0&&i%5===0){
//             a.push('fooBar')
//         }else if(i%3===0){
//             a.push('foo')
//         }else if(i%5===0){
//             a.push('Bar')
//         }else{
//             a.push(i);
//         }     
//     }
//     return a.join(',')
// }
// console.log(fooBar(15));




function setStringIndex(str){
    const a = str.split('')
    const result = []
    a.reduce((acum,prev,i)=>{
        if(acum === prev ){
            return acum         
        }else{
            result.push(acum);
            return prev
        }
    })
    a.forEach(element => {
        let r = result.indexOf(element);
        console.log(r)
    });
   
    console.log(result)
}

console.log(setStringIndex('aaaoaaacccccgyyyyyyymmmyyrrrrlooo'));


// function getEvenVhars(str){
//     const a = str.split('');

//     if(a.length <= 1){
//         return 'неверная строка'
//     }else{
//         const b = a.filter((item,i)=>{
//             if(i%2!==0){
//                 return item
//             }
//         })
//         return b
//     }
// }

// console.log(getEvenVhars('awpfnhsmflheyvvpxsk'))
// console.log(getEvenVhars('a'))













