//Mangler udregning
    var A = 0;
    var a = 0;
    var hA = 0;
    var B = 0;
    var b = 0;
    var hB = 0;
    var C = 0;
    var c = 0;
    var hC = 0;
    var areal = 0;
    var omkreds = 0;

function klik()
{
    if( Array.prototype.slice.call(document.querySelectorAll('.vinkelogsider')).map(el => el.value).filter(val => val != "").length === 3 ) {

    }
    else {
        alert('Du SKAL vælge 3 parameter');
    }
}

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
    udregnOmkreds();
    udregnAreal();
    udregnHøjde();
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
            udregnToVinkler(); break;
        case 1:
            console.log("case 1");
            udregnToSider(); break;
        default:
            console.log("Switch failed");
            return false;
    };
};



function udregnTreVinkler() {
    
    A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);    //Den sidste del omdanner radianer til grader
                                                                                            //Dette er fordi at Math.cos() og lignende har radianer som output
    B = (Math.acos((Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/(2*a*c)))*(180/Math.PI);

    C = (Math.acos((Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2))/(2*a*b)))*(180/Math.PI);

};

function udregnToVinkler() {    //VIRKER IKKE
    if (a > 0 && b > 0) {
            if (A > 0){             
                B = (Math.asin((Math.sin((A/180)*Math.PI)*b)/a))*(180/Math.PI);
                C = 180 - A - B;
                c = ((Math.sin((C/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
            } else if (B > 0) {
                A = (Math.asin((Math.sin((B/180)*Math.PI)*a)/b))*(180/Math.PI);
                C = 180 - A - B;
                c = ((Math.sin((C/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
            } else {
                c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos((C*Math.PI)/180));
                A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);
                B = 180 - C - A;
            }
        } else if (a > 0 && c > 0) {
            if (A > 0) {
                C = (Math.asin((Math.sin((A/180)*Math.PI)*c)/a))*(180/Math.PI);
                B = 180 - A - C;
                b = ((Math.sin((B/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
            } else if (B > 0) {
                b = Math.sqrt(Math.pow(a, 2)+Math.pow(c, 2)-2*a*c*Math.cos((B*Math.PI)/180));
                A = (Math.acos((Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/(2*b*c)))*(180/Math.PI);
                C = 180 - A - B;
            } else {
                A = (Math.asin((Math.sin((C/180)*Math.PI)*a)/c))*(180/Math.PI);
                B = 180 - A - C;
                b = ((Math.sin((B/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
            }
        } else {
            if ( A > 0) {
                a = Math.sqrt(Math.pow(b, 2)+Math.pow(c, 2)-2*b*c*Math.cos((A*Math.PI)/180));
                C = (Math.acos((Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2))/(2*a*b)))*(180/Math.PI);
                B = 180 - A - C;
            } else if (B > 0) {
                C = (Math.asin((Math.sin((B/180)*Math.PI)*c)/b))*(180/Math.PI);
                A = 180 - C - B;
                a = ((Math.sin((A/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
            } else {
                B = (Math.asin((Math.sin((C/180)*Math.PI)*b)/c))*(180/Math.PI);
                A = 180 - B - C;
                a = ((Math.sin((A/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
            }
    }
};

//Udregning af en vinkel og 2 sider
function udregnToSider() {          //VIRKER IKKE
    if (A > 0 && B > 0) {
        C = 180 - A - B;                        //udregner vinkel C
        if (a > 0) {                            //udregner side b & c
           b = ((Math.sin((B/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
           c = ((Math.sin((C/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
       } else if (b > 0) {                      //udregner side a & c
           a = ((Math.sin((A/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
           c = ((Math.sin((C/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
       } else {                                //udregner side a & b
           a = ((Math.sin((A/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
           b = ((Math.sin((B/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
       }

    } else if (B > 0 && C > 0) {
       A = 180 - B - C;                       //udregner vinkel A
       if (a > 0) {
           b = ((Math.sin((B/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
           c = ((Math.sin((C/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
       } else if (b > 0) {
           a = ((Math.sin((A/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
           c = ((Math.sin((C/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
       } else {
           a = ((Math.sin((A/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
           b = ((Math.sin((B/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
       }

    } else {
        B = 180 - A - C;                        //udregner vinkel B
        if (a > 0) {
            b = ((Math.sin((B/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
            c = ((Math.sin((C/180)*Math.PI)*a)/Math.sin((A/180)*Math.PI));
        } else if (b > 0) {
            a = ((Math.sin((A/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
            c = ((Math.sin((C/180)*Math.PI)*b)/Math.sin((B/180)*Math.PI));
        } else {
            a = ((Math.sin((A/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
            b = ((Math.sin((B/180)*Math.PI)*c)/Math.sin((C/180)*Math.PI));
        }
    }
    
};

function udregnOmkreds() {
    omkreds = a + b + c;
};
//Til at udregne arealet gør vi brug af Herons formel
function udregnAreal() {
    s = omkreds/2;
    areal = Math.sqrt(s*(s-a)*(s-b)*(s-c));
};
function udregnHøjde() {
    hA = (areal*2)/a;
    hB = (areal*2)/b;
    hC = (areal*2)/c;
};



// Indsæt alle resultaterne på siden

function visResultat() {
    document.getElementById("vinkel_a_resultat").innerHTML = round(A);
    document.getElementById("side_a_resultat").innerHTML = round(a);
    document.getElementById("højde_a_resultat").innerHTML = round(hA);
    document.getElementById("vinkel_b_resultat").innerHTML = round(B);
    document.getElementById("side_b_resultat").innerHTML = round(b);
    document.getElementById("højde_b_resultat").innerHTML = round(hB);
    document.getElementById("vinkel_c_resultat").innerHTML = round(C);
    document.getElementById("side_c_resultat").innerHTML = round(c);
    document.getElementById("højde_c_resultat").innerHTML = round(hC);
    document.getElementById("areal_resultat").innerHTML = round(areal);
    document.getElementById("omkreds_resultat").innerHTML = round(omkreds);
};

//Nulstiller alle variabler
function nustil() {
    A = 0;
    a = 0;
    hA = 0;
    B = 0;
    b = 0;
    hB = 0;
    C = 0;
    c = 0;
    hC = 0;
    areal = 0;
    omkreds = 0;
};

//Her runder vi vores resultat ned til 2 decimaler
const round = x => Math.round(x * 100) / 100