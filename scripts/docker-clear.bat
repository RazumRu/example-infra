@echo off

FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker rm %%i --force
FOR /f "tokens=*" %%i IN ('docker images --format "{{.ID}}"') DO docker rmi %%i --force
FOR /f "tokens=*" %%i IN ('docker volume ls -q') DO docker volume rm %%i
