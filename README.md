# Run project

## First way to run project (Docker)

### 1 step

Install Docker

### 2 step `run command `

You should comment part "frontend" in docker-compose.yml file

Run `docker compose up` in project home directory where docker-compose.yml file is located

## Secons way to run project ?????????

### 1 step

Install Docker

### 2 step `run command `

You should comment part "frontend" in docker-compose.yml with "image"
and uncomment with "build"

Run `docker compose up` in project home directory where docker-compose.yml file is located

# Comunicate with program

Connect to Backend from browser - http://localhost:8080/api/hello

Connect to Website from browser - http://localhost:3000/

# How build to Docker

https://docs.docker.com/get-started/09_image_best/

npm run build

docker build -t 66567575/uf767fg767yyu .
