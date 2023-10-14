// The 'depositinsurance' program.
program depositinsurance.aleo {
    // Mapping for the Crypto Exchange
    mapping currency_code: address => u8;
    mapping fund: address => u64;
    mapping premium: address => u64;

    // Mapping for us, the Web 3 Deposit Insurance
    mapping total_deposit_insured: u8  => u64;

    // Record of the Funds for each Exchange (according to currency)
    record Funds {
        owner: address,
        exchange_address: address,
        fund: u64,
        premium: u64,
        currency_code: u8
    }

    // Record for the Web 3 Deposit Insurance Pool (premium collected from the exchanges)
    record Pool {
        owner: address,
        total_deposit_insured: u64,
        currency_code: u8
    }

    // Transition to get the details of the exchange, cryptocurrency etc. to the Deposit Insurance
    transition get_exchange_details(exchange: address, totalDeposit: u64, currency: u8) -> Funds{
        let insured: u64 = totalDeposit * 3u64 / 1000u64;

        let funds: Funds = Funds {
            owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p,
            exchange_address: exchange,
            fund: totalDeposit,
            premium: insured,
            currency_code: currency
        };
        return funds then finalize(self.caller, totalDeposit, insured, currency);
    }
    // Finalize the currency code, fund & premium and store it on chain
    finalize add_funds(addr: address, totalDeposit: u64, insured: u64, currency: u8)
    {
        Mapping::get_or_use(currency_code, addr, currency);

        let current_deposit: u64 = Mapping::get_or_use(fund, addr, 0u64);
        Mapping::set(fund, addr ,current_deposit + totalDeposit);
        let current_insured: u64 = Mapping::get_or_use(premium, addr, 0u64);
        Mapping::set(premium, addr ,current_insured + insured);
    }

    // Transition to get the details of the amount of deposit insured in the Web 3 Deposit Insurance and type of cryptocurrency
    transition get_pool_details(manager: address, exchange_a: Funds, exchange_b: Funds, exchange_c: Funds, currency: u8) -> Pool {
        
        // Ensure the caller is the manager & Same Cryptocurrency
        assert_eq(manager, aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p);
        assert_eq(exchange_a.currency_code, currency);
        assert_eq(exchange_b.currency_code, currency);
        assert_eq(exchange_c.currency_code, currency);

        // Calculate total pool for the currenct in Deposit Insurance
        let deposit_insured: u64 = exchange_a.premium + exchange_b.premium + exchange_c.premium;

        let pool: Pool = Pool {
            owner: self.caller,
            total_deposit_insured: deposit_insured,
            currency_code: currency
        };

        return pool then finalize(deposit_insured, currency);
    }
    // Finalize the currenct & total_deposit_insured and store it on chain
    finalize get_pool_details (insured_amount: u64, currency: u8)
    {
        Mapping::get_or_use(total_deposit_insured, currency, insured_amount);
        Mapping::set(total_deposit_insured, currency, insured_amount);
    }
}
