class Edge {
    constructor(id, inV, outV, properties) {
        this.id = id
        this.inV = inV
        this.outV = outV
        this.properties = properties
        this.hidden = false
        this.broken = false
    }

    getInvertex() {
        return this.inV
    }
    
    getOutVertex() {
        return this.outV
    }

    getProperties () {
        return this.properties
    }

    getProperty(name) {
        return this.properties[name]
    }

    setHidden(isHidden) {
        this.hidden = isHidden
    }

    setBrokenLink(isBroken) {
        this.broken = isBroken
    }


}

export default Edge