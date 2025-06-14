function solution(N, road, K) {
    const dist = Array(N + 1).fill(Infinity);
    const graph = Array.from({length: N + 1}, () => []);

    for (let [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }

    const visited = Array(N + 1).fill(false);
    dist[1] = 0;

    for (let i = 1; i <= N; i++) {
        let minDist = Infinity;
        let node = -1;

        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                node = j;
            }
        }

        if (node === -1) break;
        visited[node] = true;
        
        for (let [next, cost] of graph[node]) {
            if (dist[next] > dist[node] + cost) {
                dist[next] = dist[node] + cost;
            }
            console.log(dist)
        }
    }
    
    return dist.filter(d => d <= K).length;
}