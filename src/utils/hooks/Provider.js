import { useEffect, useState } from "react";

export default function useUserProvider() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let signal = true;

        if(signal) {
            let storedJson = localStorage.getItem('repos');
            let data = null;
            if ( storedJson ) {
                storedJson = JSON.parse(storedJson);
                if (storedJson.timestamp > Date.now()) {
                    data = storedJson.data;
                }
            }
            if (data) {
                setUser(storedJson.data);
            }else {
                fetch(process.env.REACT_APP_API + 'users/amolkumargupta/repos')
                .then( (res)=> { return res.json()} )
                .then( (data)=> {
                    if (! data.message) {
                        localStorage.setItem('repos', JSON.stringify({timestamp: Date.now()+(30*60*1000), data}));
                    }
                    setUser(data);
                })
            }
        }

        return () => {
            signal = false;
        } 
    }, []);

    return user;
}

export function useRepoList() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let signal = true;

        if(signal) {
            let storedJson = localStorage.getItem('repolist');
            let data = null;
            if ( storedJson ) {
                storedJson = JSON.parse(storedJson);
                if (storedJson.timestamp > Date.now()) {
                    data = storedJson.data;
                }
            }
            if (data) {
                setUser(storedJson.data);
            }else {
                fetch(process.env.REACT_APP_API + 'gists/' + process.env.REACT_APP_REPOLIST_ID)
                .then( (res)=> { return res.json()} )
                .then( (data)=> {
                    if (! data.message) {
                        localStorage.setItem('repolist', JSON.stringify({timestamp: Date.now()+(30*60*1000), data}));
                    }
                    setUser(data)
                })
            }
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