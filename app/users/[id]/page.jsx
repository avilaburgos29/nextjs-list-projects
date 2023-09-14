
async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    // console.log(data)
    return data.data
  
  }

async function UserPage ({ params }){
    
    // console.log(params);
    const user = await getUser(params.id)

    return(
        <div className="bg-slate-700 p-10 rounded-md">
            <img src={user.avatar} alt="avatar" className="m-auto my-4 rounded-md" />
            <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
            <p className="text-slate-300">Email: {user.email}</p>
        </div>
    )

}

export default UserPage