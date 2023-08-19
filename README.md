# ticket-system

### Dbms setup docker container command (Postgresql)
```
docker run --name postgres-nest -p 8001:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=feedback -d postgres
```