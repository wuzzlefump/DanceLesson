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
            currentStudent=res
            $("#names").text(" "+res.name)
            $("#bdays").text(" "+res.bday.toUpperCase())
            $("#levels").text(" "+ res.level)
            $("#danceCon").text(" "+res.dances.join(', ').toUpperCase())
            $("#dancemoves").empty()
            res.dances.forEach(item => {
                $("#dancemoves").append(`<div class = "card-action"><h4>${item.toUpperCase()} MOVES</h4><br><textarea class="materialize-textarea" id = "${item}text"></textarea><br><button class="addMove amber" data-name ="${item}">Add Move</button><div id ="${item}Con"></div></div>`)
                res.moves.forEach(move=>{
                    if(move.dance===item){
                        $("#"+item+"Con").append(`<div class="chip amber">
                        ${move.name}
                        <i class="close material-icons closemove" data-close ="${move._id}">X</i>
                      </div>`)
                    }
                })
            });
            $("#lessonContainer").empty()
            res.lessons.forEach(lesson=>{
                $("#lessonContainer").append(`<div class ="chip amber"><a class="lessButton" style ="color: black;" data-lesson="${lesson._id}">${lesson.title}</a><i class="close material-icons closelesson" data-close ="${lesson._id}">X</i> </div><br>`)
            })
        })
    })
    
    $(document).on("click", ".addMove",(e)=>{
        e.preventDefault();
        let mouse = e.target.dataset.name
        let param ={
            name:$("#"+mouse+"text").val(),
            dance:mouse,
            studid:currentStudent._id,
        }
        console.log(param)
        $.post("/api/moves/new", param).then(data=>{
            console.log(data)
        })

    })

    $("#saveLess").on("click",e=>{
        e.preventDefault();
        console.log(currentStudent._id)
        if(currentStudent._id === undefined){
            return
        }else{
            let param ={
                title:$("#lessonTitle").val(),
                details:$("#lesson").val(),
                studid:currentStudent._id,
            }
            console.log(param)
            $.post("/api/lessons/new", param).then(data=>{
                
            })
        }
    })
    })