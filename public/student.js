
$(document).ready(()=>{
$("#studSearch").on("click",(e)=>{
    e.preventDefault();
    let search = $("#search").val();
    console.log(search.toLowerCase())

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