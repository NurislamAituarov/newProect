'use strict'
import user from "./two.js";

// console.log(user)
// console.log(user.car)
// console.log(user.drive)
// import isPalindrom from "./two.js"
// console.log(isPalindrom('nan'))


const img = document.querySelector('img');
const nav = document.querySelector('nav');
const items = document.querySelectorAll('.item')
let a = 0
// setInterval(()=>{
//     if(a===360){
//         a=0
//         img.style.cssText = `transform: rotate3d(0,1,0, ${a}deg)`
//     }
//     a+=180
//     img.style.cssText = `transform: rotate3d(0,1,0, ${a}deg)`
// },1000)

img.addEventListener('click',(e)=>{
    e.preventDefault();
    if(a===360){
        a=0
        img.style.cssText = `transform: rotate3d(0,1,0, ${a}deg)`
    }
    a+=180
    img.style.cssText = `transform: rotate3d(0,1,0, ${a}deg)`
    nav.classList.toggle('show')
})

let foto = 0;
setInterval(()=>{
    if(foto===360){
        foto=0        
    }
    foto+=180
    items.forEach((item,i)=>{
        if(i%2==0){
            item.style.cssText = `transform: rotate3d(0,1,0, ${foto}deg)` 
        }else{
            setTimeout(()=>{
                item.style.cssText = `transform: rotate3d(1,0,0, ${foto}deg)` 
            },2000)
        }
        
    })
},5000)

////////////////////////////////////////
const form = document.querySelector('#formTwo');
const inp = document.querySelectorAll('#text');
// const cards = document.querySelector('.new__s');
inp.forEach((item,i)=>{
    item.addEventListener('input',()=>{
        if(i==1){
            if(item.value.match(/\d/g)){
                item.style.border = '2px solid red'
            }else{
                item.style.border = ''
            }
        }else if(i==2|| i==3){
            if(item.value.match(/\D/g)){
                item.style.border = '2px solid red'
            }else{
                item.style.border = ''
            }
        }else{
            item.style.border = ''
        }
    })

})

const result = []
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    inp.forEach((item)=>{
        result.push(item.value);
        if(item.value == ''){
            item.style.border = '2px solid red'
        }
    })
    
    localStorage.setItem('result', result)
    const resultForm = new FormResult(...result);
    resultForm.show();
    inp.forEach((item)=>{
        item.value = ''
    })
    result.splice(0,4)  
})
class FormResult{
    constructor(mail,name,growth,weight){
        this.mail = mail;
        this.name = name;
        this.growth = growth;
        this.weight = weight;
    }
    show(){
        const card = document.createElement('div');
        card.classList.add('new__s');

        card.innerHTML += `
            <p>@mail: <em>${this.mail}</em></p>
            <p>name:<em>${this.name}</em> </p>
            <p>рост: <em>${this.growth}</em></p>
            <p>вес:<em>${this.weight}</em> </p>
            <img id="x" width="20px" src="https://t4.ftcdn.net/jpg/01/70/28/23/240_F_170282328_31qaGRFFKAuAWgWpJsqFtO8UpstN2Bhw.jpg" alt="">
        `
        document.querySelector('.sidebar__new').append(card);
        const x = document.querySelectorAll('#x');
        x.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                card.remove()
                localStorage.clear()
            })
        })
    }
}
if(localStorage.getItem('result')){
    const result = localStorage.getItem('result').split(',')
    const resultForm = new FormResult(...result);
    resultForm.show();
}


////////////////footer/////////////
const footers = document.querySelectorAll('.footer__item');
let numFoo = 0;

setInterval(()=>{
    footers.forEach((item)=>{
        item.classList.remove('showFooter');        
    })
    if(numFoo==footers.length-1){
        numFoo = 0;
        footers[numFoo].classList.add('showFooter','fade')
    }else{
        numFoo = numFoo + 1
        footers[numFoo].classList.add('showFooter','fade')
    } 
},4000)

////////////////form/////////

const formOne = document.querySelector('#form');
const resMy = {
    one: 'подгатовка',
    two: 'отправлен успешно',
    three: 'error'

}
formOne.addEventListener('submit',(e)=>{
    e.preventDefault();

    const formData = new FormData(formOne);
    const object = {};
    formData.forEach((item,i)=>{
        object[i] = item
    })
    const json = JSON.stringify(object)    

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
    .then((data)=>{
        console.log(resMy.one)
        return  data.json()
    })
    .then((arr)=> {
        console.log(resMy.two)
        console.log(arr)
    })
    .catch(()=>console.log(resMy.three))
})


/////////////////////weather//////////////////////////////////

const cityHtml = document.querySelector('#city');
localStorage.setItem('kostanai','kostanai');

let city = []
document.querySelector('#cityBtn').addEventListener('click',()=>{
    city.push(cityHtml.value)
    city.push(newMonth)
    console.log(city)

    const weather = new Weather(...city)
    weather.showWeather()
})

class Weather{
    constructor(name,month){
        this.name = name;
        this.month = month
    };
    
    showWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&lang=ru&appid=27fea4477bdb8c2af91b743f1f6cc1ff`)
        .then((data)=>data.json())
        .then((arr)=>{
        document.querySelector('.weather__name').textContent = arr.name;
        document.querySelector('.weather__temp').textContent = Math.floor(arr.main.temp - 273);
        document.querySelector('.speed').textContent = arr.wind.speed + ' м/с';
        document.querySelector('.data').textContent = this.month;
        console.log(arr)
        })
        city = [];
        cityHtml.value = ''
    }
}

///////////////////////////////////////date
const datt = new Date;
const myDate = {
    year: datt.getFullYear(),
    month: datt.getMonth(),
    day: datt.getDate(),
    textMonth: '',
    filterDay(){
        let month = 'январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь'
        let myMonth = month.split(',')
        myMonth.forEach((item,i)=>{
            if(this.month == i){
                this.textMonth = this.day + item;
            }
        })
    }
}
myDate.filterDay();
const newMonth = myDate.textMonth;

if(localStorage.getItem('kostanai')){
    const r = []
    r.push(localStorage.getItem('kostanai'));
    r.push(newMonth)

    const weather = new Weather(...r)
    weather.showWeather()
}