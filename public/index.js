let currentStudent;
$(document).ready(()=>{

    $("#studSearch").on("click",(e)=>{
        e.preventDefault();
        let search = $("#search").val();
        console.log(search.toLowerCase())

        $.get("/api/students").then(data=>{
            $("#studContainer").empty()
            console.log(data)
            for(let i = 0; i < data.length ;i++){
                if(data[i].name.includes( search.toUpperCase())=== true){
                let studButton= `<button class="amber studButton" data-student="${data[i]._id}">${data[i].name}</button>`
                $("#studContainer").append(studButton)  
                }
            }
        })
    })
    $(document).on("click",".studButton", (e)=>{
        let mouse = e.target.dataset.student;
        console.log(mouse);

    })
    
    })