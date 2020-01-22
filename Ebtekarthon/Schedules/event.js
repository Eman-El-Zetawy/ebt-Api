const idBreak = document.getElementById("Break!"),
	   idLunch = document.getElementById("Lunch Break!") ,
	   idEvent =document.getElementById("event"),
	   data=document.getElementById("data"),
	   save = document.getElementById('save');

	   const myheader = new Headers();
	   myheader.append('Content-Type', 'application/json');

idBreak.addEventListener("click",()=>{
data.innerHTML='<input type="text" placeholder="12:45 PM" id="datetime">'+
'<input type="button" value ="Break!" id="title">';
save.style ="display:block;";
console.log(document.getElementById("title").value);
});

idLunch.addEventListener("click",()=>{
	data.innerHTML='<input type="text" placeholder="12:45 PM" id="datetime">'+
	'<input type="button" value ="Lunch Break!" id="title">';
	console.log(document.getElementById("title").value);
	save.style ="display:block;";
	});

	idEvent.addEventListener("click",()=>{
		data.innerHTML='<input type="text" placeholder="12:45 PM" id="datetime">'+
		'<input type="text" placeholder="Title" id="title">';
		save.style ="display:block;";
		});


       save.addEventListener('click', eventFactory);

function eventFactory(){
	const datetime = document.getElementById('datetime');
	const title = document.getElementById('title');
	const dayId = document.getElementById('dayId');

	 fetch('http://localhost:3000/eventInf',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
		  		time :  datetime.value,
				title :  title.value
				//, day_id :  dayId.value

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
	}); 
	};

	// 			<input type="text" placeholder="dayId" id="dayId"> --></input>
