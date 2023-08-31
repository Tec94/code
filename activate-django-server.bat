@echo off

rem Change directory to venv
cd C:\Users\caoda\Desktop\coding\venv

rem Change directory to Scripts
cd C:\Users\caoda\Desktop\coding\venv\Scripts

rem Change directory back to the original folder twice
cd ..
cd ..

rem Change directory to movie-rec-website
cd C:\Users\caoda\Desktop\coding\movie-rec-website

rem Run manage.py runserver
python manage.py runserver