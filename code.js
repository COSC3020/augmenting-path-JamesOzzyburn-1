function augmentingPath(graph, startNode, endNode) {
    var currentPath = [], visitedNodes = []; //Make our path and array for the nodes we will visit

    for ([node] of Object.entries(graph)) {
        visitedNodes[node] = false; //I wasnt sure how to pull a node from the graph cleanly so I got this inspiration from cadenmcfate so thank you to him
    }

    if (findAugPathRecursive(graph, startNode, endNode, visitedNodes, currentPath) == true) { //find the path if there is one if not return a empty array
        return currentPath;
    }
    else {
        return [];
    }
}

function findAugPathRecursive(graph, currentNode, endNode, visitedNodes, currentPath) {
    visitedNodes[currentNode] = true //Set true as we have now visited the node
    currentPath.push(currentNode) //Push to path

    if (currentNode == endNode) {
        return true; //If we get to the end return our success
    }

    for ([nextNode] of Object.entries(graph[currentNode])) { //Same comment as line 5
        if (visitedNodes[nextNode] == false) { // If we havent visited it we need to
            if (findAugPathRecursive(graph, nextNode, endNode, visitedNodes, currentPath)) {
                return true; //return our success
            }
        }
    }
    currentPath.pop(); //Pop from path
}