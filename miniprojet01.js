const prompt = require ("prompt-sync")();

const taxis = [];

const request = [];

function add_taxi(){
    console.log(`===========entre la ${taxis.length} taxi===========`)
    let taxi = {};
    taxi.id = taxis.length;
    taxi.position = prompt ('entre la position de taxi:');
    taxi.timeleft = 0;
    taxi.disponible = true;
    taxi.totalride = [];
    taxis.push(taxi)
    console.log("===========success===========");
}

function add_request(){
    let req = {};
    req.id = request.length;
    req.position =Number (prompt(`entre votre position: `));
    req.duration =Number (prompt(`entre votre duration: `));
    req.time = 1;
    for(element in request){
        request[element].time ++;
    }
    request.unshift(req);
}

function show_taxi(n){
    console.log(`taxi id: ${taxis[n].id}===========\ntaxi position: ${taxis[n].position}`)
    console.log(`total rides: ${taxis[n].totalride.length}`);
    console.log(`time lifte: ${taxis[n].timeleft}\ndisponible: ${taxis[n].disponible}\n`)
}

function show_req(n){
    console.log(`request id: ${request[n].id}===========\nrequest position: ${request[n].position}`)
    console.log(`request duration: ${request[n].duration}`);
    console.log(`request time: ${request[n].time}\n`);
}

function closer_taxi(m){
    let min = request[m].position;
    let n = request[m].position
    let t;
    let k;
    for(Element in taxis){
        t = Math.abs( n - taxis[Element].position)
        if((taxis[Element].disponible == true )&&( min > t )){
           min = t; 
           k = Element;
        } 
    }
    console.log(`plus proche taxi: ${min}`)
    return k;
}

function apply(id_rq,id_tx){
    console.log(`prepare taxi id: ${id_tx} for ride: ${id_rq}`);
    taxis[id_tx].position = request[id_rq].position ;
    taxis[id_tx].timeleft = request[id_rq].duration ;
    taxis[id_tx].disponible = false;
    taxis[id_tx].totalride.push(request[id_rq]);
    request.splice(id_rq,1);

}

function show_opt(){
    console.log(`1 ---> pour affiche tous les taxis\n2 ---> pour affiche les taxis disponible\n3 ---> pour affiche les demande fait par taxi`)
    let d = Number( prompt ("votre choi: "));
    switch(d){
        case 1:
            for(let i = 0; i < taxis.length; i++)
                show_taxi(i);
            break;
        case 2:
            for(let i = 0; i < taxis.length; i++)
                if(taxis[i].disponible == true) show_taxi(i);
            break;
        case 3:
            let k = Number(prompt(`entre id de votre taxi: `));
            console.log(taxis[k].totalride);
            break;
        default:
            break;
    }
}
function apply_opt(){
    let a =  Number(prompt(`  1 --->pour plus incient demande\n  2 --->pour select demande\nvotre choi: `));
    if(a == 1) a = request.length-1
    else if(a == 2)    a = prompt(`entre id de un demande: `)
        else console.log(`invalid!`);
    apply(a, closer_taxi(a));
}

function menu(){
    let ch;
    console.log(` _________________menu___________________`);
    console.log(`|1 ---> pour ajouter un taxi             |\n|2 ---> pour ajouter un demande          |\n|3 ---> pour affiche les taxis           |\n|4 ---> pour affiche les demandes        |\n|5 ---> pour apply taxi pour un demande  |\n|0 ---> pour quite                       |`)
    console.log(`|________________________________________|`)
    ch = Number( prompt(`entre votre reponde: `));
    return ch;
}

let a;
let choi = menu();

while(choi != 0){
    switch(choi){
        case 0:
            break;
        case 1:
            add_taxi();
            break;
        case 2:
            add_request();
            break;
        case 3:
           show_opt();
            break;
        case 4:
            for(let i = 0; i < request.length; i++){
                show_req(request[i].id);
            }
            break;
        case 5:
            apply_opt();
            break;
           
        default:
            console.log(`invalid!`)
            break;
    }
    choi = menu();
}



