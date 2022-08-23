#!/usr/bin/env node
import { send } from './tx/transaction';
import * as fs from 'fs';
import * as path from 'path';
import yargs from 'yargs';

const options = yargs
  .version('0.0.1')
  .usage('Usage: -tx <path> -args <args>')
  .option('tx', {
    alias: 'transaction',
    describe: 'path to cadence transaction',
    type: 'string',
    demandOption: true,
  })
  .option('args', {
    alias: 'arguments',
    describe: 'array of transaction arguments, seperated by spaces',
    type: 'array',
    demandOption: false,
  }).argv;

async function main() {
  const txPath = (await options).tx;
  const txArgs = (await options).args;
  let transactionCode = fs.readFileSync(path.join(__dirname, txPath), 'utf8');
  await send(transactionCode, txArgs);
}

main().catch((e) => console.error(e));
