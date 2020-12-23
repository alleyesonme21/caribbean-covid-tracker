<br>
<p align="center">
  <u><big>|| <b>Caribbean Covid TrackerI</b> ||</big></u>
</p>
<p align="center">
    <p align="center">
    </p>
    <p align="center"> 
        | <a href="https://github.com/alleyesonme21">
            <strong>Johnny Duverseau</strong>
        </a> | 
    </p>
    <!-- Project Shields -->   
</p>

<p align="center">
  <medium>Created on 12/23/2020,
</p>


## 🌐 About the Project

### 📖 Description
A web API for travelers to the Caribbean to know the COVID reopening details, pre-arrival requirements, testing requirements, and quarantine requirements during the global pandemic. Currently v1.0.
### 🦠 Known Bugs

* Authorization not set up on client facing side of application, therefore it is not secure.
Authentication is not set up, therefore email and password from user is not required. 


### 🛠 Built With
* VS Code
* React
* HTML
* CSS
* JSX
* C#
* ASP.NET Core MVC
* MySQL Workbench
* Entity Framework Core 2.2.0
* Postman

## 🏁 Getting Started

### ⚙️ Setup and Use

  #### Cloning Client side 

  1) Navigate to the [caribbean-covid-tracker repository here](https://github.com/alleyesonme21/caribbean-covid-tracker). 
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
  4) Clone the repository to your desktop: `$ git clone https://github.com/alleyesonme21/caribbean-covid-tracker`
  5) Run the command `cd caribbean-covid-tracker` to enter into the project directory.
  6) View or Edit:
      * Code Editor - Run the command `atom .` or `code .` to open the project in Atom or VisualStudio Code respectively for review and editing.
      * Text Editor - Open by double clicking on any of the files to open in a text editor.

   ### Cloning the api

   1) Navigate to the [caribbean-covid-tracker-api repository here](https://github.com/alleyesonme21/caribbean-covid-tracker-api). 
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
  4) Clone the repository to your desktop: `$ git clone https://github.com/alleyesonme21/caribbean-covid-tracker-api`
  5) Run the command `cd caribbean-covid-tracker-api` to enter into the project directory.
  6) View or Edit:
      * Code Editor - Run the command `atom .` or `code .` to open the project in Atom or VisualStudio Code respectively for review and editing.
      * Text Editor - Open by double clicking on any of the files to open in a text editor.


  #### AppSettings

  1) Create a new file in the caribbean-covid-tracker-api directory named `appsettings.json`
  2) Add in the following code snippet to the new appsettings.json file:
  
  ```
{
    "Logging": {
        "LogLevel": {
        "Default": "Warning"
        }
    },
    "AllowedHosts": "*",
    "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Port=3306;database=project_name;uid=root;pwd=YourPassword;"
    }
}
  ```
  3) Change the server, port, and user id as necessary. Replace 'YourPassword' with relevant MySQL password (set at installation of MySQL).

  #### Database  1) Navigate to caribbean-covid-tracker-api/CaribbeanCovidTracker directory using the MacOS Terminal or Windows Powershell.
  2) Run the command `dotnet ef database update` to generate the database through Entity Framework Core.
  3) (Optional) To update the database with any changes to the code, run the command `dotnet ef migrations add <MigrationsName>` which will use Entity Framework Core's code-first principle to generate a database update. After, run the previous command `dotnet ef database update` to update the database.

  #### Launch the API
  1) Navigate to caribbean-covid-tracker-api/CaribbeanCovidTracker directory using the MacOS Terminal or Windows Powershell.
  2) Run the command `dotnet run` to have access to the API in Postman or browser.
------------------------------
## 🛰️ API Documentation
Explore the API endpoints in Postman or a browser. You will not be able to utilize authentication in a browser.

### Using Swagger Documentation 
For full documentation and to explore the Caribbean Covid Tracker API endpoints with NSwag, launch the project using `dotnet run` with the Terminal or Powershell, and input the following URL into your browser: `http://localhost:5000/swagger/index.html`

..........................................................................................
### Endpoints
Base URL: `https://localhost:5000`
### Workouts
Access information about COVID travel.
#### HTTP Request
```
GET /api/Countries
POST /api/Countries
GET /api/Countries/{id}
PUT /api/Countries/{id}
DELETE /api/Countries/{id}
```
#### Example Query
```
https://localhost:5000/api/countries/?CountryName=jamaica
```
#### Sample JSON Response
```
{
   "country": 1,
        "countryName": "Jamaica",
        "openDetails":” ",
        "openDate": ,
        "preArrival": "",
        "quarantine": "",
        "positiveTest": “”
}

```
### ✉️ Contact and Support

If you have any feedback or concerns, please contact Johnny Duverseau via Github.
------------------------------
### ⚖️ License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (c) 2020 Janet Karpenske. All Rights Reserved.
```
MIT License

Copyright (c) 2020 Johnny Duverseau.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
<center><a href="#">Return to Top</a></center>