# Apprendredocker

# Lancer une image

```linux
docker run image-name
```

## Nommer un container
```linux
docker run --name container-name image-name
```

## lancer un programme depuis un container
```linux
docker run image-name program
docker run ubuntu ls
```
ou 

```linux
docker run --name container-name image-name
docker exec container-name programm
docker run -name my-ubuntu ubuntu
docker exec my-ubuntu ls
```

## Accèder un un cli dans un container
```linux
docker exec -it container-name programm
docker exec -it my-ubuntu bash
docker exec -it my-ubuntu python3
```
## Container in the same network
```linux
docker run --network host image-name
```
## Remove docker image
```
docker image rm image-name
docker image rm image-id
```

## Remove docker container
```
docker rm container-name
docker rm container-id
```
## Remove all docker containers
```
docker rm $(docker ps -aq)
```
