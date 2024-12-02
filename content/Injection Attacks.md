## What:
Attacker's malicious input is not validated and the server runs it. Think SQLInjection, command injection. 
### Command Injection:
```python
import os

def ping_host(host):
    # Executes the ping command using user input
    command = f"ping -c 4 {host}"
    os.system(command)

```
Could be exploited by:
```python
example.com; rm -rf /
```

### SQL Injection:
```python
import sqlite3

def authenticate_user(username, password):
    # Connect to the database
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Vulnerable query construction
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    cursor.execute(query)
    
    # Fetch the result
    result = cursor.fetchone()
    return result is not None
```

If I provide: 
- ***username:*** `admin' --`
- ***password:*** `anything`

Then the query becomes:
`SELECT * FROM users WHERE username = 'admin' --' AND password = 'anything`
Since -- is the comment, then all of the details will be returned, regardless of if you had the right password. 
`