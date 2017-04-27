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



function indsaetResultat(e) {
    antalSider = 0; //Angiv antal sider som brugeren har indtastet
    e.preventDefault(); //Forhindre at siden reloader
    input_A = parseFloat(document.getElementById("vinkel_a").value);
    input_a = parseFloat(document.getElementById("side_a").value);
    input_B = parseFloat(document.getElementById("vinkel_b").value);
    input_b = parseFloat(document.getElementById("side_b").value);
    input_C = parseFloat(document.getElementById("vinkel_c").value);
    input_c = parseFloat(document.getElementById("side_c").value);


    //Mangler at validerer at brugeren har indtastet minumim 3 felter, hvor min 1 er en side

    //Her tjekker vi om inputet har værdien ikke et NaN, (altså om det er et nummer)
    if (!isNaN(input_A)) {
    A = input_A;
    }
    if (!isNaN(input_a)) {
    a = input_a;
    antalSider ++;
    }
    if (!isNaN(input_B)) {
    B = input_B;
    }
    if (!isNaN(input_b)) {
    b = input_b;
    antalSider ++;
    }
    if (!isNaN(input_C)) {
    C = input_C;
    }
    if (!isNaN(input_c)) {
    c = input_c;
    antalSider ++;
    }


};



document.addEventListener('submit', indsaetResultat);   //Kører funktionen når der trykkes på submit


//Alt herover virker
//------------------------------------------------------------------------------



// Her vælger vi hvilken regnemetode vi skal anvende, baseret på antallet af sider, som brugeren indtastede
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



function udregnTreVinkler() {
    A = acos((b^2+c^2-a^2)/2*b*c);
    B = acos((a^2+c^2-b^2)/2*b*c);
    C = acos((a^2+b^2-c^2)/2*b*c);
};
function udregnToVinkler() {    //Mangler at tjekke om vi har de nødvendige sider til at udregne
    if (A > 0) {
        B = acos((a^2+c^2-b^2)/2*b*c);
        C = acos((a^2+b^2-c^2)/2*b*c);
    } else if (B > 0) {
        A = acos((b^2+c^2-a^2)/2*b*c);
        C = acos((a^2+b^2-c^2)/2*b*c);
    } else {
        A = acos((b^2+c^2-a^2)/2*b*c);
        B = acos((a^2+c^2-b^2)/2*b*c);
    }
};
function udregnToSider() {
    // Indsæt udregninger
};
function udregnHøjde() {
    // Indsæt udregninger
};

function udregnAreal() {
    areal = (a * ha) / 2;
};
function udregnOmkreds() {
    omkreds = a + b + c;
};




// Indsæt alle resultaterne på siden

function visResultat() {
    document.getElementById("vinkel_a_resultat").innerHTML = A;
    document.getElementById("side_a_resultat").innerHTML = a;
    document.getElementById("højde_a_resultat").innerHTML = ha;
    document.getElementById("vinkel_b_resultat").innerHTML = B;
    document.getElementById("side_b_resultat").innerHTML = b;
    document.getElementById("højde_b_resultat").innerHTML = hb;
    document.getElementById("vinkel_c_resultat").innerHTML = C;
    document.getElementById("side_c_resultat").innerHTML = c;
    document.getElementById("højde_c_resultat").innerHTML = hc;
    document.getElementById("areal_resultat").innerHTML = areal;
    document.getElementById("omkreds_resultat").innerHTML = omkreds;
};

//Mangler at tjekke om det virker
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