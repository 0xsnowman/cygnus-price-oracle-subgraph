import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  DeleteChainlinkNebula,
  InitializeChainlinkNebula,
  NewOracleAdmin,
  NewOraclePendingAdmin
} from "../generated/CygnusAltairX/CygnusAltairX"

export function createDeleteChainlinkNebulaEvent(
  oracleId: i32,
  lpTokenPair: Address,
  priceFeedA: Address,
  priceFeedB: Address,
  msgSender: Address
): DeleteChainlinkNebula {
  let deleteChainlinkNebulaEvent = changetype<DeleteChainlinkNebula>(
    newMockEvent()
  )

  deleteChainlinkNebulaEvent.parameters = new Array()

  deleteChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "oracleId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(oracleId))
    )
  )
  deleteChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "lpTokenPair",
      ethereum.Value.fromAddress(lpTokenPair)
    )
  )
  deleteChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "priceFeedA",
      ethereum.Value.fromAddress(priceFeedA)
    )
  )
  deleteChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "priceFeedB",
      ethereum.Value.fromAddress(priceFeedB)
    )
  )
  deleteChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam("msgSender", ethereum.Value.fromAddress(msgSender))
  )

  return deleteChainlinkNebulaEvent
}

export function createInitializeChainlinkNebulaEvent(
  initialized: boolean,
  oracleId: i32,
  lpTokenPair: Address,
  priceFeedA: Address,
  priceFeedB: Address
): InitializeChainlinkNebula {
  let initializeChainlinkNebulaEvent = changetype<InitializeChainlinkNebula>(
    newMockEvent()
  )

  initializeChainlinkNebulaEvent.parameters = new Array()

  initializeChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "initialized",
      ethereum.Value.fromBoolean(initialized)
    )
  )
  initializeChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "oracleId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(oracleId))
    )
  )
  initializeChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "lpTokenPair",
      ethereum.Value.fromAddress(lpTokenPair)
    )
  )
  initializeChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "priceFeedA",
      ethereum.Value.fromAddress(priceFeedA)
    )
  )
  initializeChainlinkNebulaEvent.parameters.push(
    new ethereum.EventParam(
      "priceFeedB",
      ethereum.Value.fromAddress(priceFeedB)
    )
  )

  return initializeChainlinkNebulaEvent
}

export function createNewOracleAdminEvent(
  oracleOldAdmin: Address,
  oracleNewAdmin: Address
): NewOracleAdmin {
  let newOracleAdminEvent = changetype<NewOracleAdmin>(newMockEvent())

  newOracleAdminEvent.parameters = new Array()

  newOracleAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oracleOldAdmin",
      ethereum.Value.fromAddress(oracleOldAdmin)
    )
  )
  newOracleAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oracleNewAdmin",
      ethereum.Value.fromAddress(oracleNewAdmin)
    )
  )

  return newOracleAdminEvent
}

export function createNewOraclePendingAdminEvent(
  oracleCurrentAdmin: Address,
  oraclePendingAdmin: Address
): NewOraclePendingAdmin {
  let newOraclePendingAdminEvent = changetype<NewOraclePendingAdmin>(
    newMockEvent()
  )

  newOraclePendingAdminEvent.parameters = new Array()

  newOraclePendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oracleCurrentAdmin",
      ethereum.Value.fromAddress(oracleCurrentAdmin)
    )
  )
  newOraclePendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oraclePendingAdmin",
      ethereum.Value.fromAddress(oraclePendingAdmin)
    )
  )

  return newOraclePendingAdminEvent
}
