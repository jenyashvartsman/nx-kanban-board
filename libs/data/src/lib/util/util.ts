import * as crypto from 'crypto';

export const uuid = (): string => {
  return crypto.randomUUID();
};

export const now = (): Date => {
  return new Date();
};
