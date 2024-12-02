## What
Unlike [[Object Orientated Programming (OOP)|OOP]], IOP or Protocol-Oriented Programming, is the focus on defining and interacting with ***interfaces*** (aka contracts). They define **what** a class or object should do, but not **how** it does it (similar to a contract).

```java
// Interface
interface Animal {
    void makeSound();
}

// Implementing the interface
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}
```

