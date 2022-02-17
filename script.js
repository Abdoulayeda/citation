let citations =[
    [
		"La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
		'M. Gandhi',
	],
	['Le plus grand risque est de ne prendre aucun risque.', 'Mark Zuckerberg'],
	['Méritez votre statut de leader chaque jour.', 'Mickael Jordan'],
	['Soyez le changement que vous voulez voir dans le monde.', 'Gandhi'],
	[
		'A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.',
		'Mark Twain',
	],
	[
		'Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.',
		'T.S Elliot',
	],
	['Le succès c’est tomber sept fois, se relever huit.', 'Proverbe japonais'],
	[
		'Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.',
		'Mark Twain',
	],
	[
		'Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.',
		'Brian Tracy',
	],
	[
		'Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.',
		'P.T. Barnum',
	],
	[
		'Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.',
		'Brian Sher',
	],
	[
		'Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.',
		'Anita Roddick',
	],
	[
		'Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.',
		'R. L. Stevenson',
	],
    [
		'Le succès, c’est se promener d’échecs en échecs tout en restant motivé.',
		'Winston Churchill',
	],
    [
        ' Où la souris se moque du chat, il y a un trou',
        'Proverbe Africain'
   ],
   ["Le bonheur ne s'acquiert pas, il ne réside pas dans les apparences, chacun d'entre nous le construit à chaque instant de sa vie avec son coeur.",
   'Proverbe Africain'
  
]
]

let content = document.querySelector('.content');
let auteur = document.querySelector('.auteur');
let bouton = document.querySelector('.bouton');
let dernier =0;

bouton.addEventListener('click', () => {
	do {
		nombre = Math.floor(Math.random() *citations.length)
	} while (nombre == dernier);
	content.textContent = " \" "+citations[nombre][0] + "\"";
	auteur.textContent = citations[nombre][1];
	
});

