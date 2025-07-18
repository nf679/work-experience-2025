# Work experience 2025

## Repository Structure and information

```
backend/                    # Folder containing the code for the back-end
|-- data/                   # Folder containing the data files
|  |-- gws_data.json        # A JSON data file containing all the GWS information
|  |-- gws_quota.json       # A JSON data file containing the GWS quota information
|--tests/
|  |-- __init__.py
|  |-- test_main.py
|--__init__.py
|-- main.py
|-- requirements.txt
frontend/
|-- public/
|-- src/
|  |-- components/
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