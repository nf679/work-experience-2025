# Work experience 2025

## Contributors

This app has been developed by Nicola, Shrey & Melissa.

## Repository Structure and information

```
backend/                            # Folder containing the code for the back-end
|-- data/                           # Folder containing the data files
|  |-- gws_data.json                # A JSON data file containing all the GWS information
|  |-- gws_quota.json               # A JSON data file containing the GWS quota information
|--tests/                           # Folder containing the tests for the back-end
|  |-- __init__.py                  # Init file makes it a package so we can import from it
|  |-- test_main.py                 # A test file for main.py using pytest
|--__init__.py                      # Init file makes it a package so we can import from it
|-- main.py                         # The main back-end code is in here for the API
|-- requirements.txt                # Requirements file for packages we need for the back-end 
frontend/                           # Folder containing the code for the front-end
|-- public/                         # Folder containing react logos - can ignore these
|-- src/                            # Folder containing all source code for the front-end
|  |-- components/                  # Folder containing components to go on pages
|  |  |-- fwtheme-react-jasmin/     # Folder containing code for the JASMIN branding (don't edit)
|  |  |-- AppNavbar.css             # CSS file to style the App Navbar
|  |  |-- AppNavbar.js              # The React code for the app's navbar with JASMIN logo
|  |-- pages/                       # Folder containing the code for the different pages
|  |  |-- ExampleGraphPage.js       # An example of how to add a page with a graph on it
|  |  |-- ExampleTablePage.js       # An example of how to add a page with a table on it
|  |  |-- HomePage.js               # The code for the home page of the app 
|  |-- App.css                      # CSS file to style the whole app
|  |-- App.js                       # React code for the whole app - add pages to router here
|  |-- App.test.js                  # React Jest test file for the app
|  |-- index.css                    # CSS file to style the index
|  |-- index.js                     # index.js is the entry point for the whole application
|  |-- logo.svg                     # High quality react logo used in the browser tab
|  |-- setupTests.js                # File to set up the Jest testing framework for the repo
|-- .gitignore                      # A file which tells git which files/folders to ignore
|-- package.json                    # Contains a list of the packages the front-end depends on
|-- yarn.lock                       # Detailed info about dependencies and their versions
.gitignore                          # Tells git which files/folders to ignore
README.md                           # A document providing information about the code
```

## Using the program

### Create a venv
A virtual environment is a self-contained folder on your computer where you can install Python libraries just for one project, without affecting other projects on your computer. Think of it as a sandbox for your project.

On mac:
```
cd backend
python -m venv env
source env/bin/activate
```
On Windows:
```
cd backend
python -m venv env
Set-ExecutionPolicy Unrestricted -Scope Process
.\env\Scripts\Activate.ps1
```

### Install requirements using:
On mac AND windows:
```
pip install -r requirements.txt
```

### Run the back-end using:
On mac AND windows:
```
uvicorn main:app --reload

```
Now if you go to `127.0.0.1:8000` or `localhost:8000` in your browser, you will see the JSON response `{"message":"Hello from FastAPI!"}` and you know the backend is running!

### Run the front-end using:
On mac AND windows:
```
cd frontend
yarn install
yarn start
```
Now if you go to `127.0.0.1:3000` or `localhost:3000` in your browser, you will see the homepage with the JASMIN theming and you know the frontend is running!

### Run back-end tests usng:
On mac AND windows (make sure to have activated your virtual environment):
```
cd backend
pytest
```

### Running the app in a Docker container

Make sure you have installed Docker desktop and have it running.

In a terminal, type the following in the root of the directory (i.e. not in the backend or frontend folders)
```
docker-compose up --build
```
This will build and run the backend at `http://localhost:8000` and the frontend at `http://localhost:3000`.

To stop the app, type:
```
docker-compose down
```