> [!warning] Remember!
> I/O is slow! (compared to a [[CPU - Processor Components|CPU]])

### How does it work?
You get a I/O (Custom) Controller that speaks directly to the device. Take below. All of the devices are connected via a different means (which all have different standards). Thus, we need custom controller to manage all of them with different standards themselves. The [[IO Interface|I/O Interface]] would be the [[RS232]] for example.

![[Screenshot 2023-11-25 at 12.52.40 p.m..png|300]]

### How would you connect I/O Controllers to CPU?: Buses
- A bus is an interface (literally a bundle of wires) that connects the CPU to something else. 
- A portion of [[(Computer) Memory Conceptually|memory]] is reserved for I/O devices. This is [[Memory Mapped IO]]. The problem with this? Well I/O is super slow. 
	- Solution? We're making a *Bus Adapter*. It's a physical thing. It's an interface in-between the IO
	- ![[Screenshot 2023-11-28 at 3.39.29 p.m..png|300]]

### How do we check the I/O Status? (E.G. Key Clicked?):
- **Polling**: Query the OS regularly. It's pretty wasteful for events that happen infrequently
- **Interrupt**: I/O controller interrupts user process to signal an I/O event. (Very heavy) -> But better as it happens less frequently. 

