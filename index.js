// menu functionality
const headerContainer = document.querySelector('.header-container')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click' , ()=>{
    headerContainer.classList.toggle('openMenu')
})  

// faq

const faqs = document.querySelectorAll('.query-solution-container')
const arrowBtn = document.querySelectorAll('.arrow-btn')
 

function removeView(){
    btn.forEach((btn) =>{
        let ele = (e.target.parentNode.parentNode.parentNode)
        if(ele.classList.contains('view')){
            ele.classList.remove('view')
        }
    })
}
arrowBtn.forEach((btn) =>{
    btn.addEventListener('click' ,(e) =>{
        let ele = (e.target.parentNode.parentNode.parentNode)
        
        ele.classList.toggle('view')
        
    })
})



// tab functionality
const tabs = document.querySelectorAll('.tab')
 
const tabOne = document.querySelector('.tab-btn-1')
 
const tabTwo = document.querySelector('.tab-btn-2')
 
const tabThree = document.querySelector('.tab-btn-3')
 
const tabBtns = document.querySelectorAll('.tab-btn')
 

function removeClass(list , className){
    list.forEach((item) =>{
        if(item.classList.contains(className)){
            item.classList.remove(className)
        }
    })
}
function AddClass(list , className){
    list.forEach((item) =>{
        if(! item.classList.contains(className)){
            item.classList.add(className)
        }
    })
}

 

tabOne.addEventListener('click' , ()=>{
    removeClass(tabBtns , 'active')
    tabOne.classList.add('active')
    AddClass(tabs , 'hidden')
    tabs[0].classList.remove('hidden')
    console.log(tabs)
})
tabTwo.addEventListener('click' , ()=>{
    removeClass(tabBtns , 'active')
    tabTwo.classList.add('active')
    AddClass(tabs , 'hidden')
    tabs[1].classList.remove('hidden')
     
})

tabThree.addEventListener('click' , ()=>{
    removeClass(tabBtns , 'active')
    tabThree.classList.add('active')
    AddClass(tabs , 'hidden')
    tabs[2].classList.remove('hidden')
     
})

// email validation
const email = document.getElementById('email')
const submit = document.getElementById('submit')
const form = document.querySelector('.form')


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
     
  
     
  
      return true;
  
    } else {
  
     
  
      return false;
  
    }
  
  }
 
submit.addEventListener('click' , (e) =>{
    e.preventDefault()
    const check = ValidateEmail(email)
    if(check){
        email.value = ""
    }else{
        form.classList.add('error')
         setTimeout(()=>{
            form.classList.remove('error')
            email.value = ''
        } , 3000)
        

    }
})