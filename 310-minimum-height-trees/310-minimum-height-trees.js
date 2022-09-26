/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n <= 0) return []
    if (n === 1) return [0]
    const graph = Array.from({ length: n }, () => []);
    // let graph = {}
    // console.log(graph)
    let indegree = Array(n).fill(0)
    for (const [a ,b] of edges) {
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
        indegree[a]++
        indegree[b]++
    }
    // console.log(graph)
    let leaves = []
    for (let i = 0 ; i < n; i++) {
        if(indegree[i] === 1) leaves.push(i)
    }
    
    let total = n
    
    while (total > 2) {
        let size = leaves.length
        total -= size
        
        for(let i = 0; i < size; i++) {
            let vertex = leaves.shift()
            for(let edge of graph[vertex]) {
                indegree[edge]--
                if(indegree[edge] === 1) leaves.push(edge)
            }
        }
    }
    return leaves
};






