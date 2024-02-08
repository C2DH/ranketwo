---
layout: assignment
unit: webarchives
lang: fr
title: "Le Web archivé pour les historien(ne)s"
cover:
tags:
documents:
- wayback-machine-interface
- access-knowledge
- trust-truth
- project-internet
- nielsen
outcomes:
  - Comprendre les fondamentaux de l'archivage du Web 
  - Comprendre les politiques et la complexité de l'archivage du Web
order: 2
---
Comme expliqué dans la vidéo de Lars Wieneke, les sites Web qui ont été consacrés à David Boder en 2000 et en 2009 présentent des différences dues aux nouvelles technologies apparues entre ces deux années. La plus vieille version, mise en ligne en 2000, n’existe plus sur le Web «&#x202F;vivant&#x202F;», mais une comparaison entre cette version et la version plus récente, de 2009, est possible grâce au Web archivé. Dans cet exercice, vous apprendrez les bases du Web archivé et vous familiariserez avec l’une des ressources les plus populaires et utiles pour accéder aux pages du Web archivé&#x202F;: la Wayback Machine, mise à disposition par Internet Archive. Vous découvrirez aussi les défis et les limites de l’archivage du Web du point de vue d’un historien.

Voyez ici une version archivée du tout premier site Web, créé en 1991 par Tim Berners-Lee et archivé par le CERN en Suisse&#x202F;:


[card](project-internet)

<!-- more -->

<!-- briefing-student -->

### 2.a Différence entre le Web vivant et le Web archivé
<!-- section-contents -->

Le Web vivant se compose de toute page ou tout site Web auquel on peut accéder en ce moment même. Si, dans votre navigateur Web, vous tapez l’URL `https://www.google.com`, la page d’accueil de ce qui est actuellement le moteur de recherche le plus populaire du monde s’affiche et vous pouvez immédiatement y accéder. Il en va autrement pour le **Web archivé**, qui consiste en pages Web ou sites Web auxquels on ne peut plus accéder mais dont les informations ont été sauvegardées sous la forme de versions passées de ces pages ou sites Web. Sans le **Web archivé**, nous risquerions de voir des contenus Web disparaître complètement des registres historiques accessibles. C’est pourquoi il est crucial pour le métier d’historien(ne) de savoir comment gérer les archives Web et préserver les contenus Web.
Pour comprendre les bases de ce que sont les archives Web, commencez par lire les trois sections que nous recommandons de la publication suivante&#x202F;:

