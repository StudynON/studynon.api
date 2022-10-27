import NodeCache from 'node-cache';
import {
  blackListKey as KEY,
  blackListExpire
} from '../config/vars';

const myCache = new NodeCache({ checkperiod: blackListExpire });

interface IBlacklistProps {
  token: string;
  exp: number;
}

interface IBlockedTokensProps {
  blockedTokens: Array<IBlacklistProps>;
}

function saveCache(value: IBlockedTokensProps): boolean {
  return myCache.set(KEY, value, blackListExpire);
}

export function getCache(): IBlockedTokensProps {
  const cache: IBlockedTokensProps = myCache.get(KEY) || {blockedTokens: []};
  return cache;
}

export function addToBlacklist({token, exp}: IBlacklistProps) {
  const { blockedTokens } = getCache();
  const newBlackListItem = { token, exp };

  blockedTokens.push(newBlackListItem);

  saveCache({ blockedTokens });

  console.log('Lists:', myCache.keys());

  console.log('cache was saved?:', getCache());
  console.log('cache ttl?:', myCache.getTtl(KEY));
}

function onCacheExpire(key: string, { blockedTokens }: IBlockedTokensProps ){
  const now = Date.now() / 1000;

  blockedTokens = blockedTokens.filter(({exp}: IBlacklistProps) => exp > now);

  console.log('\n*** expired token ***\nEntrou na função', key, blockedTokens);
  console.log('\n*** clear list ***\nlista limpa', blockedTokens);
}

myCache.on('expired', onCacheExpire);
