
### Rules:
In the following, A and B are *boolean variables*, being either `1` or `0`.

**Read**: 
- `+` as `OR` 
- `.` as `AND` 
- `'` as `NOT`. 

| Name                | Expression                                       |
|---------------------|--------------------------------------------------|
| Identity Law        | A + 0 = A, A . 1 = A                             |
| Null Law            | A + 1 = 1, A . 0 = 0                             |
| Idempotent Law      | A + A = A, A . A = A                             |
| Inverse Law         | A + A' = 1, A . A' = 0                           |
| Commutative Law     | A + B = B + A, A . B = B . A                     |
| Associative Law     | (A + B) + C = A + (B + C), (A . B) . C = A . (B . C) |
| Distributive Law    | A . (B + C) = A . B + A . C, A + (B . C) = (A + B) . (A + C) |
| Absorption Law      | A + (A . B) = A, A . (A + B) = A                 |
| De Morgan's Theorem | (A + B)' = A' . B', (A . B)' = A' + B'           |

