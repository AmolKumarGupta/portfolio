import { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";

const Project = ({repos})=> {
    const [listItems, setListItems] = useState([]);

    useEffect( ()=> {
        if(repos != null) {
            // console.log(repos);
            // console.log('list run')

            const filteredRepos = repos.filter( (repo) => {
                return repo.topics.length;
            });

            const items = filteredRepos.map((e, i) => {
                return <ProjectItems key={i} repo={e}/>
            });
            
            setListItems(items);
        }
    }, [repos]);

    return (
        <>
        <h3 id="projects" className="text-2xl font-bold mx-6 py-6">Projects</h3>
        <main className=" flex flex-wrap justify-center gap-3 mx-4 mb-8">
            {listItems}
        </main>
        </>
    );
}

export default Project;