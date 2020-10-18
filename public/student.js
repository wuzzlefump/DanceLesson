let currentStudent;
$(document).ready(()=>{
$("#studSearch").on("click",(e)=>{
    e.preventDefault();
    let search = $("#search").val();
    $.get("/api/students").then(data=>{
        $("#studContainer").empty()
        for(let i = 0; i < data.length ;i++){
            if(data[i].name.includes( search.toUpperCase())=== true){
                let studButton= `<button class="studButton amber" style ="color: black; border-radius:15px; padding: 10px;" data-student="${data[i]._id}">${data[i].name}</button><br>`
                $("#studContainer").append(studButton);
            }
        }
        $("#search").val("")
    })
})


$("#crStudent").on("click",(e)=>{
    e.preventDefault();
    let name = $("#crname").val().toUpperCase().trim()
    let bday = $("#crbday").val().toUpperCase()
    let level = $("#crlevel").val().toUpperCase().trim()
    let dances = $("#crdances").val().split(',')
    const Student ={
        name: name,
        bday: bday,
        level: level,
        dances: [...dances],
        lessons: [],
        moves:[]
    }
$.post("/api/students/new/", Student).then(data=>{
    console.log(data)
})
$("#crname").val("")
$("#crbday").val("")
$("#crlevel").val("")
$("#crdances").val("")
})

$(document).on("click", ".studButton", e=>{
    e.preventDefault()
    let mouse = e.target.dataset.student;
    console.log(mouse);

    $.get(`api/students/search/${mouse}`).then(res=>{
    console.log(res)
        currentStudent = res
        $("#upname").val(res.name)
        $("#upbday").val(res.bday)
        $("#uplevel").val(res.level)
        $("#updances").val(res.dances)
        $("#upaction").empty()
        $("#upaction").append(`<a class="upStudent">Submit</a>`)
    })
})

$(document).on("click", ".upStudent",e =>{
    e.preventDefault()
    let upStud ={
        _id:currentStudent._id,
        name:$("#upname").val().toUpperCase(),
        bday:$("#upbday").val().toUpperCase(),
        level:$("#uplevel").val().toUpperCase(),
        dances:$("#updances").val().toUpperCase().split(","),
        lessons: currentStudent.lessons,
        moves: currentStudent.moves
    }
    $.ajax({ method: "PUT",
            url:`/api/students/update/`,
            data: upStud
}).then((res)=>{ 
$("#upname").val(""),
$("#upbday").val(""),
$("#uplevel").val(""),
$("#updances").val("")
})
})


})