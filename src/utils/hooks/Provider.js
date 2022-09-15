import { useEffect, useState } from "react";

export default function useUserProvider() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let signal = true;

        if(signal) {
            // console.log('useUserprovider effect run');
            fetch(process.env.REACT_APP_API + 'users/amolkumargupta/repos')
            .then( (res)=> { return res.json()} )
            .then( (data)=> { setUser(data) } )
        }

        return () => {
            signal = false;
        } 
    }, []);

    return user;
}


export function useQuoteProvider() {
    const [quote, setQuote] = useState(null);

    useEffect(()=>{
        // console.log('quote: effect');
        let signal =  true;

        if(signal) {
            fetch('https://api.quotable.io/random')
            .then( (res)=>{return res.json()} )
            .then( (data)=>{setQuote(data)} )
        }
        
        return ()=>{
            signal=false;
        }
    },[]);

    return quote;
}