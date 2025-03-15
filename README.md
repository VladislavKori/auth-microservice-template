## Auth Service Template - NodeJS(@grpc/grpc-js) + TS + postgresql
The template can be used as a starting point for creating a complete authentication microservice.

the service implements three methods
- ```register```
- ```login```
- ```check```

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