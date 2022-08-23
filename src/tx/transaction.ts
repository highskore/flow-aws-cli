import * as settings from '../flow.json';
import * as cadut from 'flow-cadut';
import * as fcl from '@onflow/fcl';
import { KmsAuthorizer } from 'fcl-kms-authorizer';
import { fromEnv } from '@aws-sdk/credential-providers';

const { account, key, network } = settings;

fcl.config().put('accessNode.api', network.apiUrl);

export async function send(transaction: string, args: any[] | undefined) {
  const authorizer = new KmsAuthorizer(
    {
      credentials: fromEnv(),
    },
    key.id
  );

  const auth = authorizer.authorize(account, key.index);

  console.log('Sending transaction...\n');

  const [result, err] = await cadut.sendTransaction({
    code: transaction,
    payer: auth,
    signers: [auth],
    proposer: auth,
    args: args,
    limit: 9999,
  });

  if (result) {
    console.log('Succesfuly sent transaction\n');
    console.log('Transaction result:\n', result);
  } else if (err) {
    console.log('Error sending transaction\n');
    throw new Error(err);
  }
}
