use('mflix')

db.movies.find({'imdb.rating': {$gte:8.5}})

db.movies.find({directors: 'Sofia Coppola'})

db.movies.find({cast: 'Brendan Fraser'}, {title:true})

db.movies.find({languages: 'French', year: {$lt: 2000}})

db.movies.find({genres: {$all:['Sci-Fi', 'Action']}})
// db.movies.find({$and:[{genres:'Action'}, {genres:'Sci-Fi'}]})

db.movies.find({$or:[{title:{$regex:'moon'}}, {plot:{$regex:'moon'}}]}, {title:true})

db.movies.find({languages:['Russian'], runtime:{$gt:120}})

db.movies.find({'directors.1':{$exists:true}})
// db.movies.find({$expr:{$gt:[{$size:'$directors'}, 1]}})