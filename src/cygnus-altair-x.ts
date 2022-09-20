import { BigInt } from "@graphprotocol/graph-ts"
import {
  CygnusAltairX,
  DeleteChainlinkNebula,
  InitializeChainlinkNebula,
  NewOracleAdmin,
  NewOraclePendingAdmin
} from "../generated/CygnusAltairX/CygnusAltairX"
import { ExampleEntity } from "../generated/schema"

export function handleDeleteChainlinkNebula(
  event: DeleteChainlinkNebula
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.oracleId = event.params.oracleId
  entity.lpTokenPair = event.params.lpTokenPair

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.admin(...)
  // - contract.allNebulas(...)
  // - contract.assetPricesDai(...)
  // - contract.dai(...)
  // - contract.daiPrice(...)
  // - contract.decimals(...)
  // - contract.getNebula(...)
  // - contract.lpTokenPriceDai(...)
  // - contract.name(...)
  // - contract.nebulaSize(...)
  // - contract.pendingAdmin(...)
  // - contract.symbol(...)
  // - contract.version(...)
}

export function handleInitializeChainlinkNebula(
  event: InitializeChainlinkNebula
): void {}

export function handleNewOracleAdmin(event: NewOracleAdmin): void {}

export function handleNewOraclePendingAdmin(
  event: NewOraclePendingAdmin
): void {}
