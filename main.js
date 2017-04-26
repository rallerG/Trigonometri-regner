function visResultat() {
    var input_A = document.getElementById("vinkel_a")
    var input_a = document.getElementById("side_a")
    var input_ha = document.getElementById("højde_a")
    var input_B = document.getElementById("vinkel_b")
    var input_b = document.getElementById("side_b")
    var input_hb = document.getElementById("højde_b")
    var input_C = document.getElementById("vinkel_c")
    var input_c = document.getElementById("side_c")
    var input_hc = document.getElementById("højde_c")
};



var antalsider = 0; //Angiv antal sider som brugeren har indtastet

function udregn() {
    switch (antalSider) {
        case 3:
            udregnTreVinkler(); break;
        case 2:
            UdregnToVinkler(); break;
        case 1:
            UdregnToSider(); break;
        default:
            return false;
    };
};



function udregnTreVinkler(){
    // Indsæt udregninger
};
function udregnToVinkler(){
    // Indsæt udregninger
};
function udregnToSider(){
    // Indsæt udregninger
};
function udregnAreal(){
    var areal = (a * ha) / 2;
};
function udregnOmkreds(){
    var omkreds = a + b + c;
};


//Mangler udregning
    var A = 0;
    var a = 0;
    var ha = 0;
    var B = 0;
    var b = 0;
    var hb = 0;
    var C = 0;
    var c = 0;
    var hc = 0;
    var areal = 0;
    var omkreds = 0;

// Indsæt alle resultaterne på siden
function visResultat() {
    document.getElementById("vinkel_a_resultat").innerHTML = input_A;
    document.getElementById("side_a_resultat").innerHTML = input_a;
    document.getElementById("højde_a_resultat").innerHTML = input_ha;
    document.getElementById("vinkel_b_resultat").innerHTML = input_B;
    document.getElementById("side_b_resultat").innerHTML = input_b;
    document.getElementById("højde_b_resultat").innerHTML = input_hb;
    document.getElementById("vinkel_c_resultat").innerHTML = input_C;
    document.getElementById("side_c_resultat").innerHTML = input_c;
    document.getElementById("højde_c_resultat").innerHTML = input_hc;
    document.getElementById("areal_resultat").innerHTML = areal;
    document.getElementById("omkreds_resultat").innerHTML = omkreds;
};

function nustil() {
    A = 0;
    a = 0;
    ha = 0;
    B = 0;
    b = 0;
    hb = 0;
    C = 0;
    c = 0;
    hc = 0;
    areal = 0;
    omkreds = 0;
};