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
