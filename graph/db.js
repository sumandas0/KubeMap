class GraphDB {
    vertices
    edges
    constructor() {
        this.vertices =  []
        this.edges = []
    }

    insertVertex(v) {
        this.vertices.push(v)
    }

    insertEdge(e) {
        this.edges.push(e)
    }
}

export default GraphDB