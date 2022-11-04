import NodeCache from 'node-cache';
import { blackListExpire as EXPIRE } from '../config/vars';

const myCache = new NodeCache();

let period = false;

function getCacheStatus(): boolean {
  const cacheStats = myCache.getStats();

  return cacheStats.keys > 0;
}

function getCacheKeys(): Array<string> {
  const listTokens = myCache.keys();
  return listTokens;
}

function delCache(token: string): void {
  myCache.del(token);
}

function setCache(token: string, exp: number): boolean {
  const status = myCache.set(token, exp);
  return status;
}

function getCache(token: string): number {
  const cache = myCache.get(token) as number;
  return cache;
}

function now(): number {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  return currentTimeInSeconds;
}

function validate(token: string) {
  if (!checkToken(token)) delCache(token);
}

function checkPeriod(): void {
  const keys = getCacheKeys();

  period = false;
  keys.forEach(validate);

  const status = getCacheStatus();

  if (status) defineTimeout();
}

function defineTimeout() {
  if (period) return;

  setTimeout(checkPeriod, EXPIRE);
  period = true;
}

export function add(token: string, exp: number): void {
  setCache(token, exp);
  defineTimeout();
}

export function checkToken(token: string): boolean {
  const cacheValue = getCache(token);
  const timestamp = now();

  return cacheValue > timestamp;
}
