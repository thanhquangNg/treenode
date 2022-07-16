//using for edit the name
function updateNodeInTree(node, nodeId, newNode) {
    if (node.nodeId == nodeId) {
        node.nodeName = newNode.nodeName;
    } else if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            result = updateNodeInTree(node.children[i], nodeId, newNode);
        }
    }
}
//remove
function deleteNodeFromTree(node, nodeId) {
    if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            let filtered = node.children.filter(f => f.nodeId == nodeId);
            if (filtered && filtered.length > 0) {
                node.children = node.children.filter(f => f.nodeId != nodeId);
                return;
            }
            deleteNodeFromTree(node.children[i], nodeId,);
        }
    }

}
//add a child
function insertNodeIntoTree(node, nodeId, newNode) {
    if (node.nodeId == nodeId) {
        // get new id
      	let n = 0;
        /** Your logic to generate new Id **/
       
        if (newNode) {
            newNode.nodeId = n;
            newNode.children = [];
            node.children.push(newNode);
        }

    } else if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            insertNodeIntoTree(node.children[i], nodeId, newNode);
        }

    }

}

//retrieve an element from tree
function getNodeFromTree(node, nodeId) {
    if (node.nodeId == nodeId) {
        return node;
    } else if (node.children != null) {
        var result = null;
        for (let i = 0; result == null && i < node.children.length; i++) {
            result = getNodeFromTree(node.children[i], nodeId);
        }
        return result;
    }
    return null;
}
