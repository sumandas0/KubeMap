import Resources from '../models/resources.js'

const r = new Resources('/Users/suman/.kube/config','atlas')
r.fetchIngress("atlas-atlas").then((res)=>console.log(res))