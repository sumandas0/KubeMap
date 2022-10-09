class Vertex {
    status

    constructor(id, resourceType, resourceName) {
        this.id = id //unique ID to identify Resource Vertex
        this.inE = [] //array of in edges
        this.outE = [] //array of out edges
        this.resourceType = resourceType //string
        this.resourceName = resourceName //string
        this.properties = new Map() //map of properties
    }

    getInEdges() {
        return this.inE
    }

    insertInEdge(inE) {
        this.inE.push(inE)
    }

    insertOutEdge(outE) {
        this.outE.push(outE)
    }
    
    getOutEdges() {
        return this.outE
    }

    getResourceType() {
        return this.resourceType
    }

    getResourceName() {
        return this.resourceName
    }

    setProperty(key, value) {
        this.properties.set(key,value)
    }

    getProperties () {
        return this.properties
    }

    getProperty(name) {
        return this.properties[name]
    }

    setStatus (status) {
        this.status = status
    }
}

export default Vertex