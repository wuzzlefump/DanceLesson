
  $(document).ready(function(){
    $('select').formSelect();
    function DANCE(name,pre,int,sen,fin){
    this.name = name;
    this.pre= pre;
    this.int= int;
    this.sen= sen;
    this.fin= fin;

}

    $('#danceSubmit').on("click", event=>{
        event.preventDefault();
        //moves
        const rumba = new DANCE("Rumba",["Preliminary Moves","Basic with elements","offeset breaks","UAT To Cuban Walk", "Crossover Breaks", "Parallel to Fifth position"],["Intermediate Moves", "Back Sppot Turn", "Forward Spot Turn","Turn and Break Combo", "Fith pos Walks", "Fifth Pos to open Cuban walks"], ["Senior Moves", "Cuddle walks to Checks","Turns and Breaks", "Traveling Breaks", "Traveling Underarm", "Wrap Around"], ["Final Moves", "Alternative Crossovers", "Switches", "Snap Underarm to Swivel Walks","Parallel Side Breaks", "Rumba Fans" ]);
        const chacha = new DANCE("Cha Cha", ["Preliminary Moves", "Basic with Elements", "Cha Cha Passes", "Parallel Breaks","Cross Triple Step","Check and Rock"], ["Intermediate Moves", "Back Spot Turn Variation","Forward Spot Turn to Check","Manhatten Rollout","Sweatheart Break","Knee Lift"],["Senior Moves", "Cross Triple Passes","Crossover and Break","Outside Locks","Heel Toe Swivels", "Check to Ronde"], ["Final Moves","Man's Rhythm Turns","Swivel and hook","Isolated Rhythms","Roundabout Crossovers", "Brock Bump"  ] );
        const eastcoast = new DANCE("East Coast Swing",["Preliminary Moves","Single Tuck in turn", "Double Tuck in turn", "Shoulder Tuck in turn", "Lindy Turn"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const mambo = new DANCE("Mambo", ["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const bolero = new DANCE("Bolero",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const foxtrot = new DANCE("Foxtrot",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const waltz = new DANCE("Waltz",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const tango = new DANCE("Tango",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const viennese = new DANCE("Viennese Waltz",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const samba = new DANCE("Samba",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const pasodoble = new DANCE("Paso Doble",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const merengue = new DANCE("Merengue",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const westcoast = new DANCE("West Coast Swing",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const bachata = new DANCE("Bachata",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const salsa = new DANCE("Salsa",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const country = new DANCE("Country 2 step",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const latinrumba = new DANCE("Latin Rumba",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const latinchacha = new DANCE("Latin Cha Cha",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const jive = new DANCE("Jive",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const latinsamba= new DANCE("Latin Samba",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const latinpaso = new DANCE("Latin Paso Doble",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const slowwaltz= new DANCE("Slow Waltz",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const slowfox= new DANCE("Slow Foxtrot",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const standardtango= new DANCE("Standard Tango",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const quickstep= new DANCE("Quickstep",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const standardviennese= new DANCE("Standard Viennese Waltz",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const argentine = new DANCE("Argentine Tango",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const hustle = new DANCE("Hustle",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
        const  zouk = new DANCE("Zouk",["Preliminary Moves"],["Intermediate Moves"],["Senior Moves"],["Final Moves"]);
//moves

       $("#moveContainer").empty() 



    })
  });