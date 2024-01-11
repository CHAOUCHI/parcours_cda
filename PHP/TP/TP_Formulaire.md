# TP PHP Formulaire
## Le Besoin
Créer un système de connexion composé de plusieurs pages :
- une page d'accueil qui contient un forumlaire
- une page d'info qui affiche les infos rentrées par l'utilisateur
## Pré-requis
- `session_start()`
- `if else`
- `header("Location: otherscript.php)`
# Cahier des charges

|Tâches| Description | Contraintes |
|---|---|---|
|Créer un formulaire qui enregistre dans la `session` l'age et le nom d'un utilisateur
| Créer une page info qui affiche l'age et le nom de l'utilisateur ||Si l'utilisateur ne c'est pas enregistré la page info redirige vers la page du formulaire.
| Ajouter un lien sur la page info et formulaire| Le lien supprime les données de l'utilisateur.