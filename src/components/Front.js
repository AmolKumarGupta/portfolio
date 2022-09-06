import Header from "../layouts/Header";
import Main from "../layouts/Main";

export default function Front(){
    return (
        <div className="animate-background will-change-[background] min-h-[400px] md:min-h-[100vh] flex flex-col">
            <Header/>
            <Main/>
        </div>
    )
}