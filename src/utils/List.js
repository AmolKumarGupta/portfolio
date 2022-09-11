import { useEffect, useState } from "react";

const List = ({repos})=> {
    const [listItems, setListItems] = useState([]);

    useEffect( ()=> {
        if(repos != null) {
            const arr = Object.entries(repos);
            console.log('list run')
            const items = arr.map((e, i) => {
                return <li key={i}>{e.toString()}</li>;
            });
            
            setListItems(items);
        }
    }, [repos]);

    return (
        <>
        <ul>
            {listItems}
        </ul>
        </>
    );
}

export default List;