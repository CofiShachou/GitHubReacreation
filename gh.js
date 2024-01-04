let btn1 = $("#userButton");
let btn2 = $("#projectButton");

let x = 0;
function ent1() {
    if (x == 0) {
        btn2.css({ "color": "var(--boja3)", "outline": "0.1px solid var(--boja3)" });
    }
}
function leav1() {
    if (x == 0) {
        btn2.css({ "color": "var(--boja1)", "outline": "0.1px solid var(--boja4)" });
    }
}

function ent2() {
    if (x != 0) {
        btn1.css({ "color": "var(--boja3)", "outline": "0.1px solid var(--boja3)" });
    }
}
function leav2() {
    if (x != 0) {
        btn1.css({ "color": "var(--boja1)", "outline": "0.1px solid var(--boja1)" });
    }
}



$("#projectButton").mouseenter(() => {
    ent1();
})
$("#projectButton").mouseleave(() => {
    leav1();
})

$("#userButton").mouseenter(() => {
    ent2();
})

$("#userButton").mouseleave(() => {
    leav2()
})






btn2.click(() => {
    x = 1;
    btn1.css({ "color": "var(--boja1)", "outline": "0.1px solid var(--boja4)", "background-color": "var(--boja7)" });

    btn2.css({ "color": "var(--boja7)", "outline": "0.1px solid var(--boja3)", "background-color": "var(--boja3)" });

    $("#prvi").css("display", "none");
    $("#drugi").css("display", "block");
})

btn1.click(() => {
    x = 0;
    btn1.css({ "color": "var(--boja7)", "outline": "0.1px solid var(--boja3)", "background-color": "var(--boja3)" });

    btn2.css({ "color": "var(--boja1)", "outline": "0.1px solid var(--boja4)", "background-color": "var(--boja7)" });

    $("#prvi").css("display", "block");
    $("#drugi").css("display", "none");
})





