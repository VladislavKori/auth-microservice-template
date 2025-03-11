## Auth Service Template - NodeJS(fastify) + TS + postgresql
The template can be used as a starting point for creating a complete authentication microservice.

the service implements three http routes
- ```POST /v1/register```
- ```POST /v1/login```
- ```GET /v1/check```

The service utilizes a minimum required database schema that includes fields: 
- ```id``` (unique user ID)
- ```email``` (user's email address)
- ```password``` (hashed user password)

Query for creating a minimum required sql table:
```sql
create table [name] (
    id serial primary key, 
    email varchar(255) unique, 
    password text
); 
```