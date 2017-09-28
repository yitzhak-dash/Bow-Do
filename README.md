# Bow-Do
Raphus cucullatus

## docker commands:
build and run docker-compose file:
```cmd
docker-compose up --build -d
```
remove all containers:
```cmd
docker-compose down
```
list all virtual-machines
```cmd
docker-machine ls
```
Connect your shell to the new machine.
```cmd
eval $(docker-machine env YOUR_VM_NAME)
```
Start and stop machines
```cmd
docker-machine stop YOUR_VM_NAME
docker-machine start YOUR_VM_NAME
```
print logs of all running services:
```cmd
docker-compose logs -f -t
```
print logs of your service
```cmd
docker logs YOUR_SERVER_NAME
```

## API DOC
```cmd
apidoc -i src/ -o doc/
```