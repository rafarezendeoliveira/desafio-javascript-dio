let NomeHeroi = "Batman"
let NivelHeroi = 1000

if (NivelHeroi <= 1000) {NivelHeroi = "Ferro";} 
else if (NivelHeroi >= 1001 && NivelHeroi <= 2000) {NivelHeroi = "Bronze";} 
else if (NivelHeroi >= 2001 && NivelHeroi <= 5000) {NivelHeroi = "Prata";} 
else if (NivelHeroi >= 5001 && NivelHeroi <= 7000) {NivelHeroi = "Ouro";} 
else if (NivelHeroi >= 7001 && NivelHeroi <= 8000) {NivelHeroi = "Platina";} 
else if (NivelHeroi >= 8001 && NivelHeroi <= 9000) {NivelHeroi = "Ascendente";}
else if (NivelHeroi >= 9001 && NivelHeroi <= 10000) {NivelHeroi = "Imortal";} 
else {NivelHeroi = "Radiante";}

console.log(NomeHeroi + " está no nível de " + NivelHeroi);
