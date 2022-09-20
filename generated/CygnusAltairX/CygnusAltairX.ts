// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DeleteChainlinkNebula extends ethereum.Event {
  get params(): DeleteChainlinkNebula__Params {
    return new DeleteChainlinkNebula__Params(this);
  }
}

export class DeleteChainlinkNebula__Params {
  _event: DeleteChainlinkNebula;

  constructor(event: DeleteChainlinkNebula) {
    this._event = event;
  }

  get oracleId(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get lpTokenPair(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get priceFeedA(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get priceFeedB(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get msgSender(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class InitializeChainlinkNebula extends ethereum.Event {
  get params(): InitializeChainlinkNebula__Params {
    return new InitializeChainlinkNebula__Params(this);
  }
}

export class InitializeChainlinkNebula__Params {
  _event: InitializeChainlinkNebula;

  constructor(event: InitializeChainlinkNebula) {
    this._event = event;
  }

  get initialized(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }

  get oracleId(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get lpTokenPair(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get priceFeedA(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get priceFeedB(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class NewOracleAdmin extends ethereum.Event {
  get params(): NewOracleAdmin__Params {
    return new NewOracleAdmin__Params(this);
  }
}

export class NewOracleAdmin__Params {
  _event: NewOracleAdmin;

  constructor(event: NewOracleAdmin) {
    this._event = event;
  }

  get oracleOldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oracleNewAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewOraclePendingAdmin extends ethereum.Event {
  get params(): NewOraclePendingAdmin__Params {
    return new NewOraclePendingAdmin__Params(this);
  }
}

export class NewOraclePendingAdmin__Params {
  _event: NewOraclePendingAdmin;

  constructor(event: NewOraclePendingAdmin) {
    this._event = event;
  }

  get oracleCurrentAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oraclePendingAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CygnusAltairX__assetPricesDaiResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getTokenPriceA(): BigInt {
    return this.value0;
  }

  getTokenPriceB(): BigInt {
    return this.value1;
  }
}

export class CygnusAltairX__getNebulaResult {
  value0: boolean;
  value1: i32;
  value2: Address;
  value3: Address;
  value4: Address;

  constructor(
    value0: boolean,
    value1: i32,
    value2: Address,
    value3: Address,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getInitialized(): boolean {
    return this.value0;
  }

  getOracleId(): i32 {
    return this.value1;
  }

  getUnderlying(): Address {
    return this.value2;
  }

  getPriceFeedA(): Address {
    return this.value3;
  }

  getPriceFeedB(): Address {
    return this.value4;
  }
}

export class CygnusAltairX extends ethereum.SmartContract {
  static bind(address: Address): CygnusAltairX {
    return new CygnusAltairX("CygnusAltairX", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allNebulas(param0: BigInt): Address {
    let result = super.call("allNebulas", "allNebulas(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_allNebulas(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("allNebulas", "allNebulas(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  assetPricesDai(lpTokenPair: Address): CygnusAltairX__assetPricesDaiResult {
    let result = super.call(
      "assetPricesDai",
      "assetPricesDai(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(lpTokenPair)]
    );

    return new CygnusAltairX__assetPricesDaiResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_assetPricesDai(
    lpTokenPair: Address
  ): ethereum.CallResult<CygnusAltairX__assetPricesDaiResult> {
    let result = super.tryCall(
      "assetPricesDai",
      "assetPricesDai(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(lpTokenPair)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CygnusAltairX__assetPricesDaiResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  dai(): Address {
    let result = super.call("dai", "dai():(address)", []);

    return result[0].toAddress();
  }

  try_dai(): ethereum.CallResult<Address> {
    let result = super.tryCall("dai", "dai():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  daiPrice(): BigInt {
    let result = super.call("daiPrice", "daiPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_daiPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("daiPrice", "daiPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getNebula(param0: Address): CygnusAltairX__getNebulaResult {
    let result = super.call(
      "getNebula",
      "getNebula(address):(bool,uint24,address,address,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new CygnusAltairX__getNebulaResult(
      result[0].toBoolean(),
      result[1].toI32(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toAddress()
    );
  }

  try_getNebula(
    param0: Address
  ): ethereum.CallResult<CygnusAltairX__getNebulaResult> {
    let result = super.tryCall(
      "getNebula",
      "getNebula(address):(bool,uint24,address,address,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CygnusAltairX__getNebulaResult(
        value[0].toBoolean(),
        value[1].toI32(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toAddress()
      )
    );
  }

  lpTokenPriceDai(lpTokenPair: Address): BigInt {
    let result = super.call(
      "lpTokenPriceDai",
      "lpTokenPriceDai(address):(uint256)",
      [ethereum.Value.fromAddress(lpTokenPair)]
    );

    return result[0].toBigInt();
  }

  try_lpTokenPriceDai(lpTokenPair: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lpTokenPriceDai",
      "lpTokenPriceDai(address):(uint256)",
      [ethereum.Value.fromAddress(lpTokenPair)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nebulaSize(): i32 {
    let result = super.call("nebulaSize", "nebulaSize():(uint24)", []);

    return result[0].toI32();
  }

  try_nebulaSize(): ethereum.CallResult<i32> {
    let result = super.tryCall("nebulaSize", "nebulaSize():(uint24)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", "pendingAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingAdmin", "pendingAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  version(): i32 {
    let result = super.call("version", "version():(uint8)", []);

    return result[0].toI32();
  }

  try_version(): ethereum.CallResult<i32> {
    let result = super.tryCall("version", "version():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get priceDenominator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeleteNebulaCall extends ethereum.Call {
  get inputs(): DeleteNebulaCall__Inputs {
    return new DeleteNebulaCall__Inputs(this);
  }

  get outputs(): DeleteNebulaCall__Outputs {
    return new DeleteNebulaCall__Outputs(this);
  }
}

export class DeleteNebulaCall__Inputs {
  _call: DeleteNebulaCall;

  constructor(call: DeleteNebulaCall) {
    this._call = call;
  }

  get lpTokenPair(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeleteNebulaCall__Outputs {
  _call: DeleteNebulaCall;

  constructor(call: DeleteNebulaCall) {
    this._call = call;
  }
}

export class InitializeNebulaCall extends ethereum.Call {
  get inputs(): InitializeNebulaCall__Inputs {
    return new InitializeNebulaCall__Inputs(this);
  }

  get outputs(): InitializeNebulaCall__Outputs {
    return new InitializeNebulaCall__Outputs(this);
  }
}

export class InitializeNebulaCall__Inputs {
  _call: InitializeNebulaCall;

  constructor(call: InitializeNebulaCall) {
    this._call = call;
  }

  get lpTokenPair(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get aggregatorA(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get aggregatorB(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeNebulaCall__Outputs {
  _call: InitializeNebulaCall;

  constructor(call: InitializeNebulaCall) {
    this._call = call;
  }
}

export class SetOracleAdminCall extends ethereum.Call {
  get inputs(): SetOracleAdminCall__Inputs {
    return new SetOracleAdminCall__Inputs(this);
  }

  get outputs(): SetOracleAdminCall__Outputs {
    return new SetOracleAdminCall__Outputs(this);
  }
}

export class SetOracleAdminCall__Inputs {
  _call: SetOracleAdminCall;

  constructor(call: SetOracleAdminCall) {
    this._call = call;
  }
}

export class SetOracleAdminCall__Outputs {
  _call: SetOracleAdminCall;

  constructor(call: SetOracleAdminCall) {
    this._call = call;
  }
}

export class SetOraclePendingAdminCall extends ethereum.Call {
  get inputs(): SetOraclePendingAdminCall__Inputs {
    return new SetOraclePendingAdminCall__Inputs(this);
  }

  get outputs(): SetOraclePendingAdminCall__Outputs {
    return new SetOraclePendingAdminCall__Outputs(this);
  }
}

export class SetOraclePendingAdminCall__Inputs {
  _call: SetOraclePendingAdminCall;

  constructor(call: SetOraclePendingAdminCall) {
    this._call = call;
  }

  get newOracleAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOraclePendingAdminCall__Outputs {
  _call: SetOraclePendingAdminCall;

  constructor(call: SetOraclePendingAdminCall) {
    this._call = call;
  }
}
