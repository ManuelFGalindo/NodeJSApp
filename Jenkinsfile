@Library('NodeJSApp_Library@feature') _

stage 'Load Jenkinsfile from devops repo'
def jenkinsFile = fileLoader.fromGit('Jenkinsfile.groovy', 
        'https://github.com/JulianMolina99/devops.git', 'feature', 'token_github', '')
