# DevUp

DevUp is a application for team mangment. In this website other developer who are looking to do projects, work and help other developer. In the application the user can create rooms, in this rooms there will be deatils about the project what languages are used. This application is the perfect platform for developers who wants to communicate with other new developers.

## Installation instructions
To use this application you can clone the repo via this command in your terminal

```shell
git clone https://github.com/MohammedBm/DevUp.git
```

This command will clone the repo in github to your machine.


### installing backend
After cloning the repo you can type the following command in you temrinal inside the repo you cloned.
`cd` to the `clinet` by using this command
```shell
cd DevUp	
```
To install the database you will need to set it up first by using this command
```shell
rails db:setup
```
After Setting up the database you will need to migrate it
```shell
rails db:migarte
```
When the database is migrated you can create dummy data by the following command
```shell
rails db:seed
```
To run the backend you will need this command
```shell 
rails s
```
### Installing react side
After cloning the repo you can type the following command in you temrinal inside the repo you cloned.
`cd` to the `clinet` by using this command
```shell
cd client	
```

```shell
 npm install #or you can write `yarn install` if you have yarn in your machine
```

This command will install the packages needed for the application to start working

After installing the packages you can type this command to run the application in your machine

```shell
  npm start
```

This command will host the application locally in your machine. You can use the application in the url <http://localhost:3001/>.

Note: this is not the last verison of the application. There is more feature is planned to be added. Check out the issues if you have any suggestion or checking any up coming features
