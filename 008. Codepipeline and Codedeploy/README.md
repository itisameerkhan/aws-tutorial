![demo](../ASSETS/demo12.png)

# 🌐 CodeDeploy 

CodeDeploy is a deployment service from AWS which can automate application deployments Amazon EC2 instances, on premises instances or Lambda functions, This does a onetime deployment for scheduling of deployment you may have to use AWS CodePipeline also.

### 📌 Application 

A CodeDeploy application can be defined from AWS CodeDeploy web console

### 📌 Revision

Represents the code need to be deployed on EC2 instance.

### 📌 Appspec file

This contains the instruction to CodeDeploy like copying of files, executng the scripts etc during the code deployment process. it is present in the root directory of unzipped code with name `appspec.yml`

### 📌 Deployment Group

Represent set of machines of Lambda function where code has to be deployed.

### 📌 Deployment

The process of deployment

## 🌟 Set up in Brief

I have used two EC2 instance of AMZ2 Linux. First one is the web server we will be configuring, also called CodeDeploy agent. Second EC2 machine is supposed to use by developer where the codes are programmed. The names of the resources in the experiment are arbitrary and may name the resources your own. 

1. Create IAM Roles for EC2:S3-CodeDeploy access.

2. Create IAM user account for developer

3. Install and prepare the CodeDeploy agent on webserver.

4. Create the code from Developer machine 

5. Create CodeDeploy application and Push the code to S3 bucket from developer machine

6. Create Deployment Group to include web server 

7. Create Deployment to push the code to the webserver

8. Test the website configuration

---

## ⭐ 1- Create IAM Roles for EC2-53-CodeDeploy access.

* Create IAM Role for EC2 instance to access S3. Select EC2 as AWS service and assign `AmazonS3FullAccess` permission. Use any arbitrary name for the Role. I have used a name `s3-ec2-full`. This Role must be attached the EC2 instance (webserver) later.

* Create another IAM Role for CodeDeploy access. Select CodeDeploy as AWS Service and assign `AWSCodeDeployRole` permission like below. I have assigned a name `cdrole`. This role must be used while the CodeDeploy deployment is configured in a later stage.

## ⭐ 2-Create IAM user account for developer

*  Use the existing desktop/laptop or Launch a new EC2 instance. This is used by the Developer for the code creation and manual pushing of code to S3 bucket. 

*  Create an IAM user and assign programming access. He should be given `AmazonS3FullAccess` and `AWSCodeDeployFullAccess` permissions 

* execute aws configure command on developer's machine and install the access/secret keys.

## ⭐ 3- Install and prepare the CodeDeploy agent on webserver

* Launch the EC2 instance. This is used for deploying webserver with CodeDeploy.

* Create a Tag for the instance. The deployment group member ship for the EC2 instance is decided by this Tag. I have used AppName Tag with value SampleApp.

* open the port 80 for Security Group since it is a web server.

* Attach the Role s3-ec2-full to this instance