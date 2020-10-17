$(document).ready(function(){
    

$(document).on("click",".signIn", (e)=>{
e.preventDefault()
console.log("click")
const userData ={
    username:$("#username").val().toLowerCase(),
    password:$("#password").val().toLowerCase()
};
console.log(userData)
if(!userData.username|| !userData.password){
    return;
}

loginUser(userData.username,userData.password);
$("#username").val("")
$("#password").val("")
})

function loginUser(username,password){
    $.post("/api/auth/login",{
        username:username,
        password:password
    }).then(()=>{
        window.location.replace("/main")
    })
    .catch(err =>{
        console.log(err);
    });
}

})