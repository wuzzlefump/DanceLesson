
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
        const eastcoast = new DANCE("East Coast Swing",["Preliminary Moves","Single Tuck in turn", "Double Tuck in turn", "Shoulder Tuck in turn", "Lindy Turn"],["Intermediate Moves", "Right Lindy With Mans Under Arm","Right Lindy Combo","Sugar Foot To Hitch Kick", "Open Continuous Tuck in","Passing Changes" ],["Senior Moves", "Shuttle","Combination Tuck in","Traveling Shoulder Rolls","Just a Kickin'", "Rock and Roll" ],["Final Moves","Spin and Win", "Syncopated Press Break", "Solo Spins","Swing and Bop","Cuddle Grapevine"]);
        const mambo = new DANCE("Mambo",["Preliminary Moves","Basic/progressive","Cross Body Lead", "Break Steps","Natural Underarm","Reverse Underam" ],["Intermediate Moves","Crossover Breaks","Chase Turns A & B","Left Parallel Turn","Back Spot turn","Crossover Swivels" ],["Senior Moves", "Kick Breaks","Underarm Swivels", "5th pos Breaks with arm Loops", "Roll to wrap", "Open left turn to hip bounce" ],["Final Moves", "Pachenga Breaks","Mambo Hustle", "Hammer","Spot turn roll", "Salsa Swivels"  ]);
        const bolero = new DANCE("Bolero",["Preliminary Moves", "Bolero Basic", "Cross Body Lead","Fifth Pos Breaks","Crossover Breaks - Walkaround","UAT to the right"],["Intermediate Moves", "Left Side Pass", "UA Pass", "Offset Breaks", "Bolero Rocks", "Promenade Runs"],["Senior Moves", "Romantica","Pivots", "Danzon","Bolero Cuddle","Back to Back Line"],["Final Moves", "Follow Me", "La Bonita","Sensuous Swivels","De Amore"]);
        const foxtrot = new DANCE("Foxtrot",["Preliminary Moves", "Basic With Elements","Triple Twinkle","Grapevine to Spot Twinkle", "Cross Body Lead", "Box to Cuddle"],["Intermediate Moves","Promenade Twist Turn","Left Turning Rhythm Combo", "Right Turning Rhythm Combo","Outside Basic With Lady's UAT", "Promenade Pivot Turn" ],["Senior Moves", "Grapevinde Variation","Astaire Glide","Traveling Cradle to Grapevine","Top Hat Turns","Side By Side" ],["Final Moves", "Pivots to Zig Zag", "Left Ad Lib to Grapevine","Steppin Out","Running steps (Box Rhythm)", "Running Steps with UAT" ]);
        const waltz = new DANCE("Waltz",["Preliminary Moves", "Basic With Elements", "Cross Body Lead", "Progressive Twinkles","Backward Progressive Twinkles", "Traveling Cradles"],["Intermediate Moves", "Promenade Chasse","Zig Zag Twinkles","Left turn With UA", "Right Turn With UA","Waterfall" ],["Senior Moves", "Chasse and Runaround","Arm Loop Twinkles", "Fallaway and Rock", "Chasse and Lock","Promenades"  ],["Final Moves","Side By Side","Spin Pivots", "Outside Locks","Chasse variation","Running Steps"]);
        const tango = new DANCE("Tango",["Preliminary Moves","Basic With Elements", "Right Side Fan", "Running Steps", "Forward Rock Steps","Open Fan Variation" ],["Intermediate Moves", "Running Steps in 3 Positions", "Three Fan Combo","Left Turning Rock","Contra Rocks", "Rock and Fan" ],["Senior Moves", "Check and Corte","Apache THrowout", "Leg Hooks","Open Hinge","Pivots to Outside Check",],["Final Moves", "Tango Overswing","Lunge to Head Snaps","Promenade Flick and Twist","La Cumparsita", "Open Left Turn To Contra Rock" ]);
        const viennese = new DANCE("Viennese Waltz",["Preliminary Moves","Left Turn","Right Turn", "Balance Steps Fwd Back/Side-side","5th pos Breaks", "Progressive Open Balance" ],["Intermediate Moves","Backward Balance Steps","Fwd and Back Balance to Rt Open","Open Break to UAT","Backward Progressive basic combo", "Back to Back Box" ],["Senior Moves", "Progressive open Balance with hand change","Vienna Under Arm","Canter Turns","Ronde and Lock","Rught Turn With UA", ],["Final Moves","Open Canters","Austrian Turns","Parallel Run", "Merlot"]);
        const samba = new DANCE("Samba",["Preliminary Moves", "Samba Basic/Box","5th pos Breaks/Progressive 5th pos breaks","Promenade Conversa","Triple Chasse","Left Cross Turn",  ],["Intermediate Moves", "Samba Rhythms","Reverse Conversa","Conversa Combo","Open Break Variation","Samba Mambo"],["Senior Moves","5th Pos to Promenade Swivels","Turning Conversa","Promenade Flips","Fallaway Volta","Margarita"],["Final Moves","Brazillian Flirt","Copa Spins","Fiesta Locks", "Traveling UAT", "Maxixe Variation" ]);
        const pasodoble = new DANCE("Paso Doble",["Preliminary Moves","Fwd back walks","Chasse to Left","Promenade Flick","Throwout with UA", "Chasse Combo"],["Intermediate Moves", "Six Count Rt turn ", "Fallaway Cape", "Advanced Throwout","LFT and RT UAT","Lady's Caping Walk"],["Senior Moves","8 Count Right Turn","Press Line To UAT","Cross Over Press", "Chasse Cape","Cape Points"],["Final Moves","Banderillas","Spanish Lunges","Brand Circle to cuddle" ]);
        const merengue = new DANCE("Merengue",["Preliminary Moves", "Basic Chasse", "Fwd and Back Walks","Throwout", "UAT to Right","Reverse UAT"],["Intermediate Moves","Chasse Combo","Compadre Bump", "Alternating Arm Loops", "IBO Rhythm Fwd and Back","IBO Rhythm Side"],["Senior Moves", "Cuban Pete", "Tropical Push", "Wrap Around", "IBO Rock", "Caribbean Rocks"],["Final Moves","Latin Wraps","Hot Tamale","Pretzel"]);
        const westcoast = new DANCE("West Coast Swing",["Preliminary Moves", "Link to Throwout a/b", "Sugar Push", "Left Side Pass/UA Pass", "Right Hand Tuck In Spin", "Reverse Spin From Right Side Pass"],["Intermediate Moves", "Sugar Push to Suprise Tuck in", "Sugar Push Swivel", "The Whip", "Whip Endings a,b,c", "Continuous Whip Turn"],["Senior Moves", "Whip with COntinuous Reverse Underarm","Back Whip", "Pivots to Shoulder Check", "Shaggin'", "Ronde to One Arm Bandit"],["Final Moves", "Opposition Breaks", "Tunnel With Mans Hand Change","Shoulder Turn With Head Roll"]);
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