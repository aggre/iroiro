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

export interface CampaignInterfaceV2 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CampaignInterfaceV2;
  clone(): CampaignInterfaceV2;
  methods: {
    campaignInfoCid(): NonPayableTransactionObject<string>;

    campaignToken(): NonPayableTransactionObject<string>;

    claimAmount(): NonPayableTransactionObject<string>;

    claimedNum(): NonPayableTransactionObject<string>;

    endDate(): NonPayableTransactionObject<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    recipientsCid(): NonPayableTransactionObject<string>;

    refundDestination(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    startDate(): NonPayableTransactionObject<string>;

    status(): NonPayableTransactionObject<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    cancelCampaign(): NonPayableTransactionObject<void>;

    refundRemainingTokens(): NonPayableTransactionObject<void>;
  };
  events: {
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
