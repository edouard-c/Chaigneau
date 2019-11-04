/*************************************************************************************************
*												Les données (peuvent être placées dans une fichier data.json)						 *
*************************************************************************************************/

let citations = {cuisine	:{	debut:["la cuisine", "le marmitonnage", "la spécialité culinaire"],
															millieu:["de maman", "de tata", "de grand père"],
                        			fin:["est bonne", "sent les chaussures","est délicieuse"]},
								jardinage	:{	debut:["le jardin","l'arbre","le geranium"],
															millieu:["est bien fait","ne coute pas cher","est bien entretenu"],
                        			fin:["et est coloré","mais se fait pâle","et est plein de vie"]},
                pêche			:{	debut:["le poisson", "la carpe","l'éléphant de mère"],
															millieu:["vit dans l'eau","n'as pas beaucoup de mémoire","ne fume pas"],
                        			fin:[	"et se nourris de plankton","et n'aime pas la viande",
                              			"et as eu une bonne journée"]}};
   
/*************************************************************************************************
*	déclaration de la classe générateurDeCitationVue																							 *
*	(peuvent être placées dans une fichier GénérateurDeCitationVue.js)					 									 *
*************************************************************************************************/

class générateurDeCitationVue
{
	constructor()
  {
    	this._conteneurCitation = document.createElement('div');
      this._select = document.createElement('select');
      this._selectNumb = document.createElement('select');
      this._regenerer = document.createElement('button');
      
      this._conteneurCitation.id = "conteneurCitation";
      this._select.id = "selectCitation";
      
      this._regenerer.innerHTML="regenerer";
  }
  afficher_citations(phCit)
  {
  	this._conteneurCitation.innerHTML = "";
  	for(let currentCit of phCit)
      this._conteneurCitation.innerHTML += currentCit + "<br/>";
  }
  afficher()
  {
  	for(let currentElement in this)
    	document.body.appendChild(this[currentElement]);
    
    for(let currentTopic in citations)
    {
    	let options = document.createElement('option');
      options.innerHTML = currentTopic;
      this._select.appendChild(options);
    }
    
    for(let i=1;i<=5;i++)
    {
    	let options = document.createElement('option');
      options.innerHTML = i;
      this._selectNumb.appendChild(options);
    }
  }
}
   
/*************************************************************************************************
*	déclaration de la classe générateurDeCitationControlleur																			 *
*	(peuvent être placées dans une fichier GénérateurDeCitationControlleur.js)	 									 *
*************************************************************************************************/

class générateurDeCitationControlleur
{
	constructor()
  {
  	let gen = this;
  	this._vue=new générateurDeCitationVue();
    this._categorie = Object.keys(citations)[0];
    this._nombreCitations = 5;
    this._vue._regenerer.onclick = function(){gen.update();};
    this._vue.afficher();
  	this.generer();
  }
  generer()
  {
  	let phraseCitations = []
  	for(let i = 0;i<this._nombreCitations;i++)
      phraseCitations.push(
      										citations[this._categorie].debut[Math.floor(Math.random()*
                          citations[this._categorie].debut.length)] + ' '
                      		+ citations[this._categorie].millieu[Math.floor(Math.random()*
                        	citations[this._categorie].millieu.length)] + ' '
                      		+ citations[this._categorie].fin[Math.floor(Math.random()*
                          citations[this._categorie].fin.length)]);
  	this._vue.afficher_citations(phraseCitations);
  }
  update()
  {
  	this._categorie = this._vue._select.value;
    this._nombreCitations = this._vue._selectNumb.value;
    this.generer();
  }
}

let a = new générateurDeCitationControlleur();