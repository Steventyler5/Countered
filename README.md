# Countered
Countered is a companion app for the popular video game League of Legends. On page load, users are presented with a grid of champion portraits (the names of which are easily viewable in individual tooltips on hover). Clicking a portrait advances to the next view, the selected Champion's match history, sorts all of the opponents he or she faced in those games in a specific role, calculates the selected Champion's individual win rate against all of those champions, and finally displays them in an easy to read, color-coded chart.

##Purpose
There exist countless utilities that calculate a Champions **overall** win rate, but if there are any that calculate a champions head-to-head win rates against other champions they are very hard to find. Furthermore, Countered targets not only a Champion but a designated **role** as well (There exist 5 different roles in each game, populated by one member of each team), so the resulting data is a reflection of the selected champion against others in relation to just one role, rather than a conglomerate of any role in which the champion has been played.

##Technologies Used 
Countered features a custom database built in Visual Studio using seed data from the Riot Games API, an API built in the .NET Core framework that pulls from the database via SQL queries. The front-end is built in AngularJS with Bootstrap styling.

##Scope and Future Versions
Countered is, at its core, a proof of concept born from an irritation with the lack of specific champion statistics for League of Legends. Currently, the app only uses outdated data provided by Riot Games in the form of JSON files. Moving forward, I'd like to obtain a Developer API key from Riot Games, as public keys have a heavy request limit. With unlimited requests I could populate the database with up-to-date match histories on a daily basis, providing more accurate win rates. Additionally, the curent iteration of Countered only calculates win rates for one of five roles; future versions would give users another choice to make, declaring a desired role before selecting an applicable champion for which win rates would be generated and returned to the user.
