# Overview (Deposit Insurance System (DIS))
- Need to collect insured deposit from DEX
- Need to store paid DEX onchain
- Display money backing the PIDM
- Staking some percentage of funds

## Coding Ideas
- use event and detect event with ether.js

## Features (* = done)
- pay premium (annually) 
- check DIS total fund 
- claim insurance (some validation mechanism will be done on/offchain or by profesional analyst to ensure DEX is valid to claim)
  - can only be call by owner
- check insured DEX info
- set insured DEX info 


## Flow (All percentage are temporary)
1. DIS collect 10 percent premium annually from exchange's total funds
2. When an exchange face any problem we will insure the total fund lost the second a huge lost is detect (Max cap is 25% of the DIS's total fund which is contributed from multiple DEX)
3. 50% of the fund is use to stake on ethereum chain to mine eth as a validator (If we decided to store premium as stable coin we will convert/bridge 50% to eth for staking)
4. 