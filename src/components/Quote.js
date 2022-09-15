import { useQuoteProvider } from "../utils/hooks/Provider";

const Quote = () => {
    const quote = useQuoteProvider();

    return (
        <>
        <blockquote className="text-center text-xl italic py-12 px-2">
            `{quote?.content}` ~ {quote?.author}
        </blockquote>
        <hr/>
        </>
    );
}

export default Quote;