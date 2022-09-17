import { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";

const loader = [1,2,3,4].map((ele)=>{
    return <div key={ele} className="border border-slate-300 rounded-md min-w-[280px] w-[400px] px-3 py-2"><div className="animate-pulse"><a href="#top" title="loading" target="_blank" rel="noreferrer"><div className="text-xl font-medium capitalize bg-slate-200 w-1/2 h-4"></div></a><p className="text-sm my-2 lh-2 text-grey-400 bg-slate-200 w-100 h-2"></p><p className="text-sm my-2 lh-2 text-grey-400 bg-slate-200 w-4/5 h-2"></p><p className="flex flex-wrap gap-1 my-2"><span className="text-white border border-slate-200 rounded-xl text-xs px-2 bg-slate-200 min-w-[3rem] w-100 h-3"></span><span className="text-white border border-slate-200 rounded-xl text-xs px-2 bg-slate-200 min-w-[3rem] w-100 h-3"></span></p></div></div>;
});

const Project = ({repos})=> {
    const [listItems, setListItems] = useState([]);
    const [loading,setLoading] = useState(loader);

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
            setLoading(false);
        }
    }, [repos]);

    return (
        <>
        <h3 id="projects" className="text-2xl font-bold mx-6 py-6">Projects</h3>
        <main className=" flex flex-wrap justify-center gap-3 mx-4 mb-8">
            { loading || listItems }
        </main>
        </>
    );
}

export default Project;