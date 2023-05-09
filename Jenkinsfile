@Library('NodeJSApp_Library@feature') _

node {
    // Clonar el repositorio devops
    dir('devops') {
        git branch: 'feature', credentialsId: 'token_github', url:'https://github.com/JulianMolina99/devops.git'
    }

    // Cargar el Jenkinsfile del repositorio devops
    def sharedJenkinsfile = load 'devops/Jenkinsfile'
    sharedJenkinsfile.call()

    hello()
}