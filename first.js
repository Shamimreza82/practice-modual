
// user name find and gate name and email address

// function dataLode(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayData(data))
// }


// function displayData(data){
//     const ul = document.getElementById('ul-append'); 
//     for (const items of data){
//         console.log (items); 
//         const li = document.createElement("li");
//         li.innerText = items.phone; 
//         ul.appendChild(li); 
//     }

// }




   function postData (){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => postDisplay(post))
   }
   postData ()


    function postDisplay(post){
        const section = document.getElementById ('show-post');
        for (const items of post){
            console.log (items)
            const div = document.createElement ('div'); 
            div.innerHTML = ` 
            <h3> userId:- ${items.userId} </h3> 
            <h3> ID:- ${items.id} </h3> 
            <h1> Title:- ${items.title} </h1> 
            <h1> Body:- ${items.body} </h1> 
            `; 
            section.appendChild (div); 
        }
            
    }

    postDisplay();