<?php
// ------------------------------------------CE FICHIER NE COMPILE PAS-----------------------------------------
// Ce fichier est un patron de modèle.
// Pour l'utiliser copiez-collez le fichier SampleModel.php
// renommez le par exemple en PokemonModel.php pour gérer une table SQL nommé Pokemon
// et modifiez le en rajoutant ses getter, setter et requêtes préparées.

class SampleModel{
    private PDO $bdd;
    private PDOStatement $stmt; // Vos requetes préparées doivent être des attributs de la classe

    function __construct()
    {
        // remplacez BDD_NAME par le nom de la bdd
        $this->bdd = new PDO("mysql:host=lamp-mysql;dbname=BDD_NAME","root","root");

        $this->stmt = $this->bdd->prepare("SOME SQL QUERY");

    }
    public function add(/**Paramètre neccessaire à l'ajout */) : void
    {
        $this->addProduct->bindValue(/**TODO */);
        $this->addProduct->execute();
    }
    public function del(int $id) : void
    {
        
    }
    public function get($id): ProductEntity | NULL
    {
        
    }
    public function getAll(int $limit = 50) : array
    {
        return [];
    }

    public function edit(int $id/**,champs à modifier */) : SampleEntity | NULL
    {
        
    }
}

class SampleEntity{
    private $field;
    private $id;
    function __construct(string $field, int $id=NULL)
    {
        $this->setField($field);
        $this->id = $id;
    }

    public function setField($fieldValue){
        $this->field = $fieldValue;
    }

    public function getField() : string{
        return $this->field;
    }
    public function getId() : int{
        return $this->id;
    }
}