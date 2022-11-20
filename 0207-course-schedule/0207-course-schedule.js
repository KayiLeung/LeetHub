/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let res = false
    const graph = buildGraph(numCourses, prerequisites)
    const visited = new Set()
    const depart = new Array(numCourses).fill(0)
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i, visited, depart, graph)) return false
    }
    return true
};

const buildGraph = (numCourses, prerequisites) => {
    let graph = {}
    
    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }
    
    for (let pre of prerequisites) {
        const [a, b] = pre
        graph[a].push(b)
    }
    
    return graph
}

const hasCycle = (node, visited, depart, graph) => {
    visited.add(node)
    
    for (let neighbor of graph[node]) {
        if(!visited.has(neighbor)) {
            visited.add(neighbor)
            if (hasCycle(neighbor, visited, depart, graph)) return true
        } else {
            if (depart[neighbor] == 0) return true
        }
    }
    depart[node]++
    return false
}