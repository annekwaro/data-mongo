# Node Express Mongodb
Un projet node.js utilisant express pour la partie contrôleurs et mongodb pour la partie data

## How To Use
1. Cloner le projet
2. Faire un `npm i`
3. Créer un fichier .env avec une variable d'environnement DATABASE_URL (exemple : `DATABASE_URL=mongodb://127.0.0.1:27017`)
4. Lancer avec `npm start`


## Exercice
### Début Person Repository + controller
1. Créer un fichier src/entities.ts et dans ce fichier déclarer une interface Address et une interface Person qui correspondent à ce qu'on a mis dans la base de données mongodb
2. Dans le dossier repository, créer un fichier person-repository.ts et dans ce fichier déclarer et exporter une const personRepository qui contiendra un objet pour le moment vide
3. Au dessus de cet objet vide, comme dans l'example.ts, faire appel à la connection pour récupérer la db first et la collection person et l'assigner à une variable
4. Dans le personRepository, rajouter un findAll() {} et dedans faire un return du find().toArray()
5. Créer un personController dans son propre fichier, le charger sur la route /api/person dans le app.ts et dans ce contrôleur déclarer une route async en get sur '/' qui va await le personRepository.findAll() et faire un res.json du resultat