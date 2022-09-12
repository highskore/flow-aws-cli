# Flow AWS CLI - FAC

This little tool allows you to send Flow transactions authorized by AWS KMS through the CLI,
at the time of creation of this repo, this specific feature is not supported by the official flow-cli (https://github.com/onflow/flow-cli)

## Installation

To install the FAC, clone this library and then run the following command:

```
npm run install-fac
```

After installation is complete cd into the lib directory and setup your _flow.json_ file:

```
{
  "account": "0x1dc3423b06f38a25", // Your account name
  "network": {
    "apiUrl": "https://access-testnet.onflow.org" // The Flow Access Node API URL
  },
  "key": { // AWS KMS Information
    "region": "eu-central-1", // The key's region
    "id": "1a32c3d-230d-421f8-123d-3a1btx5z32", // The key's id
    "index": 0 // The index of the key on the account
  }
}
```

Once you've setup your *flow.json* file, make sure to initialize the AWS KMS ENV variablies:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html?icmpid=docs_sso_user_portal

## Features

```
Usage:
  fac --tx <path> --args <args>

Options:
  --help               Show help                                                  [boolean]
  --version            Show version number                                        [boolean]
  --tx, --transaction  path to cadence transaction                      [string] [required]
  --args, --arguments  array of transaction arguments, seperated by spaces          [array]                  
```

## Credits

This library uses the fcl-kms-authorizer (https://github.com/doublejumptokyo/fcl-kms-authorizer)
