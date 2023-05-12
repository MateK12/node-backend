let API = "http://127.0.0.1:3000";
let input = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click",handle_submit)
async function  handle_submit() {
    let p = input.value;
    console.log(p)
    const respuesta = await fetch(API,{
        method:["POST"],
        headers:{"Content-Type":"application/json"
      },
      body: JSON.stringify ({
        p
    })
      })
    let res = await respuesta.json();
    console.log(res);
  }

