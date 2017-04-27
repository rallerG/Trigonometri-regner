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



function startProgram(e) {
    nustil();
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

    udregn();
    udregnHøjde();
    udregnAreal();
    udregnOmkreds();
    visResultat();

};



document.addEventListener('submit', startProgram);   //Kører funktionen når der trykkes på submit


//Alt herover virker
//------------------------------------------------------------------------------



// Her vælger vi hvilken regnemetode vi skal anvende, baseret på antallet af sider, som brugeren indtastede
function udregn() {
    switch (antalSider) {
        case 3:
            console.log("case 3");
            udregnTreVinkler(); break;
        case 2:
            console.log("case 2");
            UdregnToVinkler(); break;
        case 1:
            console.log("case 1");
            UdregnToSider(); break;
        default:
            console.log("Switch failed");
            return false;
    };
};



function udregnTreVinkler() {
    console.log("udregner 3 vinkler ", A, B, C);
    A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);    //Den sidste del omdanner radianer til grader
                                                                                            //Dette er fordi at Math.cos() og lignende har radianer som output
    console.log(A);

    B = (Math.acos((Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/(2*a*c)))*(180/Math.PI);
    console.log(B);

    C = (Math.acos((Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2))/(2*a*b)))*(180/Math.PI);
    console.log(C);
};

function udregnToVinkler() {    //Mangler at tjekke om vi har de nødvendige sider til at udregne
    if (a > 0 && b > 0) {
            if (A > 0){
                B = (Math.asin((Math.sin(A)*b)/a))*(180/Math.PI);
                C = 180 - A - B;
            } else if (B > 0) {
                A = (Math.asin((Math.sin(B)*a)/b))*(180/Math.PI);
                C = 180 - A - B
            } else {
                c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos(C)); ///////////Skal muligvis omregnes til grader
                A = (Math.asin((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);
                B = (Math.asin((Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/(2*a*c)))*(180/Math.PI);
            }
        } else if (a > 0 && c > 0) {
            //udregning af b
        } else {
            //udregning af a
    }

    
    if (A > 0) {
        B = (Math.acos((Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/(2*a*c)))*(180/Math.PI);
        C = (Math.acos((Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2))/(2*a*b)))*(180/Math.PI);
    } else if (B > 0) {
        A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);
        C = (Math.acos((Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2))/(2*a*b)))*(180/Math.PI);
    } else {
        A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);
        B = (Math.acos((Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/(2*a*c)))*(180/Math.PI);
    }
};

//Udregning af en vinkel og 2 sider
function udregnToSider() {
    if (A > 0 && B > 0) {
        C = 180 - A - B;                        //udregner vinkel C
        if (a > 0) {                            //udregner side b & c
           b = ((Math.sin(B)*a)/Math.sin(A))*(180/Math.PI);
           c = ((Math.sin(C)*a)/Math.sin(A))*(180/Math.PI);
       } else if (b > 0) {                      //udregner side a & c
           a = ((Math.sin(A)*b)/Math.sin(B))*(180/Math.PI);
           c = ((Math.sin(C)*b)/Math.sin(B))*(180/Math.PI);
       } else {                                //udregner side a & b
           a = ((Math.sin(A)*c)/Math.sin(C))*(180/Math.PI);
           b = ((Math.sin(B)*c)/Math.sin(C))*(180/Math.PI);
       }

    } else if (B > 0 && C > 0) {
       A = 180 - B - C;                       //udregner vinkel A
       if (a > 0) {
           b = ((Math.sin(B)*a)/Math.sin(A))*(180/Math.PI);
           c = ((Math.sin(C)*a)/Math.sin(A))*(180/Math.PI);
       } else if (b > 0) {
           a = ((Math.sin(A)*b)/Math.sin(B))*(180/Math.PI);
           c = ((Math.sin(C)*b)/Math.sin(B))*(180/Math.PI);
       } else {
           a = ((Math.sin(A)*c)/Math.sin(C))*(180/Math.PI);
           b = ((Math.sin(B)*c)/Math.sin(C))*(180/Math.PI);
       }

    } else {
        B = 180 - A - C;                        //udregner vinkel B
        if (a > 0) {
            b = ((Math.sin(B)*a)/Math.sin(A))*(180/Math.PI);
            c = ((Math.sin(C)*a)/Math.sin(A))*(180/Math.PI);
        } else if (b > 0) {
            a = ((Math.sin(A)*b)/Math.sin(B))*(180/Math.PI);
            c = ((Math.sin(C)*b)/Math.sin(B))*(180/Math.PI);
        } else {
            a = ((Math.sin(A)*c)/Math.sin(C))*(180/Math.PI);
            b = ((Math.sin(B)*c)/Math.sin(C))*(180/Math.PI);
        }
    }
    
};

function udregnHøjde() {
    ha = (b*Math.sin(C))/Math.sin(90);
    hb = (c*Math.sin(A))/Math.sin(90);
    hc = (a*Math.sin(B))/Math.sin(90);
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

//Nulstiller alle variabler
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