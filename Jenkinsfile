pipeline {
    agent any

    stages {
        // Checkout the code from GitHub
        stage('Checkout') {
            steps {
                git 'https://github.com/petermwenda87/gallery.git'
            }
        }

        // Install the required dependencies 
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // Run tests with Jest
        stage('Test') {
            steps {
                script {
                    // Run the tests using npm test
                    sh 'npm test'
                }
            }
        }

        // Deploy to Render 
        stage('Deploy to Render') {
            steps {
                sh 'node server.js &'
            }
        }
    }

    post {
        failure {
            mail to: 'your-email@example.com',
                 subject: "Build failed: ${env.BUILD_TAG}",
                 body: "The build failed for project ${env.JOB_NAME} at ${env.BUILD_URL}. Please check the logs."
        }
    }
}
