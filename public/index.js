
$(document).ready(()=>{
    $("#studSearch").on("click",(e)=>{
        e.preventDefault();
        let search = $("#search").val();
        console.log(search.toLowerCase())
    
    })
    })