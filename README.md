# Work experience 2025

## Repository Structure and information

```
backend/                        # Folder containing the code for the back-end
|-- data/                       # Folder containing the data files
|  |-- gws_data.json            # A JSON data file containing all the GWS information
|  |-- gws_quota.json           # A JSON data file containing the GWS quota information
|--tests/                       # Folder containing the tests for the back-end
|  |-- __init__.py              # Init file makes it a package so we can import from it
|  |-- test_main.py             # A test file for main.py using pytest
|--__init__.py                  # Init file makes it a package so we can import from it
|-- main.py                     # The main back-end code is in here for the API
|-- requirements.txt            # Requirements file for packages we need for the back-end 
frontend/                       # Folder containing the code for the front-end
|-- public/                     # Folder containing react logos - can ignore these
|-- src/                        # Folder containing all source code for the front-end
|  |-- components/              # Folder containing components to go on pages
|  |  |-- fwtheme-react-jasmin  # Folder containing code for the JASMIN branding
|  |-- pages/
|  |-- App.css
|  |-- App.js
|  |-- App.test.js
|  |-- index.cs
|  |-- index.js
|  |-- logo.svg
|  |-- setupTests.js
|-- .gitignore
|-- README.md
|-- package.json
|-- yarn.lock
.gitignore
README.md
```

## Using the program

### Create a venv
```
# On mac:
cd backend
python -m venv env
source env/bin/activate
# On windows:

```

### Install requirements using:
```
# On mac:
pip install -r requirements.txt
# On windows:

```

### Run the back-end using:
```
# On mac:
uvicorn main:app --reload
# On windows:

```

### Run the front-end using:
```
# On mac:
cd frontend
yarn start
# On windows:

```

### Run back-end tests usng:
```
# On mac:
cd backend
pytest
# On windows:

```