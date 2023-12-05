@Library(devops) _
pipeline {
    agent any
    stages{
        stage('mensaje'){
            sh'echo hola'
        }
        stage('prueba'){
            steps{
                pipelineGeneral()
            }
        }
    }
}
