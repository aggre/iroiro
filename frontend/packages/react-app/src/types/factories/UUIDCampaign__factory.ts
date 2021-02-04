/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UUIDCampaign } from "../UUIDCampaign";

export class UUIDCampaign__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    merkleRoot: BytesLike,
    _campaignToken: string,
    _campaignInfoCid: string,
    _recipientsCid: string,
    _merkleTreeCid: string,
    _claimAmount: BigNumberish,
    _refundDestination: string,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    overrides?: Overrides
  ): Promise<UUIDCampaign> {
    return super.deploy(
      merkleRoot,
      _campaignToken,
      _campaignInfoCid,
      _recipientsCid,
      _merkleTreeCid,
      _claimAmount,
      _refundDestination,
      _startDate,
      _endDate,
      overrides || {}
    ) as Promise<UUIDCampaign>;
  }
  getDeployTransaction(
    merkleRoot: BytesLike,
    _campaignToken: string,
    _campaignInfoCid: string,
    _recipientsCid: string,
    _merkleTreeCid: string,
    _claimAmount: BigNumberish,
    _refundDestination: string,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      merkleRoot,
      _campaignToken,
      _campaignInfoCid,
      _recipientsCid,
      _merkleTreeCid,
      _claimAmount,
      _refundDestination,
      _startDate,
      _endDate,
      overrides || {}
    );
  }
  attach(address: string): UUIDCampaign {
    return super.attach(address) as UUIDCampaign;
  }
  connect(signer: Signer): UUIDCampaign__factory {
    return super.connect(signer) as UUIDCampaign__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUIDCampaign {
    return new Contract(address, _abi, signerOrProvider) as UUIDCampaign;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_campaignToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "_campaignInfoCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_recipientsCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_merkleTreeCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_claimAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundDestination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
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
    inputs: [],
    name: "UpdateStatus",
    type: "event",
  },
  {
    inputs: [],
    name: "campaignInfoCid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "campaignToken",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimedNum",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
  },
  {
    inputs: [],
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
  },
  {
    inputs: [],
    name: "merkleTreeCid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
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
  },
  {
    inputs: [],
    name: "recipientsCid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundDestination",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundRemainingTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum CampaignInterfaceV2.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "hashed",
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
];

const _bytecode =
  "0x60c06040526000600560006101000a81548163ffffffff021916908363ffffffff1602179055506000600860006101000a81548160ff021916908360028111156200004657fe5b02179055503480156200005857600080fd5b50604051620022503803806200225083398181016040526101208110156200007f57600080fd5b81019080805190602001909291908051906020019092919080516040519392919084640100000000821115620000b457600080fd5b83820191506020820185811115620000cb57600080fd5b8251866001820283011164010000000082111715620000e957600080fd5b8083526020830192505050908051906020019080838360005b838110156200011f57808201518184015260208101905062000102565b50505050905090810190601f1680156200014d5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200017157600080fd5b838201915060208201858111156200018857600080fd5b8251866001820283011164010000000082111715620001a657600080fd5b8083526020830192505050908051906020019080838360005b83811015620001dc578082015181840152602081019050620001bf565b50505050905090810190601f1680156200020a5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200022e57600080fd5b838201915060208201858111156200024557600080fd5b82518660018202830111640100000000821117156200026357600080fd5b8083526020830192505050908051906020019080838360005b83811015620002995780820151818401526020810190506200027c565b50505050905090810190601f168015620002c75780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919080519060200190929190805190602001909291905050508789898989888888886000620003146200054560201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508082106200040c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806200222b6025913960400191505060405180910390fd5b86600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560029080519060200190620004659291906200054d565b5084600390805190602001906200047e9291906200054d565b508360048190555082600560046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160068190555080600781905550505050505050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060a08181525050505084600a9080519060200190620005359291906200054d565b50505050505050505050620005fc565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200059057805160ff1916838001178555620005c1565b82800160010185558215620005c1579182015b82811115620005c0578251825591602001919060010190620005a3565b5b509050620005d09190620005d4565b5090565b620005f991905b80821115620005f5576000816000905550600101620005db565b5090565b90565b60805160601c60a051611bfe6200062d600039806107c7528061174d5250806115f752806117d25250611bfe6000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80638d1e55e9116100ad578063b06633fa11610071578063b06633fa14610456578063b14fb496146104a0578063c24a0f8b146105c4578063f2fde38b146105e2578063fc0c546a1461062657610120565b80638d1e55e9146102ef5780638da5cb5b146103725780639089c4a5146103bc578063980e7844146104065780639e34070f1461041057610120565b80632eb4a7ab116100f45780632eb4a7ab146102755780634bbf545b14610293578063715018a6146102bd5780637864e735146102c7578063830953ab146102d157610120565b8062acccbc146101255780630b97bc86146101a85780631736ce44146101c6578063200d2ed214610249575b600080fd5b61012d610670565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016d578082015181840152602081019050610152565b50505050905090810190601f16801561019a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b061070e565b6040518082815260200191505060405180910390f35b6101ce610714565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561020e5780820151818401526020810190506101f3565b50505050905090810190601f16801561023b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102516107b2565b6040518082600281111561026157fe5b60ff16815260200191505060405180910390f35b61027d6107c5565b6040518082815260200191505060405180910390f35b61029b6107e9565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6102c56107ff565b005b6102cf610987565b005b6102d9610cdd565b6040518082815260200191505060405180910390f35b6102f7610ce3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033757808201518184015260208101905061031c565b50505050905090810190601f1680156103645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61037a610d81565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c4610daa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040e610dd0565b005b61043c6004803603602081101561042657600080fd5b8101908080359060200190929190505050611126565b604051808215151515815260200191505060405180910390f35b61045e611178565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105c2600480360360808110156104b657600080fd5b8101908080359060200190929190803590602001906401000000008111156104dd57600080fd5b8201836020820111156104ef57600080fd5b8035906020019184600183028401116401000000008311171561051157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019064010000000081111561057e57600080fd5b82018360208201111561059057600080fd5b803590602001918460208302840111640100000000831117156105b257600080fd5b909192939192939050505061119e565b005b6105cc6113e2565b6040518082815260200191505060405180910390f35b610624600480360360208110156105f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e8565b005b61062e6115f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107065780601f106106db57610100808354040283529160200191610706565b820191906000526020600020905b8154815290600101906020018083116106e957829003601f168201915b505050505081565b60065481565b600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107aa5780601f1061077f576101008083540402835291602001916107aa565b820191906000526020600020905b81548152906001019060200180831161078d57829003601f168201915b505050505081565b600860009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600560009054906101000a900463ffffffff1681565b610807611619565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b61098f611619565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a50576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b4260075410610ac7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43616d706169676e206973206e6f7420656e646564207965740000000000000081525060200191505060405180910390fd5b6002600860006101000a81548160ff02191690836002811115610ae657fe5b02179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610bce57600080fd5b505afa158015610be2573d6000803e3d6000fd5b505050506040513d6020811015610bf857600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610c7257600080fd5b505af1158015610c86573d6000803e3d6000fd5b505050506040513d6020811015610c9c57600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b60045481565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d795780601f10610d4e57610100808354040283529160200191610d79565b820191906000526020600020905b815481529060010190602001808311610d5c57829003601f168201915b505050505081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610dd8611619565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e99576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6006544210610f10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f43616d706169676e20697320616c72656164792073746172746564000000000081525060200191505060405180910390fd5b6001600860006101000a81548160ff02191690836002811115610f2f57fe5b02179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561101757600080fd5b505afa15801561102b573d6000803e3d6000fd5b505050506040513d602081101561104157600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156110bb57600080fd5b505af11580156110cf573d6000803e3d6000fd5b505050506040513d60208110156110e557600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b600080610100838161113457fe5b0490506000610100848161114457fe5b0690506000600960008481526020019081526020016000205490506000826001901b90508081831614945050505050919050565b600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060028111156111ab57fe5b600860009054906101000a900460ff1660028111156111c657fe5b14611239576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f43616d706169676e206973206e6f74206163746976650000000000000000000081525060200191505060405180910390fd5b4260065411156112b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f43616d706169676e206973206e6f74207374617274656420796574000000000081525060200191505060405180910390fd5b6007544210611328576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43616d706169676e2069732066696e697368656400000000000000000000000081525060200191505060405180910390fd5b6113358585858585611621565b6113616001600560009054906101000a900463ffffffff1663ffffffff1661198290919063ffffffff16565b600560006101000a81548163ffffffff021916908363ffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f1836092b86c602f5dc00f47313b2873163879c06590285c6c58d63e208ac746660405160405180910390a35050505050565b60075481565b6113f0611619565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611537576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611b256026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600033905090565b61162a85611126565b15611680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611b9b602e913960400191505060405180910390fd5b60008585856040516020018084815260200183805190602001908083835b602083106116c1578051825260208201915060208101905060208303925061169e565b6001836020036101000a0380198251168184511680821785525050505050509050018281526020019350505050604051602081830303815290604052805190602001209050611772838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050507f000000000000000000000000000000000000000000000000000000000000000083611a16565b6117c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180611b4b6027913960400191505060405180910390fd5b6117d086611ace565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561187757600080fd5b505af115801561188b573d6000803e3d6000fd5b505050506040513d60208110156118a157600080fd5b8101908080519060200190929190505050611907576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611b726029913960400191505060405180910390fd5b7f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed026863386604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050505050565b60008082840190508363ffffffff168163ffffffff161015611a0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008082905060008090505b8551811015611ac0576000868281518110611a3957fe5b60200260200101519050808311611a805782816040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250611ab2565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b508080600101915050611a22565b508381149150509392505050565b60006101008281611adb57fe5b04905060006101008381611aeb57fe5b069050806001901b600960008481526020019081526020016000205417600960008481526020019081526020016000208190555050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373537472696e674d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e537472696e674d65726b6c654469737472696275746f723a205472616e73666572206661696c65642e537472696e674d65726b6c654469737472696275746f723a2044726f7020616c726561647920636c61696d65642ea26469706673582212204fd84c5e6bfbdc638fa1ff93167469c661b4924c916450c9ece7ca995b1592dd64736f6c634300060b003353746172742064617461206d757374206265206c657373207468616e20656e642064617465";
