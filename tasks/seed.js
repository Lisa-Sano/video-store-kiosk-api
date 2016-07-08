let massive = require('massive')
let connectionString = "postgres://localhost/video-store-api-"
let movies = require('../db/seeds/movies.json')
let customers = require('../db/seeds/customers.json')
let envs = ['development', 'test']


envs.forEach(function(env) {
  let db = massive.connectSync({ connectionString: connectionString + env })
  for (let movie of movies) {
    console.log('saved in ' + env + ': ', movie.title)
    db.movies.saveSync(movie)
  }

  for (let customer of customers) {
    console.log('saved in ' + env + ': ', customer.name)
    db.customers.saveSync(customer)
  }
})

console.log("seeding done!")
process.exit()