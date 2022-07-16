import React, {useState} from "react";
import './index.css';

const Tree = ({data = []})=>{
    return(
        <div className="node-container">
                {data.map(tree =>(
                    <TreeNode node ={tree}/>
                ))}
        </div>
    );
};
const TreeNode = ({node}) =>{
    const [childVisible,setChildVisible] = useState(false);

    const hasChild = node.children ? true : false;
    
    return(
        <p className="d-tree-node border-0">
            <div className="d-flex">
                    <p id="label" onClick={e=>setChildVisible((v)=> !v)}>{node.label}</p>
                    <button>Edit</button>
                    <button>Remove</button>
                    <button>Add a child</button>

            </div>
                {
                    hasChild && childVisible && (<div className="d-tree-content">
                        <ul className="d-flex d-tree-container flex-column">
                            <Tree data={node.children} />
                        </ul>
                    </div>)
                }
            
        </p>
    )

}

export default Tree;