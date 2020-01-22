// function levelTwo() {
// 	location.replace("../justInCaseschadule/createDay.html");
// }

// function addEvent() {
// 	location.replace("../schedules/addEvent.html");
// }

// function getParameterByName(name, url) {
// 	name = name.replace(/[\[\]]/g, '\\$&');
// 	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
// 		results = regex.exec(url);
// 	if (!results) return null;
// 	if (!results[2]) return '';
// 	return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }

let days = [];
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');

///////////// GET METHOD ///////////

fetch('http://localhost:3000/day', {
		method: 'GET',
		headers: myheader
	}).then(response => response.json())
	.then((data) => {
		days = data;
console.log(data);
		render(days);
	});

function render(arr) {
console.log(arr);
let z=arr[0].id , day="" ;
    
day +='<div class="post" ><input type="button"  class="deleteDay" id="'+arr[0].id+'" onclick="removeDay(this.id)">'+
'<a href="../schedules/addEvent.html?id='+arr[0].id+'"><input type="button" id="edit"></a><br>'+
'<div class="schedule-content"><h3 id="show"  >'+arr[0].day_date+
'</h3><hr><div>';
   arr.forEach((obj,i)=>{
 if(obj.event_id !==null){
	if(z !==obj.id){
		day +='</div></div></div>';
		
		day +='<div class="post" data-id="'+obj.id+'"><input type="button"  class="deleteDay" id="'+obj.id+'" onclick="removeDay(this.id)">'+
		'<a href="../schedules/addEvent.html?id='+obj.id+'"><input type="button" id="edit"></a><br>'+
		'<div class="schedule-content"><h3 id="show"  >'+obj.day_date+'</h3><hr><div>';
			z = obj.id ;
	
}	
		day +='<div class="i" event-id="'+obj.event_id +'">'+
		'<img src="../images/m1.jpg" alt="" id="break"><input type="button" id="'+obj.event_id +'" class="deleteEvent" onclick="removeEvent(this.id)" ><h5>'+
		obj.time +'</h5><h6>'+obj.title +'</h6><hr><hr></div>' ;
	}
	if(obj.event_id==null){
		console.log(obj.id);
//removeday(obj.id);
	}
});
day +='</div></div></div>';

	document.getElementById('schedule').innerHTML = day;
	
}
function removeEvent(id) {
	let i = id;
	const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
	fetch('http://localhost:3000/eventInf', {
			method: 'DELETE',
			headers: myheader,
			body: JSON.stringify({
				id: i
			})
		}).then(res =>res.json())
		.then(data => {
days.forEach((o,j)=>{ if( o.event_id== i){days.splice(j,1); }});
     render(days);
		

console.log(data);
		})
}

function removeday(id) {
	let i = id;
	const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
	fetch('http://localhost:3000/day/', {
			method: 'DELETE',
			headers: myheader,
			body: JSON.stringify({
				id: i
			})
		}).then(res =>res.json())
		.then(data => {
// days.forEach((o,j)=>{ if( o.id== i){days.splice(j,1); }});
// 	 render(days);
console.log(data);
		})
}