Janne Nielsen, [*Using Web Archives in Research: An Introduction* (Aarhus: NetLab, 2016)](https://dighumlab.org/wp-content/uploads/2017/06/Nielsen_Using_Web_Archives_in_Research.pdf)

[![nielsen](../../assets/images/nielsen.png "nielsen")](https://dighumlab.org/wp-content/uploads/2017/06/Nielsen_Using_Web_Archives_in_Research.pdf){:target="_blank"}

1.  Section 1 «&#x202F;Introduction&#x202F;» (pp. 6 à 10)
2.  Section 2.1 «&#x202F;Main Types of Web Archiving&#x202F;» (pp. 11 à 12)
3.  Section 2.5 «&#x202F;Characteristics of the Archived Material&#x202F;» (p. 23)

Puis répondez aux questions ci-dessous&#x202F;:

-	Pourquoi les archives Web ont-elles été créées et comment peut-on les utiliser&#x202F;?
- Quelle est la définition de l’archivage du Web donnée par le Consortium international pour la préservation de l’internet (IIPC)&#x202F;?
- Entre 2000 et 2010, combien de temps une page Web ordinaire restait-elle accessible avant d’être modifiée ou supprimée&#x202F;? Quelle différence par rapport au rythme où ces changements se produisent actuellement&#x202F;?
- Quelles sont les différences entre l’archivage du Web et l’archivage classique&#x202F;?
- Pouvez-vous citer quelques difficultés associées à l’archivage du Web&#x202F;?
- Imaginez-vous dans un rôle professionnel futur, et pas nécessairement d’historien(ne)&#x202F;: dans quel type de situation des connaissances sur l’archivage du Web seraient-elles utiles&#x202F;?

| Saisissez vos réponses dans le formulaire |

Now that you have some knowledge about what web archives are, read the hypothetical example below and answer the questions that follow.

Maintenant que vous avez une certaine connaissance des archives du Web, lisez l’exemple hypothétique ci-dessous puis répondez aux questions qui suivent.

Exemple hypothétique&#x202F;: le mardi 11 février, vous consultez un petit site Web qui offre des informations sur les matchs récents d’une équipe de football locale. Vous recherchez le score du match le plus récent et parvenez à trouver cette information. Le mercredi 12 février, vous essayez d’accéder au même site Web afin de montrer ce score à un ami, mais le site Web a complètement changé d’aspect. Vous finissez cependant par trouver l’information, mais elle est sur une autre page du site Web et il vous a fallu plus de temps qu’avant pour la trouver. Lorsque, le vendredi 14 février, vous visitez ce site Web pour la troisième fois pour voir quel est le résultat du dernier match, vous constatez qu’il n’est plus du tout possible d’accéder à ce site, même après avoir rafraîchi la page à plusieurs reprises et utilisé un autre navigateur.

- Quelles pourraient être les raisons pour lesquelles ce site Web a changé puis disparu entre les différentes dates auxquelles vous y avez accédé&#x202F;?
- Comment pourriez-vous vous y prendre pour essayer de récupérer l’information que vous vous rappelez avoir vue mais qui est devenue inaccessible&#x202F;?

| Saisissez vos réponses dans le formulaire |

<!-- section -->

### 2.b Se familiariser avec la Wayback Machine
<!-- section-contents -->

Dans cet exercice, vous explorerez l’histoire d’Internet Archive, un organisme à but non lucratif fondé en 1996 par l’ingénieur informaticien Brewster Kahle avec pour ambition de créer un enregistrement numérique complet du passé. Dans la vidéo correspondant à cette leçon, à la minute 3:05, l’ingénieur Lars Wieneke évoque cela lorsqu’il explique comment il est possible de retrouver des instantanés (snapshots) du site Web créé en 2000 au sujet de David Boder.

Quand on sait qu’[environ 360 à 380 nouveaux sites Web ont été créés chaque minute en 2020](https://siteefy.com/how-many-websites-are-there/){:target='_blank'}, on voit bien que Brewster Kahle s’est donné une tâche quasi impossible. La Wayback Machine d’Internet Archive collecte des contenus du Web en programmant des [robots d’indexation (ou collecteurs, web crawlers en anglais)](https://fr.wikipedia.org/wiki/Robot_d’indexation){:target='_blank'} pour qu’ils prennent des «&#x202F;instantanés&#x202F;» de certaines pages Web à des moments précis. Ces instantanés ne sont pas des captures d’écran&#x202F;; ils permettent aux utilisateurs de naviguer sur le Web du passé de façon interactive, mais ils ne présentent qu’une sélection de pages Web, non pas l’histoire complète d’un site Web. Toutefois, l’échelle de ce qui est archivé est assez impressionnante, surtout si l’on sait que [le nombre de pages présentes sur le Web vivant est actuellement d’environ six milliards](https://www.worldwidewebsize.com/){:target='_blank'}, alors que la Wayback Machine d’Internet Archive offre l’accès à plus de 480 milliards de pages Web archivées (chiffres valables en novembre 2020). En outre, Internet Archive n’est plus le seul organisme qui s’occupe d’archiver le Web. Des institutions de niveau national – surtout des bibliothèques nationales – en Irlande, au Danemark, au Luxembourg, en Suisse, au Portugal, en France et au Royaume-Uni, pour ne citer que quelques-unes, ont endossé le rôle de curatrices pour des contenus Web pertinents pour leur pays. Les deux derniers pays cités ont même fait des archives Web une catégorie de leurs dépôts légaux, ce qui signifie que les pages Web relatives à leurs citoyens ou à l’État sont considérées comme des publications essentielles pour garder la trace de l’histoire officielle du pays.

[![kahle servers](../../assets/images/kahle-servers.jpg "kahle servers")](https://www.flickr.com/photos/jblyberg/7007299440
https://live.staticflickr.com/7106/7007299440_4c745e8f05_w_d.jpg){:target="_blank"}
Crédits : J. Blyberg

Pour vous familiariser avec la Wayback Machine d’Internet Archive, lisez [cette courte page Web](https://help.archive.org/hc/en-us/articles/360004716091-Wayback-Machine-General-Information){:target='_blank'}, puis répondez aux questions suivantes :
- Quelle est la différence entre Internet Archive et la Wayback Machine&#x202F;?
- Quel critère est appliqué pour la collecte des pages Web par la Wayback Machine&#x202F;?
- Qui peut accéder aux informations disponibles dans la Wayback Machine&#x202F;?
- Avec quelles organisations Internet Archive travaille-t-elle, et comment se justifie cette collaboration&#x202F;?
 
À présent, servez-vous de cette «&#x202F;antisèche&#x202F;» PDF (Interface de la Wayback machine), qui explique l’interface de la Wayback Machine en prenant la page d’accueil de Google comme exemple, pour répondre aux questions suivantes&#x202F;:
- Dans la Wayback Machine, utilise-t-on des termes clés ou une URL spécifique pour rechercher des instantanés (versions sauvegardées) d’une page Web&#x202F;?
- Quels sont les avantages et les inconvénients du système de la Wayback Machine consistant à trouver des versions antérieures sauvegardées d’une page Web&#x202F;?
- Où trouvez-vous le nombre de fois qu’une certaine URL a été sauvegardée dans la Wayback Machine&#x202F;?
- Quelles informations sur un instantané trouvez-vous en regardant simplement son URL&#x202F;?
- Comment savoir quelle organisation ou quel robot a effectué l’indexation correspondant à l’instantané que vous examinez&#x202F;?


<!-- section -->

### 2.c Les ambitions originelles de la Wayback Machine comparées aux réflexions ultérieures 
<!-- section-contents -->
Pour un(e) historien(ne), il est crucial de situer une ressource telle que la Wayback Machine dans son contexte historique. L’idéalisme et la foi dans le pouvoir démocratisant de la technologie étaient les maîtres mots de la création de cette ressource. Pour bien comprendre cela, regardez trois segments de la vidéo extraits d’un exposé présenté par Brewster Kahle en 2011 à la Long Now Foundation (veuillez vous référer ci-dessous pour plus d'informations).

[card](access-knowledge)
Brewster Kahle, 2011

1.  Les objectifs d’Internet Archive en tant que fondation (9:36 - 12:30)
2.  Comment la Wayback Machine est utilisée pour préserver le Web (40:55 - 44:39)
3.  Stratégies de préservation appliquées par Internet Archive et la Wayback Machine (45:41 - 50:20)

Répondez maintenant aux questions suivantes (au besoin, faites des recherches supplémentaires sur le Web)&#x202F;:
- qu’était la Bibliothèque d’Alexandrie&#x202F;?
- comment décririez-vous dans vos propres mots l’idée d’un «&#x202F;accès universel à toutes les connaissances&#x202F;» de Brewster Kahle&#x202F;?
- quelle valeur y a-t-il à préserver des pages Web pour un(e) historien(ne)&#x202F;?
- pourquoi les archives numériques d’Internet Archive sont-elles réparties sur de multiples sites physiques&#x202F;?

| Saisissez vos réponses dans le formulaire de réponse |

À présent, comparez le contenu des passages de 2011 que vous avez regardés avec le discours inaugural prononcé par Brewster Kahle en 2019 à la conférence de Charleston (de 03:29 à 12:22).

[card](trust-truth)

Puis répondez aux questions suivantes&#x202F;:
- Quelle différence vous frappe&#x202F;?
- À votre avis, pourquoi l’idée de M. Kahle aurait-elle changé&#x202F;?
- Estimez-vous que cette collaboration avec Wikipédia est une bonne direction à suivre pour Internet Archive et la Wayback Machine ? Pourquoi consentez-vous ou non&#x202F;?


| Saisissez vos réponses dans le formulaire de réponse  |

<!-- section -->

### 2.d Découvrir comment les pages Web de Google et de YouTube sont préservées
<!-- section-contents -->
Enfin, il est temps que vous découvriez par vous-même la Wayback Machine, qui est l’outil d’archivage du Web d’Internet Archive. En faisant cet exercice, gardez à l’esprit que, en raison des quantités immenses de données sauvegardées dans ses archives ([plus de 25 pétaoctets ou 25 millions de gigaoctets en 2018](https://thehustle.co/inside-wayback-machine-internet-archive){:target='_blank'}), la WM met parfois un peu plus de temps pour charger les pages que ce à quoi vous êtes habitué(e) pour les pages du Web vivant. Il peut parfoir être nécessaire de rafraîchir une page une ou deux fois pour qu’elle se charge correctement.

Commencez par accéder à la Wayback Machine (https://web.archive.org/) puis faites une recherche sur la page d’accueil de Google en saisissant l’URL https://www.google.com/ dans la barre de recherche. La requête devrait ressembler à ceci : https://web.archive.org/web/*/https://www.google.com/
google 

Finally, it is time for you to explore the Internet Archive’s web archiving tool, the Wayback Machine, yourself. While doing this assignment, keep in mind that owing to the sheer amount of data saved in its archives ([over 25 petabytes or 25 million gigabytes as of 2018](https://thehustle.co/inside-wayback-machine-internet-archive){:target='_blank'}), the WM can sometimes take a little longer to load than the web pages you might be used to. Sometimes you need to refresh a page once or twice to get it to load properly.

First, go to the [Wayback Machine](https://web.archive.org/){:target='_blank'} and search for Google’s home page by entering the URL `https://www.google.com/` in the search box. The query should look like this: https://web.archive.org/web/*/https://www.google.com/

google
[![homepage-google](../../assets/images/homepage-google.png "homepage-google")](//https://web.archive.org/web/*/https://www.google.com){:target="_blank"}

Have a look at the note under the red button marked “Calendar”. How many captures of the web page at this URL have been made and over what period?

| use the answer form to write down the answers |

Now, below the information that gives you the number of captures of the URL that have been made but above the calendar view of the past 12 months, scroll through the chronological bar graph showing all the years the URL has been saved. Find and click on the very first year that this web page was saved and then search for the month in which the very first snapshot was made. Finally, click on that first snapshot of Google saved by the Wayback Machine.

Think about some of the classic questions that you would ask of any historical source: Who created this? When did they create it? Why did they create it? How did they create it? What was their purpose in creating it? How was it used at the time? How did it look at the time compared to other similar sources?
-	Using the PDF “cheat sheet” as a guide, answer the classic historical source criticism questions above and feel free to add any others you can think of.

| Who created this? |
| When did they create it?|
| Why did they create it? |
| How did they create it? |
| What was their purpose in creating it? |
| How was it used at the time? |
| How did it look at the time compared to other similar sources? |

| use the answer form to write down the answers |

Next, go to the next saved date of the Google home page (it should be in the following month) and click on the snapshot. Explore the content of the page and its hyperlinks to find out the purpose of the company and the reason they choose the name “Google”.

| Purpose |
| Why the name “Google”? |

Now go back to the current home page of the Wayback Machine [https://web.archive.org/](https://web.archive.org/){:target='_blank'} and search for YouTube’s home page using the URL `https://www.youtube.com`. Find the first saved snapshot available on the Wayback Machine, and click on the link.
-	What are your first impressions of YouTube’s then home page?

| use the answer form to write down the answers |

Take a screenshot of this first snapshot. Then try to click on the tabs in this snapshot (“favorites”, “messages”, “videos”).
-	What happens? What does this mean for using the Wayback Machine as a resource for archiving web pages?

| use the answer form to write down the answers |

Now, go back to your calendar view of all the times that YouTube has been saved by the Wayback Machine. Click on a snapshot from 10 years after the first snapshot was made and take a screenshot of the snapshot. Complete the table below indicating differences between the features of YouTube in 2005 and 2015. Note: if you don’t find the information below in the snapshots, conduct additional research and note which other source(s) you consulted to find the information.

| | 2005 | 2015 |
| Your screenshot |
| Design |
| Navigation links at the top |
| Information about the company |
| What can be accessed |
| Notes about privacy |
| Notes about copyright |

Would the Wayback Machine be useful to you if you wanted to know whether the character of the uploaded material on YouTube has changed between 2005 and 2010?

| use the answer form to complete the table and write down your answers |
<!-- section -->

### Suggestions de lectures/vidéos
<!-- section-contents -->

-	Nielsen, Janne. *Using Web Archives in Research: An Introduction*. Aarhus: NetLab, 2016. [Livre électronique](https://dighumlab.org/wp-content/uploads/2017/06/Nielsen_Using_Web_Archives_in_Research.pdf)
-	Brügger, Niels, and Ralph Schroeder, eds. *The Web as History: Using Web Archives to Understand the Past and the Present.* London: UCL Press, 2017. [Livre électronique](https://discovery.ucl.ac.uk/id/eprint/1542998/1/The-Web-as-History.pdf)
-	Huss, Nick. “How Many Websites Are There Around The World?” Sateefy. Last modified November 27, 2022. [Site web](https://siteefy.com/how-many-websites-are-there/)
-	Musiani, Francesca, Camille Paloque-Bergès, Valérie Schafer et Benjamin G. Thierry. *Qu’est-ce qu’une archive du Web?* Marseille: OpenEdition, 2019. [Livre électronique](https://books.openedition.org/oep/8713)

<!-- briefing-teacher -->


2.d Découvrir comment les pages Web de Google et de YouTube sont préservées

Voyez la remarque sous le bouton rouge intitulé « Calendar ». Combien de captures de la page Web à cette URL ont été faites, et sur quelle période ?
Utilisez le formulaire de réponse pour saisir les réponses
À présent, en dessous des informations qui renseignent sur le nombre de captures de l’URL qui ont été faites, mais au-dessus de la vue « Calendrier » des 12 derniers mois, faites passer la souris le long de la barre chronologique qui affiche toutes les années où l’URL a été sauvegardée. Trouvez la toute première année où cette page Web a été sauvegardée, cliquez dessus puis recherchez le mois au cours duquel le tout premier instantané a été réalisé. Enfin, cliquez sur ce premier instantané de Google sauvegardé par la Wayback Machine.
Pensez à quelques-unes des questions classiques que vous vous poseriez sur toute source historique : Qui a créé cela ? Quand l’a-t-on créé ? Pourquoi l’a-t-on créé ? Comment l’a-t-on créé ? Quelle était la finalité envisagée ? Comment cela était-il utilisé à l’époque ? Quel en était l’aspect à l’époque, comparé à d’autres sources similaires ?
• En vous servant de l’« antisèche » PDF comme d’un guide, répondez aux questions classiques de critique de la source historique ci-dessus. Vous êtes libre d’y ajouter d’autres questions de votre cru.
Qui a créé cela ?
Quand l’a-t-on créé ?
Pourquoi l’a-t-on créé ?
Comment l’a-t-on créé ?
Quelle était la finalité envisagée ?
Comment cela était-il utilisé à l’époque ?
Quel en était l’aspect à l’époque, comparé à d’autres sources similaires ?
Utilisez le formulaire de réponse pour saisir les réponses
Ensuite, allez à la date de sauvegarde suivante de la page d’accueil de Google (elle devrait se situer dans le mois suivant) et cliquez sur l’instantané. Explorez le contenu de la page et ses hyperliens afin de trouver la finalité de l’entreprise et la raison pour laquelle elle a choisi le nom « Google ».
Finalité
Pourquoi le nom « Google » ?
Retournez maintenant à la page d’accueil actuelle de la Wayback Machine (https://web.archive.org/) et recherchez la page d’accueil de YouTube en utilisant l’URL https://www.youtube.com. Trouvez les premiers instantanés sauvegardés disponibles dans la Wayback Machine, puis cliquez sur le lien.
• Quelles sont vos premières impressions de la page d’accueil de YouTube à l’époque ?
Utilisez le formulaire de réponse pour saisir les réponses
Faites une capture d’écran de ce premier instantané. Puis essayez de cliquer sur les onglets de cet instantané (« Favoris », « Messages », « Vidéos »).
• Que se passe-t-il ? Qu’est-ce que cela implique pour l’utilisation de la Wayback Machine comme ressource pour archiver des pages Web ?
Utilisez le formulaire de réponse pour saisir les réponses
Retournez maintenant à la vue « Calendrier », qui montre toutes les fois que la Wayback Machine a sauvegardé la page YouTube. Cliquez sur un instantané datant de dix ans après que le premier instantané avait été réalisé, puis faites-en une capture d’écran. Complétez le tableau ci-dessous en indiquant les différences entre les caractéristiques de YouTube en 2005 et en 2015. Remarque : si vous ne trouvez pas les informations demandées ci-dessous dans les instantanés, faites des recherches supplémentaires et notez quelle(s) autre(s) source(s) vous avez consultée(s) pour trouver les informations.
  2005  2015
Votre capture d’écran    
Conception     
Liens de navigation en haut de la page     
Informations sur l’entreprise    
Contenus accessibles     
Remarques sur la confidentialité     
Remarques sur les droits d’auteur    
La Wayback Machine vous serait-elle utile si vous vouliez savoir si la nature des contenus chargés sur YouTube a changé entre 2005 et 2010 ?
Utilisez le formulaire de réponse pour compléter le tableau et saisir vos réponses


RÉSULTATS D'APPRENTISSAGE
• Comprendre les bases de l’archivage du Web.
• Comprendre les politiques et les aspects complexes de l’archivage du Web.