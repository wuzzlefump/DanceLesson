
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
            let studButton= `<button data-student="${data[i]._id}">${data[i].name}</button>`
            $("#studContainer").append(studButton)  
            }
        }
    })

})

$("#upStudent").on("click",(e)=>{
    e.preventDefault()
    let name = $("#upname").val().toUpperCase().trim()
    let bday = $("#upbday").val()
    let level = $("#uplevel").val().toUpperCase().trim()
    let dances = $("#updances").val().split(',')
    console.log(name)
    console.log(bday)
    console.log(level)
    console.log(dances)
})

$("#delStudent").on("click",(e)=>{
    e.preventDefault();


})

$("#crStudent").on("click",(e)=>{
    e.preventDefault();
    let name = $("#crname").val().toUpperCase().trim()
    let bday = $("#crbday").val()
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
        dances: dances,
        lessons: [],
        moves:[]
    }
$.post("/api/students/new", Student).then(data=>{
    console.log(data)
})
})


})