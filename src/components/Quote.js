import { useEffect, useState } from "react";
import { useQuoteProvider } from "../utils/hooks/Provider";

const Quote = () => {
    const quote = useQuoteProvider();
    const [loading, setLoading] = useState(<div className="animate-pulse blur-[2px] text-slate-200">`Write your plans in pencil and give God the eraser.` ~ Paulo Coelho</div>);

    useEffect(()=>{
        if(quote !== null) {
            setLoading(false);
        }
    },[quote]);

    return (
        <>
        <blockquote className="text-center text-xl italic py-12 px-2">
            { loading || <>`{quote?.content}` ~ {quote?.author}</> }
        </blockquote>
        <hr/>
        </>
    );
}

export default Quote;