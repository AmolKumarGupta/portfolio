import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItems = ({repo}) => {
    const {name, description, topics, html_url, language, homepage} = repo;

    return (
        <>
        <div className=" border border-slate-300 rounded-md min-w-[280px] w-[400px] px-3 py-2">
            <a href={html_url} title={name} target="_blank" rel="noreferrer"><h2 className="inline text-xl font-medium capitalize">{name}</h2><span className="float-right text-xs font-sans">{language}</span></a>
            <p className="text-sm my-2 lh-2 text-grey-400">{description}</p>
            <p className="flex flex-wrap gap-1 my-2">{topics.map( (topic)=><span key={topic} className="text-white bg-gray-600 border border-gray-600 rounded-xl text-xs px-2">{topic}</span> )}</p>
            { homepage && <a href={homepage} target="_blank" rel="noreferrer" title={name+"-website"}><FontAwesomeIcon icon={faArrowUpRightFromSquare} pull="right" /></a>}
        </div>
        </>
    );
}

export default ProjectItems;