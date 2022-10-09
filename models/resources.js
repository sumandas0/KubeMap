
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Client1_13,KubeConfig } = require('kubernetes-client')
const Request = require('kubernetes-client/backends/request')

class Resources {
    constructor(configPath,namespace){
        const kubeconfig = new KubeConfig()
        kubeconfig.loadFromFile(configPath)
        const backend = new Request({ kubeconfig })
        const Client = Client1_13
        this.client = new Client({ backend, version: '1.13' })
        this.namespace = namespace
    }

   async fetchIngresses() {
        const ingresses = await this.client.apis.extensions.v1beta1.namespaces(this.namespace).ingresses().get()
        const items  = ingresses.body.items
        return items
    }

    async fetchIngress(ingressName) {
        const ingress = await this.client.apis.extensions.v1beta1.namespaces(this.namespace).ingresses(ingressName).get()
        const item  = ingress.body
        return item
    }

    async fetchServices() {
        const services = await this.client.api.v1.namespaces(this.namespace).services().get()
        const items = services.body.items
        return items
    }

    async fetchService(serviceName) {
        const service = await this.client.api.v1.namespaces(this.namespace).services(serviceName).get()
        const item = service.body
        return item
    }

    async fetchEndpoints() {
        const endpoints = await this.client.api.v1.namespaces(this.namespace).endpoints().get()
        const items = endpoints.body.items
        return items
    }

    async fetchEndpoint(endpointName) {
        const endpoint = await this.client.api.v1.namespaces(this.namespace).endpoints(endpointName).get()
        const item = endpoint.body
        return item    
    }

    async fetchPods() {
        const pods = await this.client.api.v1.namespaces(this.namespace).pods().get()
        const items = pods.body.items
        return items
    }

    async fetchPod(podName) {
        const pod = await this.client.api.v1.namespaces(this.namespace).pods(podName).get()
        const item = pod.body
        return item
    }

    async fetchReplicaSets() {
        const replicaSets = await this.client.apis.apps.v1.namespaces(this.namespace).replicasets().get()
        const items = replicaSets.body.items
        return items
    }

    async fetchReplicaSet(replicaSetName) {
        const replicaSet = await this.client.apis.apps.v1.namespaces(this.namespace).replicasets(replicaSetName).get()
        const item = replicaSet.body
        return item
    }

    async fetchDeployments() {
        const deployments = await this.client.apis.apps.v1beta1.watch.namespaces(this.namespace).deployments().get()
        const items = deployments.body.items
        return items
    }

    async fetchDeployment(deploymentName) {
        const deployment = await this.client.apis.apps.v1beta1.watch.namespaces(this.namespace).deployments(deploymentName).get()
        const item = deployment.body
        return item
    }

    async fetchStateFulSets() {
        const stateFulSets = await this.client.apis.apps.v1beta1.watch.namespaces(this.namespace).statefulsets().get()
        const items = stateFulSets.body.items
        return items
    }

    async fetchStateFulSet(sts) {
        const stateFulSet = await this.client.apis.apps.v1beta1.watch.namespaces(this.namespace).statefulsets(sts).get()
        const item = stateFulSet.body
        return item
    }


}

export default Resources