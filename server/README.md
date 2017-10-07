run db server:
```cmd
pg_ctl -D /usr/local/var/postgres start
```
**you should enable PostGIS:**
go to psql, connect to your database and run:
```cmd
CREATE EXTENSION postgis;
``` 

**create user:**
```cmd
psql -c "CREATE USER bowdo WITH PASSWORD 'Aa123';"
```
**create db:**
```cmd
$ psql -U postgres postgres -f ./db_create.sql
```
**drop db:**
```cmd
dropdb bowdo_db
```
