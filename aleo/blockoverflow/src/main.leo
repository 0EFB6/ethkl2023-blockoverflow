// The 'depositinsurance' program.
program depositinsurance.aleo {
    mapping currency_code: address => u8;
    mapping deposit: address => u64;
    mapping insured_amount: address => u64;

    mapping pool_amount: u8  => u64;

    record Funds {
        owner: address,
        exchange_address: address,
        deposit: u64,
        insured_amount: u64,
        currency_code: u8
    }

    record Pool {
        owner: address,
        total_pool: u64,
        currency_code: u8
    }


    transition add_funds(bank: address, totalDeposit: u64, currency: u8) -> Funds
    {
        let insured: u64 = totalDeposit * 3u64 / 1000u64;

        let funds: Funds = Funds {
            owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p,
            exchange_address: bank,
            deposit: totalDeposit,
            insured_amount: insured,
            currency_code: currency
        };
        return funds then finalize(self.caller, totalDeposit, insured, currency);
    }
    finalize add_funds(addr: address, totalDeposit: u64, insured: u64, currency: u8)
    {
        Mapping::get_or_use(currency_code, addr, currency);

        let current_deposit: u64 = Mapping::get_or_use(deposit, addr, 0u64);
        Mapping::set(deposit, addr ,current_deposit + totalDeposit);
        let current_insured: u64 = Mapping::get_or_use(insured_amount, addr, 0u64);
        Mapping::set(insured_amount, addr ,current_insured + insured);
    }

    transition get_pool_details(manager: address, exchange_a: Funds, exchange_b: Funds, exchange_c: Funds, currency: u8) -> Pool {
        
        // Ensure the caller is the manager & Same Cryptocurrency
        assert_eq(manager, aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p);
        assert_eq(exchange_a.currency_code, currency);
        assert_eq(exchange_b.currency_code, currency);
        assert_eq(exchange_c.currency_code, currency);

        // Calculate total pool for the currenct in Deposit Insurance
        let total_pool: u64 = exchange_a.insured_amount + exchange_b.insured_amount + exchange_c.insured_amount;

        let pool: Pool = Pool {
            owner: self.caller,
            total_pool: total_pool,
            currency_code: currency
        };

        return pool then finalize(total_pool, currency);
    }
    finalize get_pool_details (pool: u64, currency: u8)
    {
        Mapping::get_or_use(pool_amount, currency, pool);
        Mapping::set(pool_amount, currency, pool);
    }


}
