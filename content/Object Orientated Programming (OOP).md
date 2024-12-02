## What:
It's all about ***APIE***:
- **Abstraction**
- **Polymorphism**
- **Inheritance**
- **[[Encapsulation]]**

It's a way of programming based on **objects**. Objects can contain *attributes* or *properties*, or actions (*functions* or *methods*). For example:
- A computer monitor has attributes of screen size.

### Abstraction:
Only show the relevant stuff to the **user of *that object***. EG: When the user wants to turn on the monitor, they likely won't care about refresh rate. They should only be able to see the power button. **Decoupling** is crucial. 

Below, the class `Payment` is simply outlining the different functionality it should have, but leaves the implementation to the subclasses. 

```python
from abc import ABC, abstractmethod

# Abstract class
class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        """Process the payment of the given amount"""
        pass

    @abstractmethod
    def refund(self, amount):
        """Process the refund of the given amount"""
        pass

# Concrete class for Credit Card payments
class CreditCardPayment(Payment):
    def __init__(self, card_number, card_holder_name):
        self.card_number = card_number
        self.card_holder_name = card_holder_name

    def pay(self, amount):
        # Simulate credit card payment processing
        print(f"Processing credit card payment of ${amount} for {self.card_holder_name}")
    
    def refund(self, amount):
        # Simulate refund to the credit card
        print(f"Refunding ${amount} to credit card {self.card_number}")

# Concrete class for PayPal payments
class PayPalPayment(Payment):
    def __init__(self, email):
        self.email = email

    def pay(self, amount):
        # Simulate PayPal payment processing
        print(f"Processing PayPal payment of ${amount} for {self.email}")
    
    def refund(self, amount):
        # Simulate refund to PayPal account
        print(f"Refunding ${amount} to PayPal account {self.email}")

# Client code using abstraction
def process_payment(payment_method: Payment, amount):
    payment_method.pay(amount)

def process_refund(payment_method: Payment, amount):
    payment_method.refund(amount)

# Example usage
credit_card = CreditCardPayment("1234 5678 9012 3456", "Alice Smith")
paypal = PayPalPayment("alice@example.com")

# Process payments using different methods
process_payment(credit_card, 100)     # Output: Processing credit card payment of $100 for Alice Smith
process_payment(paypal, 200)          # Output: Processing PayPal payment of $200 for alice@example.com
```

### Inheritance
Allows a *child class* to inherit attributes and methods from a *parent class*. Inheritance follows the ***is-a*** relationship, for example: *A Dog **is-a** Animal*

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):  # Dog inherits from Animal
    def make_sound(self):
        print(f"{self.name} barks")

dog = Dog("Buddy")
dog.make_sound()  # Output: Buddy barks

```


### Polymorphism
This refers to a different objects reacting to the same method call in different ways. If you have a big, general class with general functions and specific child classes with more specifically implemented functions, polymorphism allows the specific ones to override the general ones. Hard to explain, but the Java code should explain it better.

```java
// Superclass: Animal
class Animal {
    // Method to be overridden in subclasses
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
    
    // Method overloading: Different versions of the same method
    public void sleep() {
        System.out.println("Animal sleeps for an unknown amount of time");
    }

    public void sleep(int hours) {
        System.out.println("Animal sleeps for " + hours + " hours");
    }

    public void sleep(int hours, String location) {
        System.out.println("Animal sleeps for " + hours + " hours at " + location);
    }
}

// Subclass: Dog
class Dog extends Animal {
    // Overriding makeSound method
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

// Subclass: Cat
class Cat extends Animal {
    // Overriding makeSound method
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphism: Using the superclass type to refer to subclass objects
        Animal myDog = new Dog();  // Dog object
        Animal myCat = new Cat();  // Cat object

        // Method overriding: Same method call results in different behavior
        myDog.makeSound();  // Output: Dog barks
        myCat.makeSound();  // Output: Cat meows

        // Method overloading: Same method name with different parameters
        Animal genericAnimal = new Animal();
        
        genericAnimal.sleep();  // Output: Animal sleeps for an unknown amount of time
        genericAnimal.sleep(8);  // Output: Animal sleeps for 8 hours
        genericAnimal.sleep(6, "the barn");  // Output: Animal sleeps for 6 hours at the barn
    }
}

```

### Encapsulation
The idea of bundling attributes and functions into single classes, as well as restricting access to certain methods / attributes. The goal is to hide the inner workings, and only expose what is needed. 


PS: It's a crucial concept that University failed to properly teach me 😔 because of damn strikes.