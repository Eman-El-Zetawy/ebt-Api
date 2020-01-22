document.getElementById('buttonSave').addEventListener('click', add);
//let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
//console.log(token);
let about ={};
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
//myheader.append('Authorization', `Bearer ${token}`);
renderabout();
 function add() {
     const description = document.getElementById('description'),
     vidoe = document.getElementById('vidoe');

     fetch('http://localhost:3000/about', {
             method: 'PUT',
             headers: myheader,
             body: JSON.stringify({
                 description :description.value,
                 vidoe :vidoe.value
             })
         })
         .then(response => response)
         .then((data) => {
            // console.log(data);
         renderabout();
         console.log(about);
         })

 }



 function renderabout(about){ 
     fetch('http://localhost:3000/about', {
                method: 'GET',
                headers: myheader
            })
            .then(response => response.json())
            .then((data) => {
               about=data[0];
            //    renderabout(about);
            console.log(about);
          document.getElementById('description').innerHTML = `${about.aboutdescr}`;
          document.getElementById('vidoe').value = about.aboutvidoe ;
    });  }