let sign_btn=document.getElementById("signin");
let login_btn=document.getElementById("login");
let email_add=document.getElementById("email1");
let password_add=document.getElementById("password");

let login_details=[
    {
        emailid:"abarna@gmail.com",
        passwordid:"Abarna406@",
    },
    {
        emailid:"amarnathcse@gmail.com",
        passwordid:"Amarnathcse@",
    },
    {
        emailid:"akila@gmail.com",
        passwordid:"Akila123",
    },
    {
        emailid:"sangeetha@gmail.com",
        passwordid:"Sangeetha234",
    },
];
function loginDetails()
{
    for(i=0;i<login_details.length;i++)
    {
        if(login_details[i].emailid==email_add.value && login_details[i].passwordid==password_add.value)
        {
            alert("Welome");
        }
        else if(email_add.value=="" && password_add.value=="")
        {
            email_add.setAttribute("class","error");
            password_add.setAttribute("class","error");
        
        }
        else if(password_add.value=="" || password_add.length<8)
        {
            password_add.setAttribute("class","error");
        }
        else if(email_add.value=="")
        {
            email_add.setAttribute("class","error");
        }
    }
}
login_btn.addEventListener("click",g=>
{
    g.preventDefault();
    loginDetails();
});

function navigateSign()
{
    window.location.href="signin.html";
}
sign_btn.addEventListener("click",e=>
{
e.preventDefault();
navigateSign()});


