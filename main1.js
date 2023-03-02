let signup_btn=document.getElementById("signup");

signup_btn.addEventListener("click",g=>{
    g.preventDefault();
    formValidation(myFocus());
    
});
let firstname_txt=document.getElementById("firstname");
let surname_txt=document.getElementById("surname");
let mobile_txt=document.getElementById("mobileno");
let password_txt=document.getElementById("password");
let date_txt=document.getElementById("birthday");
let gender_box=document.getElementsByName("gener");
let gender_div=document.getElementsByName("custom");
let gender1=document.getElementById("gender1");
let gender2=document.getElementById("gender2");
let gender3=document.getElementById("gender3");
let element=document.getElementsByTagName("input");
function formValidation()
{
    if(firstname_txt.value=="" || firstname_txt.value.length<5 )
    {
        firstname_txt.setAttribute("class","error");
    }
    if(surname_txt.value=="" || surname_txt.value.length<5 )
    {
        surname_txt.setAttribute("class","error");
    }
    if(mobile_txt.value=="" || mobile_txt.value.length<10)
    {
        mobile_txt.setAttribute("class","error");
    }
    if(password_txt.value=="" || password_txt.value.length<8)
    {
        password_txt.setAttribute("class","error");
    }
    if(date_txt.value=="")
    {
        date_txt.setAttribute("class","error");
    }
    if(gender1.checked==false && gender2.checked==false && gender3.checked==false)
    {
        for(i=0;i<gender_div.length;i++)
        {               
            gender_div[i].setAttribute("class","generror")
        }
            
    }  
   
}
function myFocus()
{
    firstname_txt.addEventListener("focus",()=>{
        firstname_txt.classList.remove("error");
        firstname_txt.classList.add("in-txt");
    });
    surname_txt.addEventListener("focus",()=>{
        surname_txt.classList.remove("error");
        surname_txt.classList.add("in-txt");
    })
    mobile_txt.addEventListener("focus",()=>{
        mobile_txt.classList.remove("error");
        mobile_txt.classList.add("in-txt");
    })
    password_txt.addEventListener("focus",()=>{
        password_txt.classList.remove("error");
        password_txt.classList.add("in-txt");
    })
    date_txt.addEventListener("focus",()=>{
        date_txt.classList.remove("error");
        date_txt.classList.add("in-txt");
    })
    gender1.addEventListener("focus",()=>{
    for(i=0;i<gender_div.length;i++)
        {                
                gender_div[i].setAttribute("class","gen");
        }
    })
    gender2.addEventListener("focus",()=>{
    for(i=0;i<gender_div.length;i++)
    {                
        gender_div[i].setAttribute("class","gen");
    }
    })
    gender3.addEventListener("focus",()=>{
    for(i=0;i<gender_div.length;i++)
    {                
        gender_div[i].setAttribute("class","gen");
    }
    })
}
