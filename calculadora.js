function calcularRank(wins, deafts){
    let Profit = wins - deafts;
    let level;
    if (wins < 10){
        level = "Ferro";
    } 
    else if (wins >= 11 && wins <= 20){
        level = "Bronze";
    } 
    else if (wins >= 21 && wins <= 50){
        level = "Prata";
    } 
    else if (wins >= 51 && wins <= 80){
        level = "Ouro";
    } 
    else if (wins >= 81 && wins <= 90){
        level = "Diamante";
    } 
    else if (wins >= 91 && wins <= 100){
        level = "Lendário";
    } 
    else if (wins >= 101){
        level = "Imortal";
    }
    return {Profit, level};
}
let wins = 25;
let deafts = 20;
let result = calcularRank(wins, deafts);
console.log(`O Herói tem de saldo de ${result.Profit} está no nível de ${result.level}`);