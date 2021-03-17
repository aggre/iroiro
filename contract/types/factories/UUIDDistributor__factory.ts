/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UUIDDistributor } from "../UUIDDistributor";

export class UUIDDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): Promise<UUIDDistributor> {
    return super.deploy(
      _distributorInfoCid,
      overrides || {}
    ) as Promise<UUIDDistributor>;
  }
  getDeployTransaction(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_distributorInfoCid, overrides || {});
  }
  attach(address: string): UUIDDistributor {
    return super.attach(address) as UUIDDistributor;
  }
  connect(signer: Signer): UUIDDistributor__factory {
    return super.connect(signer) as UUIDDistributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUIDDistributor {
    return new Contract(address, _abi, signerOrProvider) as UUIDDistributor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_distributorInfoCid",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "merkleTreeCid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "campaignInfoCid",
        type: "string",
      },
    ],
    name: "CreateCampaign",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "UpdateDistributorInfo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "newMerkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "addDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "target",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "distributionMap",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "nextDistributionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "remainingAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "distributorInfoCid",
        type: "string",
      },
    ],
    name: "updateDistributorInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "token",
        type: "address",
      },
      {
        internalType: "string",
        name: "merkleTreeCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "campaignInfoCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055503480156200003b57600080fd5b506040516200183738038062001837833981810160405260208110156200006157600080fd5b81019080805160405193929190846401000000008211156200008257600080fd5b838201915060208201858111156200009957600080fd5b8251866001820283011164010000000082111715620000b757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000ed578082015181840152602081019050620000d0565b50505050905090810190601f1680156200011b5780820380516001836020036101000a031916815260200191505b50604052505050806000620001356200027a60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3507f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae816040518080602001828103825283818151815260200191508051906020019080838360005b83811015620002375780820151818401526020810190506200021a565b50505050905090810190601f168015620002655780820380516001836020036101000a031916815260200191505b509250505060405180910390a1505062000282565b600033905090565b6115a580620002926000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063c9d8be3a11610066578063c9d8be3a14610415578063cc0a56f814610517578063cebce72d14610563578063f2fde38b146105c5576100cf565b80638da5cb5b14610319578063b224f6991461034d578063bc94dca6146103a5576100cf565b8063298d81d9146100d45780635fdeeee3146101ca578063715018a61461024357806375ecbb891461024d578063795be4b9146102a55780638283ba96146102cd575b600080fd5b6101c8600480360360a08110156100ea57600080fd5b81019080803567ffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012557600080fd5b82018360208201111561013757600080fd5b8035906020019184600183028401116401000000008311171561015957600080fd5b9091929391929390803590602001909291908035906020019064010000000081111561018457600080fd5b82018360208201111561019657600080fd5b803590602001918460208302840111640100000000831117156101b857600080fd5b9091929391929390505050610609565b005b610241600480360360208110156101e057600080fd5b81019080803590602001906401000000008111156101fd57600080fd5b82018360208201111561020f57600080fd5b8035906020019184600183028401116401000000008311171561023157600080fd5b90919293919293905050506109a8565b005b61024b610abe565b005b61028d6004803603604081101561026357600080fd5b81019080803567ffffffffffffffff16906020019092919080359060200190929190505050610c2b565b60405180821515815260200191505060405180910390f35b6102ad610c99565b604051808267ffffffffffffffff16815260200191505060405180910390f35b610303600480360360208110156102e357600080fd5b81019080803567ffffffffffffffff169060200190929190505050610cb3565b6040518082815260200191505060405180910390f35b610321610ce7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103a36004803603606081101561036357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610d10565b005b6103db600480360360208110156103bb57600080fd5b81019080803567ffffffffffffffff169060200190929190505050610f13565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b610515600480360360a081101561042b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561047257600080fd5b82018360208201111561048457600080fd5b803590602001918460018302840111640100000000831117156104a657600080fd5b9091929391929390803590602001906401000000008111156104c757600080fd5b8201836020820111156104d957600080fd5b803590602001918460018302840111640100000000831117156104fb57600080fd5b909192939192939080359060200190929190505050610f5d565b005b61054d6004803603602081101561052d57600080fd5b81019080803567ffffffffffffffff169060200190929190505050611057565b6040518082815260200191505060405180910390f35b6105996004803603602081101561057957600080fd5b81019080803567ffffffffffffffff16906020019092919050505061108b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610607600480360360208110156105db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110df565b005b6106138787610c2b565b15610669576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806115046028913960400191505060405180910390fd5b6000600160008967ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020905080600201548411156106f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114de6026913960400191505060405180910390fd5b6000868660405160200180838380828437808301925050509250505060405160208183030381529060405280519060200120905060008882876040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506107b0858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508460010154836112d1565b610805576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061152c6021913960400191505060405180910390fd5b61080f8a8a611386565b8583600201540383600201819055508260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33886040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156108b357600080fd5b505af11580156108c7573d6000803e3d6000fd5b505050506040513d60208110156108dd57600080fd5b8101908080519060200190929190505050610943576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061154d6023913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168a67ffffffffffffffff167ff20fc6923b8057dd0c3b606483fcaa038229bb36ebc35a0040e3eaa39cf97b17886040518082815260200191505060405180910390a350505050505050505050565b6109b0611413565b73ffffffffffffffffffffffffffffffffffffffff166109ce610ce7565b73ffffffffffffffffffffffffffffffffffffffff1614610a57576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b7f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae828260405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a15050565b610ac6611413565b73ffffffffffffffffffffffffffffffffffffffff16610ae4610ce7565b73ffffffffffffffffffffffffffffffffffffffff1614610b6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000806101008381610c3957fe5b04905060006101008481610c4957fe5b0690506000600260008767ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205490506000826001901b9050808183161494505050505092915050565b600060149054906101000a900467ffffffffffffffff1681565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600201549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060405180606001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815250905080600160008060149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155905050610e146001600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff1661141b90919063ffffffff16565b600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060008490508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610ed057600080fd5b505af1158015610ee4573d6000803e3d6000fd5b505050506040513d6020811015610efa57600080fd5b8101908080519060200190929190505050505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff167f6fe3b4268dcb7962585e4f5c46d2255e248c49ab91565a0eec2c4e4889ceafb6888888886040518080602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a461104e868883610d10565b50505050505050565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600101549050919050565b6000600160008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6110e7611413565b73ffffffffffffffffffffffffffffffffffffffff16611105610ce7565b73ffffffffffffffffffffffffffffffffffffffff161461118e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611214576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114b86026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082905060005b85518110156113785760008682815181106112f157fe5b60200260200101519050808311611338578281604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120925061136a565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b5080806001019150506112da565b508381149150509392505050565b6000610100828161139357fe5b049050600061010083816113a357fe5b069050806001901b600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205417600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555050505050565b600033905090565b60008082840190508367ffffffffffffffff168167ffffffffffffffff1610156114ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d65726b6c654469737472696275746f723a20496e73756666696369656e7420746f6b656e2e4d65726b6c654469737472696275746f723a2044726f7020616c726561647920636c61696d65642e4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e4d65726b6c654469737472696275746f723a205472616e73666572206661696c65642ea2646970667358221220984f660a470f6216bdc9c883f0d3d9276b3a9ad242631ba4250b10aae299215c64736f6c63430007060033";
