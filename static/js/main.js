async function createAsyncGETRequest(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      }).then(response=>{
        
        if(response.status==200){
          data = response.json();
          return resolve(data);
        } else {
          return reject(response.status);
        }
      }
      )
      });
  }
  
  async function createCV(){
    data = await createAsyncGETRequest('https://closely-sensible-gorilla.ngrok-free.app/main');
    
    //data = JSON.parse(data);

    
   tag= document.getElementById("about-me-text");
   console.log(data)
   console.log(data.id)
   tag.textContent = data.name;
  }
  
  createCV();  
