
# Fonctionnement du binaire

Le binaire est une base de calcul comme la base décimal ou hexadécimal. Le binaire ne permet pas de crypté quoi que se soit et n'a rien de mystique c'est simplement un moyen de représenter les nombres.

Les nombres en binaire sont représentés via une suite de chiffres appellés **bit**.

```
1011 = 11
```

Chaque bit possède une valeur et un état : 1 ou 0. Le premier bit à pour valeur 1 et les bits suivant sont des multiples de 2.

**Pour obtenir la valeur complète d'un nombre binaire il faut additionner la valeur de chaque bit dont l'état est à *1*.**

Prenons 4 bits,
||||||
|-|-|-|-|-|
|valeurs|8|4|2|1|
|états| 1 |0|1|1|

```
8+2+1 = 11
```

Les bits à l'état 1 ont pour valeurs : 1,2 et 8 on addition 1+2+8 ce qui donne 11. Le bit de valeur 4 est à 0 il n'est donc pas pris en compte dans l'addition.

Ici j'utilise 4 bits mais je peux utiliser autant de bits que neccessaires.

6bits par exemple,

||||||||
|-|-|-|-|-|-|-|
|valeurs|32|16|8|4|2|1|
|états| 0|1|0 |1|1|0|

```
16+4+2 = 22
```

Ou bien 8bits qui formes un octet.
||||||||||
|-|-|-|-|-|-|-|-|-|
|valeurs|128|64|32|16|8|4|2|1|
|états| 1|1|0 |1|1|0|1|1|

```
128+64+16+8+2+1 = 219
```

Voici quelques exemples pour vous familiariser avec le binaire :

||||||
|-|-|-|-|-|
|valeurs|8|4|2|1|
|bits| 0 |0|1|1|

```
1+2 = 3
```

||||||
|-|-|-|-|-|
|valeurs|8|4|2|1|
|bits|0|0|2|0|

```
2 = 2
```

||||||
|-|-|-|-|-|
|valeurs|8|4|2|1|
|bits|0|0|0|0|

```
0 = 0
```

On peut généraliser le calcul par cette formule :
```
ETAT_BIT_1*VALEUR_BIT_1 + ... + ETAT_BIT_N * VALEUR_BIT_N
```

|n|4|3|2|1|
|-|-|-|-|-|
|VALEUR|8|4|2|1|
|ETAT| 1 |0|1|1|

```
1*1 + 1*2 + 0*4 + 1*8 = 11
```