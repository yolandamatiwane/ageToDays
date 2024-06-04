let inp = document.querySelector('#age')
let ans = document.querySelector('#days')
let btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    ans.value = eval(`${inp.value}*${365}`)
})