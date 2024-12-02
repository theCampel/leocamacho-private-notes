> [!note] Guess what...
> I was watching [this](https://www.youtube.com/watch?v=fOGdb1CTu5c) video and they randomly spoke about [[NP Completeness]]...

## What?
Imagine you go to the pub. You (the prover), need to show your I.D. (witness - I know, stupid name) to get served. You show the bartender (the verifier) your I.D. to prove you're over 18. Problem is they learn your birthday, address, etc.. Is there a way to share nothing about yourself, but also a verifier can concretely know for sure you're definitely over 18? In other words:

### Criteria for Zero Knowledge:
1. (Malicious) Prover must definitely know the witness. (I.E. you must provably be over 18, even if the verifier doesn't see it.) (**Proof of Knowledge**)
2. (Malicious) Verifier learns nothing about about the witness. (**Zero Knowledge**)
3. The boring clause: Assuming everyone acts honestly, the system works as intended.


### How?
We sorta tackle criteria 1 and 2 separately. 
1. We interrogate the son of a bitch a crap ton (all questions about the witness). If the prover answers all (read: thousands) of questions successfully, then it worked. 
	1. For example, let's say the witness is how to get from the word SILENT to LISTEN.
	2. We ask the prover how to get from SILENT to TELISN **OR** how to get from TELISN to LISTEN.
	3. If you're able to do that, you must know how to get from SILENT to LISTEN
2. We, as the prover, simulate everything the verifier could ask us. If we simulate it, and it's the same as a real conversation, then we must not have given any information up.  
