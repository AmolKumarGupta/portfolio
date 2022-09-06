import { useMemo } from "react";

const Test = ()=>{

    const data = useMemo(async ()=>{
        return await fetch(process.env.REACT_APP_API + 'users/amolkumargupta')
                .then( (res)=> res.json())
    },[]);

    

    console.log(data)
    return (
        <>
        </>
    );
};

export default Test;