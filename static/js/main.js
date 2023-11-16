async function createAsyncGETRequest(url){
    return new Promise((resolve, reject) => {
      fetch(url).then(response=>{
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
  
  async function createHistory(){
    data = await createAsyncGETRequest(' http://127.0.0.1:5000/main');
    
    //data = JSON.parse(data);

    
   tag= document.getElementById("about-me-text");
   tag.textContent = data["name"]+ " " + data["surname"];
  }
  
  createHistory();  