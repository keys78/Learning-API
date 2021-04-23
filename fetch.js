document.getElementById('button1').addEventListener('click', getText);

//FeTCHING DATA FROM LOCAL

 function getText() {
     fetch('data.txt')
       .then(function(res){
           return res.text();
       })
       .then(function(data) {
           console.log(data);
           let outputt = data;
           document.getElementById('output').innerHTML = outputt;
       })
       .catch(function(err){
           console.log(err)
       })
 }


//FETCHING FILES DATA FROM JSON

 document.getElementById('button2').addEventListener('click', getTextj);

 function getTextj() {
     fetch('customers.json')
       .then(function(res){
           return res.json();
       })
       .then(function(data) {
           console.log(data);
            let output = '';

            data.forEach(function(post){
              output += `
              <li>${post.id}</li>
              <li>${post.name}</li>
              <li>${post.company}</li>
              <li>${post.phone}</li>
              `
            })

            document.getElementById('output').innerHTML = output;
       })
       .catch(function(err){
           console.log(err)
       })
 }



////FETCH FROM EXTERNAL API

 document.getElementById('button3').addEventListener('click', getJSON);

 function getJSON() {
     fetch('https://api.github.com/users')
       .then(function(res){
           return res.json();
       })
       .then(function(data) {
           console.log(data);
           let output = '';

            data.forEach(function(user){
              output += `
              <li>${user.login}</li>
              `
            });

           document.getElementById('output').innerHTML = output;
       })
       .catch(function(err){
           console.log(err)
       })
 }

