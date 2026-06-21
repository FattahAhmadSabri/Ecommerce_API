  let users = [{ id: 1, name: "Sabri" }];
     let index =2
const createUserService =(name)=>{
  
        const newUser = {
           id : index++,
           name
        }
        users.push(newUser);
     return newUser
}

const getUserByIdService= (id)=>{
   return users.find((user)=>user.id===id)
}

module.exports ={users,createUserService, getUserByIdService}