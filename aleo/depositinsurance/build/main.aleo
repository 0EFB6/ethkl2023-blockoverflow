program depositinsurance.aleo;

record Funds:
    owner as address.private;
    exchange_address as address.private;
    fund as u64.private;
    premium as u64.private;
    currency_code as u8.private;

record Pool:
    owner as address.private;
    total_deposit_insured as u64.private;
    currency_code as u8.private;


mapping currency_code:
	key as address.public;
	value as u8.public;


mapping fund:
	key as address.public;
	value as u64.public;


mapping premium:
	key as address.public;
	value as u64.public;


mapping total_deposit_insured:
	key as u8.public;
	value as u64.public;

function get_exchange_details:
    input r0 as address.private;
    input r1 as u64.private;
    input r2 as u8.private;
    mul r1 10u64 into r3;
    div r3 100u64 into r4;
    cast aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p r0 r1 r4 r2 into r5 as Funds.record;
    async get_exchange_details self.caller r1 r4 r2 into r6;    output r5 as Funds.record;
    output r6 as depositinsurance.aleo/get_exchange_details.future;

finalize get_exchange_details:
    input r0 as address.public;
    input r1 as u64.public;
    input r2 as u64.public;
    input r3 as u8.public;
    get.or_use currency_code[r0] r3 into r4;
    get.or_use fund[r0] 0u64 into r5;
    add r5 r1 into r6;
    set r6 into fund[r0];
    get.or_use premium[r0] 0u64 into r7;
    add r7 r2 into r8;
    set r8 into premium[r0];


function get_pool_details:
    input r0 as address.private;
    input r1 as Funds.record;
    input r2 as Funds.record;
    input r3 as Funds.record;
    input r4 as u8.private;
    assert.eq r0 aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p;
    assert.eq r1.currency_code r4;
    assert.eq r2.currency_code r4;
    assert.eq r3.currency_code r4;
    add r1.premium r2.premium into r5;
    add r5 r3.premium into r6;
    cast self.caller r6 r4 into r7 as Pool.record;
    async get_pool_details r6 r4 into r8;    output r7 as Pool.record;
    output r8 as depositinsurance.aleo/get_pool_details.future;

finalize get_pool_details:
    input r0 as u64.public;
    input r1 as u8.public;
    get.or_use total_deposit_insured[r1] r0 into r2;
    set r0 into total_deposit_insured[r1];
