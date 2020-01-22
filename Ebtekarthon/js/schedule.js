function levelTwo() {
	location.replace("../justInCaseschadule/createDay.html");
}

function addEvent() {
	location.replace("../schedules/addEvent.html");
}

function getParameterByName(name, url) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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

let z=arr[0].id , day="" ;
    
day +='<div class="post" data-id="'+arr[0].id+'"><input type="button"  class="deleteDay" id="'+arr[0].id+'" onclick="removeDay(this.id)">'+
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
});
day +='</div></div></div>';
	// 	var id = document.getAttribute("data-id");
	// 	window.location = "../schedules/addEvent.html?id=" + id;
	// 	console.log(getParameterByName("id", url));
	// 	url = window.location.href = "?id=";

	// 		for(var i=0; event.length;i++){
	// 				if (hour[index] = null) {
	// 			console.log('sss')
	// 	});

	document.getElementById('schedule').innerHTML = day;
	// let deleteDay = document.getElementsByClassName("deleteDay");
	// for (let i = 0; i < deleteDay.length; i++) {
	// 	deleteDay[i].addEventListener("click", element => {
	// 		removeDay(element.target)
	// 	})
	// }

	// let deleteEvent = document.getElementsByClassName("deleteEvent");
	// for (let i = 0; i < deleteEvent.length; i++) {
	// 	deleteEvent[i].addEventListener("click", element => {
	// 		removeEvent(element.target)
	// 	})
	// }
	
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
			// event.parentElement.remove();

console.log(data);
		})
}
