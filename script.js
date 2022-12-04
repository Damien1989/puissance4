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
    for(var i=0; i < this.ligne; i++){
        for(var j=0; j < this.colonne; j++){
            plateau[i][j]=0;
        }
    }
    this.joueur = 1;
    afficheTexteAnnonce("Le jeu commence ! C'est au tour du joueur " + nomDuJoueur(this.joueur));
    this.game = true;
    creerTableau();
}

function  afficheTexteAnnonce(texte){
    document.getElementById("TexteAnnonce").innerHTML = texte;
}

function nomDuJoueur(numJoueur){
    if (numJoueur == 1){ return "rouge"; }else{ return "bleu";}
}

    function creerTableau(){
    this.texte = "<table>";
    for(var i = 0; i < this.ligne; i++){
        this.texte += "<tr>";
        for(var j = 0; j < this.colonne; j++){
            this.texte += "<td onclick='detectClic("+j+")' id="+i+"-"+j+">";
            if(this.plateau[i][j] == 1) this.texte += "<div class= 'joueur1'></div>";
            else if(this.plateau[i][j] == 2) this.texte +="<div class='joueur2'></div>";
            this.texte += "</td>";
    }
        this.texte+= "</tr>";
    }
    this.texte += "</table>";
    document.getElementById("Puissance4").innerHTML = this.texte;
}

function detectClic(j) {
    if(verifPosition(j) && this.game){
        var ligneEnCours = poseJeton(j);

        var verifEnd = Puissance4(ligneEnCours, j, 0, 0);
        if(verifEnd){
            this.game = false;
            afficheTexteAnnonce("Le joueur " + nomDuJoueur(this.joueur) + " a gagné la partie.");
        }
        // partie non terminée passe au joueur suivant
        else {
            this.joueur == 1 ? this.joueur = 2 : this.joueur = 1;
            afficheTexteAnnonce("C'est au tour du joueur " + nomDuJoueur(this.joueur));
        }
    }
}

function verifPosition(j){
    // si la case du haut de la colonne est vide
    if(this.plateau[0][j] == 0) return true;
    else return false;
}

function poseJeton(j){
    // retourne le numéro de ligne  disponible ou le jeton a été posé
    for(var i = this.ligne - 1 ; i >= 0; i--){
        if(this.plateau[i][j] == 0){
            // informe la cellule du numéro du joueur qui lui est affecté
            this.plateau[i][j] = this.joueur;
            //met à jour la div et le jeton
            refreshTableau(i, j, this.joueur);
            return i;

        }
    }
}

    function refreshTableau(x, y, l){
    document.getElementById(x +"-" + y).innerHTML = "<div class = 'joueur" + i + "'></div>";
    }

    function Puissance4(lig, col, l, c){

    console.log("Valeurs : " + lig + " " + col + " / incrément " + l + " " + c);
    if(c == 0 && l ==0){
        var va = 1 + Puissance4(lig + 1, col, 1, 0) + Puissance4(lig - 1,col, -1, 0);

        var vb = 1 + Puissance4(lig, col, 1, 0, 1) + Puissance4(-1, 0, -1);

        var vc = 1 + Puissance4(lig + 1, col, 1, 1) + Puissance4(lig - 1,col, -1, -1);

        var vd = 1 + Puissance4(lig - 1, col, +1, -1,1) + Puissance4(lig - 1,col, -1, 0);
        console.log(va, vb, vc, vd);
        if (va == 4 || vb == 4 || vc == 4 || vd == 4) return true;
        else return false;
    }

    if(lig < this.ligne && lig >= 0 && col < this.colonne && col >= 0){
        if(this.plateau[lig][col] == joueur){ return 1 + Puissance4(lig + l, col + c, l, c);}
        else { return 0;}
    }
    else return 0;
    }