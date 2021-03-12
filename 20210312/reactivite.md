# Qu'est-ce que la programmation réactivité?
C'est un style de programmation permettant de conserver une cohérence d'ensemble ou les variables sont liées entre elles.
Les modifications (d'une variables ou une entrée utilisateur) se font dynamiquement dans le code.
Lors d'une modification d'une varaible, toutes les variables liées à celle-ci sont également automatiquement modifiées.
Nous n'avons pas besoin de remettre à jour à chaque changement, cela ce fait automatiquement. 

À l'inverse, dasn la programmation déclarative, on doit tout dire à la machine.
La réactivité n'est pas ce qu'on trouve de base dans le langage javascript, qui est un langage de programmation événementiel.
# Comment l'utiliser en javascript?
Utiliser des librairies, comme par exemple Svelte (inspirée d'Observable, qui est aussi réactif).
bind:value = permet de lier les valeurs entre elles
$: a = toNum(valeurA) = une chose qui écoute quelque chose d'autre, indique que c'est une valeur dynamique
# Quelle est l'alternative?
Il est possible de simuler une application réactive avec d3 en créant plusieurs événements. Il faut exactement décrire tous les événements à la machine.
