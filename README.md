# unplatforms-screener-project

This is a Questionnaire Screen Project where the below mentioned functionalities are implemented, such as:<br/>
-> Adding Questions<br/>
-> Adding Options<br/>
-> Deleting Question<br/>
-> Save Button posts data to MySQL, and can retrieve data when refreshed.<br/>
<br/>
# Technologies Used:<br/>
FrontEnd:<br/>
-> ReactJS (Functional)<br/>
-> React Hooks (used it for simplicity, debugging, and better results)<br/>
-> CSS 3<br/>
-> Bootstrap 5<br/>
<br/>
BackEnd:<br/>
-> NodeJS<br/>
-> ES6<br/>
-> Express<br/>
-> WAMP Server (consists of MySQL + Apache WebServer)<br/>
-> SQL
-> Async/Await Functions (in place of Sequelize)<br/>
<br/>
# How to run the application:<br/>
-> Install a Wamp Server in your local machine. (I prefer to download UwAmp Wamp Server)<br/>
-> Git clone this repository along with "unplatforms_questionnaire" repository.<br/>
-> Replace "unplatforms_questionnaire" repo with the Sub-module which is at "./unplatforms-screener/client/".<br/>
-> Before using Wamp Server, setup your credentials in .env file of "./unplatforms-screener/server/"<br/>
-> Start the Server, open PhPMyAdmin, login with credentials, and manually create a database of your desired name.<br/>
-> Add this name exactly the same in .env file in "./unplatforms-screener/server/"<br/><br/>
<br/>
-> That's it. Now, open split terminal and:<br/>
  -> Enter Command 'npm start' at "./unplatforms-screener/client/unplatforms_questionnaire/" to run FrontEnd<br/>
  -> Enter Command 'npm run devStart' at "./unplatforms-screener/server/" to run BackEnd<br/>
  
  ## Enjoy using the Application :)
