@Library('NodeJSApp_Library@feature') _
/*
def jenkinsFile
stage ('Loading Jenkinsfile') {
    jenkinsFile = fileLoader.fromGit ('Jenkinsfile.groovy', 'https://github.com/JulianMolina99/devops.git', 'feature', 'token_github', '')
}

*/

stage 'Load a file from GitHub'
def jenkinsFile = fileLoader.fromGit('Jenkinsfile.groovy', 
        'https://github.com/JulianMolina99/devops.git', 'feature', 'token_github', '')
