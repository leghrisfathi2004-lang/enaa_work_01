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
    for(Element in request){
        Element.time++;
    }
    request.unshift(req);
}

function show_taxi(n){
    console.log(`taxi id: ${taxis[n].id}===========\ntaxi position: ${taxis[n].position}`)
    console.log(`total rides: ${taxis[n].totalride.length}`);
    console.log(`time lifte: ${taxis[n].timeleft}\ndisponible: ${taxis[n].disponible}\ntotal rides: ${taxis[n].rides}`)
}

function show_req(n){

}

function closer_taxi(n){
    let min = n;
    let t;
    let k;
    for(let i = 0; i < taxis.length; i ++){
        t = Math.abs( n - taxis[i].position)
        if((taxis[i].disponible == true )&&( min >= t )){
           min = t; 
           k = i;
        } 
    }
    console;log(`plus proche taxi: ${min}`)
    return k;
}

function apply(id_rq,id_tx){
    console.log(`prepare taxi id: ${id_tx} for ride: ${id_rq}`);
    taxis[id_tx].position = request[id_rq].position ;
    taxis[id_tx].timeleft = request[id_rq].duration ;
    taxis[id_tx].disponible = false;
    request.splice[id_rq,1];
    for(let i = id_rq; i <= request.length; i++)
        request[i].id--;
    taxis[id_tx].ride.push(id_rq);
}

function menu(){
    console.log(`__________________menu__________________`);
    console.log(`1 ---> pour ajouter un taxi\n2 ---> pour ajouter un demande\n3 ---> pour affiche les taxis\n4 ---> pour affiche les demandes`)
    console.log(`0 ---> pour quite`)
    let choi = prompt(`entre votre reponde: `);
    return choi;
}


let choi = 1;

while(choi != 0){
    choi = menu();
    switch(choi){
        case 1:
            add_taxi();
            break;
        case 2:
            add_request();
            break;
        case 3:
            let c = promptmpt("1 ---> pour affiche tous les taxis\n2 ---> pour affiche les taxis disponible\n3 ---> pour affiche les demande fait par taxi")
    }
}



