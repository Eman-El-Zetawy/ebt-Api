const myHeader =new Headers();
myHeader.append('Content-Type', 'application/json');

const save = document.getElementById('save').addEventListener('click', dayFactory);

function dayFactory(){
	const title = document.getElementById('title'); 

	 fetch('http://localhost:3000/day',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
				day_date :  title.value, 
				ebt_id :    "1"

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 

window.location = "../Schedules/addEvent.html?id="+data.id;
	}); 
	};
	