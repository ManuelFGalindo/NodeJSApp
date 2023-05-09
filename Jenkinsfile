@Library('NodeJSApp_Library@feature') _

node {
    // Cargar el Jenkinsfile del repositorio devops
    def sharedJenkinsfile = libraryResource 'devops/Jenkinsfile'
    load(sharedJenkinsfile).call()

    hello()
}