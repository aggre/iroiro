/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ChainlinkCancelled = ContractEventLog<{
  id: string;
  0: string;
}>;
export type ChainlinkFulfilled = ContractEventLog<{
  id: string;
  0: string;
}>;
export type ChainlinkRequested = ContractEventLog<{
  id: string;
  0: string;
}>;
export type Claim = ContractEventLog<{
  from: string;
  to: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type UpdateStatus = ContractEventLog<{}>;

export interface CCTWalletCampaign extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CCTWalletCampaign;
  clone(): CCTWalletCampaign;
  methods: {
    campaignId(): NonPayableTransactionObject<string>;

    campaignInfoCid(): NonPayableTransactionObject<string>;

    cancelCampaign(): NonPayableTransactionObject<void>;

    claimAmount(): NonPayableTransactionObject<string>;

    claimedNum(): NonPayableTransactionObject<string>;

    claimedUserList(arg0: string): NonPayableTransactionObject<boolean>;

    endDate(): NonPayableTransactionObject<string>;

    nextUserId(): NonPayableTransactionObject<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    recipientsCid(): NonPayableTransactionObject<string>;

    refundDestination(): NonPayableTransactionObject<string>;

    refundRemainingTokens(): NonPayableTransactionObject<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    sentUserList(arg0: string): NonPayableTransactionObject<boolean>;

    startDate(): NonPayableTransactionObject<string>;

    status(): NonPayableTransactionObject<string>;

    token(): NonPayableTransactionObject<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    userIdList(arg0: string): NonPayableTransactionObject<string>;

    userList(arg0: number | string): NonPayableTransactionObject<string>;

    generateClaimKey(
      userId: number | string
    ): NonPayableTransactionObject<string>;

    isClaimable(from: string, to: string): NonPayableTransactionObject<boolean>;

    claim(
      toAddressHash: string | number[],
      r: string | number[],
      s: string | number[],
      v: number | string,
      from: string,
      to: string
    ): NonPayableTransactionObject<void>;

    fulfill(
      _requestId: string | number[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    /**
     * Request to Chainlink whether target address is claimable token Target address usually has no ETH, so another wallet send this function for target address
     */
    requestCheckingIsClaimable(
      _oracle: string,
      _jobId: string | number[],
      targetAddress: string
    ): NonPayableTransactionObject<string>;

    /**
     * Allows the owner to withdraw any LINK balance on the contract
     */
    withdrawLink(): NonPayableTransactionObject<void>;

    /**
     * Call this method if no response is received within 5 minutes
     * @param _callbackFunctionId The bytes4 callback function ID specified for the request to cancel
     * @param _expiration The expiration generated for the request to cancel
     * @param _payment The payment specified for the request to cancel
     * @param _requestId The ID that was generated for the request to cancel
     */
    cancelRequest(
      _requestId: string | number[],
      _payment: number | string,
      _callbackFunctionId: string | number[],
      _expiration: number | string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    ChainlinkCancelled(cb?: Callback<ChainlinkCancelled>): EventEmitter;
    ChainlinkCancelled(
      options?: EventOptions,
      cb?: Callback<ChainlinkCancelled>
    ): EventEmitter;

    ChainlinkFulfilled(cb?: Callback<ChainlinkFulfilled>): EventEmitter;
    ChainlinkFulfilled(
      options?: EventOptions,
      cb?: Callback<ChainlinkFulfilled>
    ): EventEmitter;

    ChainlinkRequested(cb?: Callback<ChainlinkRequested>): EventEmitter;
    ChainlinkRequested(
      options?: EventOptions,
      cb?: Callback<ChainlinkRequested>
    ): EventEmitter;

    Claim(cb?: Callback<Claim>): EventEmitter;
    Claim(options?: EventOptions, cb?: Callback<Claim>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    UpdateStatus(cb?: Callback<UpdateStatus>): EventEmitter;
    UpdateStatus(
      options?: EventOptions,
      cb?: Callback<UpdateStatus>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ChainlinkCancelled", cb: Callback<ChainlinkCancelled>): void;
  once(
    event: "ChainlinkCancelled",
    options: EventOptions,
    cb: Callback<ChainlinkCancelled>
  ): void;

  once(event: "ChainlinkFulfilled", cb: Callback<ChainlinkFulfilled>): void;
  once(
    event: "ChainlinkFulfilled",
    options: EventOptions,
    cb: Callback<ChainlinkFulfilled>
  ): void;

  once(event: "ChainlinkRequested", cb: Callback<ChainlinkRequested>): void;
  once(
    event: "ChainlinkRequested",
    options: EventOptions,
    cb: Callback<ChainlinkRequested>
  ): void;

  once(event: "Claim", cb: Callback<Claim>): void;
  once(event: "Claim", options: EventOptions, cb: Callback<Claim>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "UpdateStatus", cb: Callback<UpdateStatus>): void;
  once(
    event: "UpdateStatus",
    options: EventOptions,
    cb: Callback<UpdateStatus>
  ): void;
}
