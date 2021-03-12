# Qu'est-ce que la programmation réactivité?
C'est un style de programmation permettant de conserver une cohérence d'ensemble. 
en propageant les modifications d'une source réactive (modification d'une variable, entrée utilisateur, etc.) aux éléments dépendants de cette source.
On a pas besoin de remettre à jour à chaque fois, cela ce fait automatiquement. 
Programmation déclarative on doit tout dire à la machine, ce qui n'est pas le cas avec la réactivité
La réactivité n'est pas ce qu'on trouve dans le langage javascript, qui est un langage de programmation événementiel.
# Comment l'utiliser en javascript?
Utiliser de slibrairies, comme par exemple Svelte (inspirée d'Observable, qui est aussi réactif).
bind:value = permet de lié les valeurs entre elles
$: a = toNum(valeurA) = une chose qui écoute quelque chose d'autre, indique que c'est une valeur dynamique
# Quelle est l'alternative?
Il est possible de simuler une application réactive avec d3 en créant plusieurs événements. Il faut exactement décrire ce qu'il faut à la machine.
