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

function getCache(): IBlockedTokensProps {
  const cache: IBlockedTokensProps = myCache.get(KEY) || {blockedTokens: []};
  return cache;
}

export function verifyBlacklist(tokenToVerify: string): boolean {
  const { blockedTokens } = getCache();
  const { length } = blockedTokens;

  for (let i = 0; i < length; i++) {
    if (blockedTokens[i].token === tokenToVerify) {
      return true;
    }
  }

  return false;
}

export function addToBlacklist({token, exp}: IBlacklistProps) {
  const { blockedTokens } = getCache();
  const newBlackListItem = { token, exp };

  blockedTokens.push(newBlackListItem);

  saveCache({ blockedTokens });
}

function onCacheExpire(key: string, { blockedTokens }: IBlockedTokensProps ){
  const nowInSeconds = Date.now() / 1000;

  function checkTime({exp}: IBlacklistProps) {
    return exp > nowInSeconds;
  }

  blockedTokens = blockedTokens.filter(checkTime);

  saveCache({ blockedTokens });
}

myCache.on('expired', onCacheExpire);
