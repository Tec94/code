@echo off

rem Change directory to venv
cd venv

rem Change directory to Scripts
cd Scripts

rem Activate virtual environment
call activate.bat

rem Change directory back to the original folder twice
cd ..
cd ..

rem Change directory to movie-rec-website
cd movie-recommendation-site

rem Run manage.py runserver
python manage.py runserver