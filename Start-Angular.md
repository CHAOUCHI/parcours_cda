# Start Angular - Reactive UI Introduction 

Angular est un Framework front-end Web. 

Il permet de créer des interfaces utilisateurs(UI) réactive.

Concrètement, un affichage réactif est un affichage qui se met à jour automatiquement lorsque les variables du programme changent.

Par exemple si je veux afficher l'heure habituellement je vais devoir Print une variable date. Seulement voilà lorsque je vais affecter une nouvelle valeur à la variable date, je vais devoir effectuer le print une nouvelle fois.

Dans le cas d'un simple print cette situation n'est pas très grave, seulement lorsque je crée des interfaces Web en HTML, je ne dois pas simplement print, mais également souvent fabriquer des balises HTML, les remplir avec des données, éventuellement définir ses classes Css ou même ses attributs HTML.

Angular fait tout ceci à notre place, si l'on crée une variable et que nous l'affichons dans une balise HTML, lorsque la variable sera modifiée, la balise HTML sera tout simplement rechargée et la nouvelle donnée apparaîtra à l'écran.

> Notez que Angular ne rafraîchit pas l'entièreté de la page, mais uniquement la balise contenant la variable.

C'est ça qu'on appelle la réactivité, c'est la raison d'être d'Angular.

*angular v19*

## pre requis et hello world
### Installation 

// todo

- nodejs et npm
- angular cli 
- ng new
- ng serve


### hello world

// todo

- le composant App - le point d'entrée de l'appli 
- two way data binding {} et attribut public
- event onClick et fonction publique 
- ngModel input 

## maquette de l'appli 
//todo

## intégration 

Angular est un framework orienté composant. Ce qui signifie que notre code HTML ne se trouvera pas entièrement dans le index.html, mais sera répartie dans plusieurs dossiers.

Chaque dossier s'appelle un COMPONENT et possède trois fichiers :
- .html
- .css
- .ts

> le code source des applications Angular est codé en TypeScript.

### composant task 
//todo

### composait list task 
//todo

### routing - route /list 
//todo

### routing - route /add-task 
//todo

### ajouter une nav barre 
// todo
