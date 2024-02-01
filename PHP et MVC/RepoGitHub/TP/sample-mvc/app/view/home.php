<h1>Home page</h1>
<p>Bienvenue dans ce modèle de pattern MVC.</p>
<p>Vous pouvez tapez l'url <a href="exemple/hello">localhost/sample-mvc/exemple/hello</a> pour voir un exemple de controller</p>
<p>Dans le code sources vous trouverez : </p>
<ul>
    <li>Un exemple de model réutilisable : /app/model/SampleModel.php</li>
    <li>Un exemple de controller réutilisable : /app/controller/SampleController.php</li>
</ul>

<h2>Ajouter un controleur</h2>
<ol>
    <li>
        Si néccessaire créez un modèle dans app/model
    </li>
    <li>
        Créez un fichier dans /app/controller, ce fichier contient la nouvelle classe Controller par exemple : PokemonController pour les routes qui commence par /pokemon.
    </li>
    <li>
        Créez une méthode dans le Controller, par exemple pour la route pokemon/add créez la méthode PokemonController::add
    </li>
    <li>
        Ajouter une nouvelle route au Router du fichier /app/Router.php dans le switch, cette route doit return une instance du Controller précédement créez.
    </li>
    <li>
        Si vous avez besoin d'un nouvelle page à partir du controleur, créez simplement une nouvelle méthode dans votre Controller et tout fonctionne directement. Attention cependant cette nouvelle méthode doit afficher une vue avec require_once()
    </li>
</ol>