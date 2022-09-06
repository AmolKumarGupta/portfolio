import { useEffect, useState } from "react"

const useUserProvider = (name) => {
    const [user,setUser] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_API + 'users/' + name)
            .then( (res) => { return res.json()} )
            .then( (data)=> {setUser(data);});
    }, [name]);

    return user;
}

export default useUserProvider;