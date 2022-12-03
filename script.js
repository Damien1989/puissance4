var joueur = 1;
var colonne = 5;
var ligne = 5;
var game = true;
var texte = "";
var plateau = new Array();

for(var i = 0; i < ligne; i++) plateau[i] = new Array();


// création nouveau jeu
newGame();

function newGame(){
    for(var i = 0; i < this.ligne; i ++){
        for(var j = 0; j < this.colonne; j++){
            plateau[i][j] = 0;
        }
    }
    this.joueur = 1;
    afficheTexteAnnonce("Le jeu commence ! C'est au tour du joueur "  + nomDuJoueur(this.joueur));
    this.game = true;
    creerTableau();
}

function  afficheTexteAnnonce(texte){
    document.getElementById("TexteAnnonce").innerHTML = texte;
}

function nomDuJoueur(numJoueur){
    if (numJoueur == 1){ return "rouge";)else{ return "bleu";}
}

    function creerTableau(){
    this.texte = "<table>";
    for(var i = 0; i < this.ligne; i++){
        this.texte += "<td onclick= 'detectClic("+j+") " id="+i+"-"+j+">";
            if(this.plateau[i][j] == 1) this.texte += "<div class= 'joueur1'></div>";
            else if(this.plateau[i][j] == 2) this.texte +="<div class='joueur2'></div>";
            this.texte += "</td>";
    }
        this.texte+= "</tr>";
    }
    this.texte += "</tr>";
    document.getElementById("Puissance4").innerHTML + this.texte;
}
