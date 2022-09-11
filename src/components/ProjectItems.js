
const ProjectItems = ({repo}) => {
    const {name, description, topics, html_url} = repo;

    return (
        <>
        <div className=" border rounded-md min-w-[280px] w-[400px] px-3 py-2">
            <a href={html_url} title={name} target="_blank" rel="noreferrer"><h2 className="text-xl font-medium capitalize">{name}</h2></a>
            <p className="text-sm my-2 lh-2 text-grey-400">{description}</p>
            <p className="flex flex-wrap gap-1 my-2">{topics.map( (topic)=><span key={topic} className="text-white bg-gray-600 border border-gray-600 rounded-xl text-xs px-2">{topic}</span> )}</p>
        </div>
        </>
    );
}

export default ProjectItems;