pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Build') {
      steps {
        git 'https://github.com/Premath123/Safety_Suite_Assurance.git'
        bat 'npm install'
      }
    }
  }
}
