> [!note] What?
> A type of vinyl-like memory, where you have a spinning magnetic disc with an arm and a head. These are still terrible though, and getting phased out for [[Flash SSD|SSDs]].
> 
> ![[Screenshot 2023-12-15 at 1.19.32 p.m..png|500]]

### Performance (Hint: Terrible):
There's 2 parts to it: The amount of time it takes the head to get into position and the amount of time it takes for the data to actually be read/written.

1. ***Access Time***: `access_time = seek_time + rotational_latency`
	- *Seek Time*: Time it takes for the arm to swing to the right track
	- *Rotational Latency:* Time to until the  appropriate sector gets underneath your head. 
2. ***Transfer Time***: `transfer_time = time_to_transfer_1_byte * number_of_bytes`
	- Depends on both spinning speed and recording density

### How does the Disk know what to read? *Disk Controller* (Still terrible performance):
	Note: To read lots of data, you perform lots of interrupts (I.E. lots of unncessary CPU ops)
1. User program requests data from file
2. OS determines the disk sector to be accessed
3. OS Disk issues `Seek` command. [[CPU - Processor Components|CPU]] multitasks on something else.
4. [[IO|I/O]] controller [[IO|interrupts]] CPU to signal completion of `seek`
5. OS Disk handler issues `Read Sector`
6. [[IO|I/O]] controller [[IO|interrupts]] CPU to signal completion of `Read Sector`
7. OS Disk handler transfers sector data from disk controller to memory
	- This is a slow loop that transfers data *word-for-word* via [[Buses (Circuits)]]
8. Go to Steps 3 or 5 until it's complete. 

### Faster Solution: *Direct Memory Access Controller*
- A device that sits on the [[Buses (Circuits)|memory bus]] and can independently transfer data between memory and disk. 