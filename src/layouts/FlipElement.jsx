import { useMemo } from "react";

const FlipElement = ({title, color, description, images})=>{

    const imgElement = useMemo( ()=>{
        return Object.entries(images).map( ([key, value])=>{
            return <img src={value} alt={key} key={key} width={50} height={50} />
        });
    }, [images]);

    return (
        <>
        <div className="flip-card bg-transparent w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] [perspective: 1000px] mx-auto">
            <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 [transform-style: preserve-3d] shadow-md">
                <div className={`flip-card-front bg-${color} text-black rounded`}>
                    <div className="text-sky-50 text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</div>
                </div>
                <div className={`flip-card-back bg-white border-2 border-${color} rounded`}>
                    <div className="leading-8 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className="inline-flex flex-wrap justify-center gap-2">
                            {imgElement}
                        </p> 
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden bg-[#2980b9] border-[#2980b9]"></div>
        <div className="hidden bg-yellow-500 border-yellow-500"></div>
        <div className="hidden bg-violet-600 border-violet-600"></div>
        <div className="hidden bg-green-500 border-green-500"></div>
        </>
    );
}

export default FlipElement;