// export const addmessageToServer=async(name,email,subject,message)=>{

//     const response=await fetch("http://localhost:3003/api/contact",{
// method:"POST",
// headers:{

//     "Content-Type":"application/json",
// },
// body:JSON.stringify({name,email,subject,message}),




//     });
//  const messagec=await response.json();
// return mapServermessageToLocalItem(messagec.data);


// }

// const mapServermessageToLocalItem=(serverItem)=>{
//     return{
//     id:serverItem._id,
//     name:serverItem.name,
//     email:serverItem.email,
//     message:serverItem.message,
//     subject:serverItem.subject,
   
    
    
//     }
    
//     }