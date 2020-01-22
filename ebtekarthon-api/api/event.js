const express = require('express');
event = express.Router(),
	addEvent ='/addEvent.html',
	routeBase = '/eventInf', {
		createDatabaseConnection,
		DB_NAME
	} = require('../dataBase/config.js');

event.post(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
	
	let  qu=`INSERT INTO ${DB_NAME}.event_inf (time, title, day_id) VALUES ('`+req.body.time+`','`+req.body.title +`','`+ req.body.day_id +`');`
	connection.query(qu, function (err, result) {
		if(err) throw err;
		let data = {
			time: req.body.time,
			title: req.body.title,
			day_id: req.body.day_id
		};
		connection.end();
		res.send(data);
	});
});
})

// event.post(addEvent, (req, res) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "*");
// 	createDatabaseConnection((error, connection) => {
// 		if (error) {
// 			console.log(error);
// 			return;
// 		}
// 		 qu=`INSERT INTO ${DB_NAME}.event_inf (hour, title, day_id) VALUES ( '` + req.body.hour +"','" +req.body.title + "','" + req.body.day_id + " ');"
// 		connection.query(qu, function (err, result) {
// 			if(err) throw err;
// 			let data = {
// 				hour: req.body.hour,
// 				title: req.body.title,
// 				day_id: req.body.day_id
// 			};
// 			connection.end();
// 			res.send(data);
// 		});
// 	});
// })


event.delete(routeBase , (req, res) => {
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(404);
			return;
		}
		const id = req.body.id;
		console.log(id);
		const sql =  `DELETE FROM ${DB_NAME}.event_inf WHERE event_id=`+id;
		console.log(sql);
		connection.query(sql , function (err, result) {
		if(err) {
			res.status(500).send({error:`something failed`})
		}
			res.json({status: `success`})
			console.log(result);
			connection.end();
			res.send(result);
		});
	});
});


// event.get(routeBase, (req, res) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "*");
// 	createDatabaseConnection((error, connection) => {
// 		if (error) {
// 			console.log(error);
// 			return;
// 		}
// 		connection.query(`SELECT * FROM ${DB_NAME}.event_inf`, function (err, result) {
// 			connection.end();
// 			console.log(result);
// 			res.send(result);
// 		});
// 	});
// });

module.exports = event;
