const prompt = require ("prompt-sync")();

//comprais, recherche, reverse fabonacci et trans to code
function def1(n){
    //let n = Number(prompt(`entre la valeur n:`));
    let tab = [];

    tab[1] = 1;
    tab[2] = 2;
    for(let i = 1; i <= n; i++){
        tab[i+2] = tab [i+1] + tab[i];   
    }
    console.log(tab[n]);
    return tab;
}

//comprais, transfere les condition to code et contuine 
function def2(n){
    //let n = Number(prompt(`entre la valeur n:`));

    if((n % 3 == 0)&&(n % 5 == 0)) 
        console.log(`TechLead `);
    else if(n % 3 == 0)
        console.log(`Tech`);
        else if(n % 5 == 0)
            console.log(`lead`);
}

//comprais, cree boucle pour select et autre pour comparis et foi counte combein repetition, si plus que 1 suppreme
function def3(tab){
    //let tab = [1, 2, 2, 3, 4, 4, 5];
    for(let i = 0; i < tab.length; i++){
        let foi = 0;
        for(let j = 0; j < tab.length; j++){
            if(tab[i] == tab[j]) foi++;
            if(foi > 1){
                tab.splice(j,1);
                foi = 1;
            } 
        }
    }
    console.log(tab);
}



//comprais, transfere condition to code et contuine
function def4(tab){
    //let tab = [2, 4, 6, -3, 5, 7];
    let somme = 0;
    let i = 0;
    while(tab[i] >= 0){
        somme += tab[i];
        i++;
}
console.log(`la somme est:${somme}`);
}


//comprais, try to cree tab inverse, mais apres decide to inverse in meme tableau
function def5(tab){
    //let tab = [1, 2, 3];
    let n = tab.length;
    for(let i = n-1 ; i >= 0; i--){
        tab.push(tab[i]);
    }
    console.log(tab)
}




//comprais
function def6(mot){
    //let mot = "development";
    let v = ['e', 'a', 'y', 'u', 'i', 'o']
    let c = 0;
    let i = 0;
    while(i < mot.length){
        for(let j = 0; j < v.length ; j++){
            if(mot[i] == v[j]) c++;
        }
        i++;
    }
    console.log(c);
}



function def7(mot){
    //let mot = prompt(`entre la mot:`);
    let count = 0;
    let motinv = [];
    motinv = mot.split();
    motinv.reverse();
    motinv.join('');

    if(motinv === mot)
        console.log('true');
    else
        console.log('false');
}

function def8(word){
    let obj = {};
    for(letter of word){
        if(!obj[letter])
            obj[letter] = 1;
        else obj[letter] += 1;
    }
    return obj;
}


function def9(n){
    //3 vide = 1 plein    1 plein = 1vide
    //let n = prompt(`entre combein bottle: `);
    let total = n;
    while(n % 3 == 0){
        n /= 3;
        total += n;
    }
    console.log(`bottles total: ${total}`);
}


function def10(tab){
    //let tab = [1, 1, 0, 1, 0]
    for(let i = 0; i<tab.length; i++)
        if(tab[i] == 0){
            console.log(`première place libre: ${i}`);
            break;
        }
}


function def11(tab){
    //let tab = [1, 2, 3, 5];
    for(let i = 0; i < tab.length; i++){
        if(tab[i] != i+1)
            console.log(`manque :${i+1}`);
    }
}
    

