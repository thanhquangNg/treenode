import React from "react";
import Tree from "./tree";

const sampledata = [
    {
        nodeId: "1",
        label:"Category 1",
        children:[
            {
                nodeID:"1-1",
                label:"Category 1.1",
                children:[{
                    nodeId:"1-1-1",
                    label:"Category 1.1.1",
                    children:[ {
                        noteId: "0-1-1",
                        label: "Document-0-1.doc",
                        children:[]
                      }]
                }]
            }
        ]},
        {noteId: "2",
        label:"Category 2",
        children:[
            {
                noteId:"2-1",
                label:"Category 2.1",
                children:[{
                    key:"2-1-1",
                    label:"Category 2.1.1",
                    children:[]
                }]
            }
        ]
    }
]

const TreeList = () =>{
    return(
            <div>           
         <Tree data={sampledata} />          
            </div>

    )
}

export default TreeList;