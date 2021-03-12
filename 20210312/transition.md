# Transistions en d3
Il faut appliquer un événement (on change, on click, etc) à un élément svg comme par exemple :
Le but ets de mdifier la valeur d'un attribut. 

circle.on('click', () =>
    circle
      .transition() // lancer la transition
      .duration(1000) // durée en millisecondes
      .attr('cx', WIDTH - RADIUS * 2) // position à la fin de la transition
)
# Transitions en svelte
Appliquer une transformation qui ne sera plus dépendante d'un événement chage par exemple. 
La transition est indiquée plus simplement et avec moins de code qu'en d3

<g transform={`translate(${MARGIN / 2}, 0)`}>
    {#each DATA as d, i}
      <Baton d={d} i={i} key={key} />
    {/each}
</g>
