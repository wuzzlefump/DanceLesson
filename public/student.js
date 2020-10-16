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
                let studButton= `<div class ="chip amber"><a class="studButton" style ="color: black;" data-student="${data[i]._id}">${data[i].name}</a><i class="close material-icons closestud" data-close ="${data[i]._id}">X</i> </div><br>`
                $("#studContainer").append(studButton);
            }
        }
    })
})

$(document).on("click",".studButton", (e)=>{
    let mouse = e.target.dataset.student;
    console.log(mouse);

    $.get(`api/students/search/${mouse}`).then(res=>{
        console.log(res)
    })
})



$("#delStudent").on("click",(e)=>{
    e.preventDefault();


})

$("#crStudent").on("click",(e)=>{
    e.preventDefault();
    let name = $("#crname").val().toUpperCase().trim()
    let bday = $("#crbday").val().toUpperCase()
    let level = $("#crlevel").val().toUpperCase().trim()
    let dances = $("#crdances").val().split(',')
    console.log(name)
    console.log(bday)
    console.log(level)
    console.log(dances)

    const Student ={
        name: name,
        bday: bday,
        level: level,
        dances: [...dances],
        lessons: [],
        moves:[]
    }
$.post("/api/students/new", Student).then(data=>{
    console.log(data)
})
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
console.log(res) 
})
})

$(document).on("click",".closestud", e=>{
    e.preventDefault()
    let mouse = e.target.dataset.close
    let del = confirm("Are you sure you want to delete?")
    if(del === true){
        $.ajax({
            method:"DELETE",
            url:`/api/students/delete/${mouse}`
        }).then(data=>{

        })
    }
})

})