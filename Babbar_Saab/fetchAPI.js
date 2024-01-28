// async function utility(){

//     let content =await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     let output= await content.json();
//     console.log(output);
// } 

// utility();


//json -> javascript object notation


async function helper(){
    let options = {
      method: "POST",
      body: JSON.stringify({    //json -> string
        title: "Vansh",
        body: "Ghaint Body",
        userId: 1608,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    let content =await fetch("https://jsonplaceholder.typicode.com/posts", options);

    let response=content.json();

    return response;
}

async function utility(){
    let ans=await helper();
    console.log(ans);
}
utility();