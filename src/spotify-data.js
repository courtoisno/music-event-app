// import  modules
const Sequelize = require ('sequelize')
const express = require ('express')
const session = require ('express-session')
const bodyParser = require('body-parser')
const app = express()

// set up the views engine
app.set('views', './views')
app.set('view engine', 'pug')

// For logged in user start session
app.use(
	express.static( 'static' ),
	session ({
		secret: 'this is some secret',
		resave: true,
		saveUninitialized: false
	})
)

// trial route
app.get( '/ping', ( req, res ) => {
	res.send( 'pong' )
})

app.listen ( 8000, () => {
	console.log ( 'up and running ')
} )