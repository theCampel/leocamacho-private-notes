## Arithmetic Overflow
In a similar vain to [[Buffer Overflow Attack]], thanks to [[2s Complement Representation]], if you add 1 to $\infty$ you get $-\infty$. 

### Example:
```cpp title:"Arithmetic Overflow" 
int catvars(char *buf1, char *buf2,
            unsigned int len1, unsigned int len2) {
    char mybuf[256];
    if ((len1 + len2) > 256) {
        return -1;
    }
    memcpy(mybuf, buf1, len1);
    memcpy(mybuf + len1, buf2, len2);
    do_some_stuff(mybuf);
    return 0;
}
```
