require("babel-polyfill");
const moment = require('moment')
  

async function  init() {
	const db = await require('./core/mongo')()
	let app = require('./core/express')(db)

	app.listen('3000','10.1.82.29', (err) => {
		console.log(`-------------------------------------------------------`)
		console.log(`------- server is start at  ${ moment().format('YYYY-MM-DD HH:mm:ss') } -------`)
		console.log(`-------- server is running at   ---------`)
		console.log(`-------------------------------------------------------`)
	})
}
init()