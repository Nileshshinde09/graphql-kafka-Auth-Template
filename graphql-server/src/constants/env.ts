interface AUTH_TOKENS {
  REFRESH_TOKEN_SECRET: string;
  ACCESS_TOKEN_SECRET: string;
  ACCESS_TOKEN_EXPIRY: string;
  REFRESH_TOKEN_EXPIRY: string;
}
export const REDIS_HOST:string = String(process.env.REDIS_HOST)
export const REDIS_PORT:number = Number(process.env.REDIS_PORT)
export const JWT_SECRET: string = String(process.env.JWT_SECRET);
export const AUTH_TOKENS: AUTH_TOKENS = {
  REFRESH_TOKEN_SECRET: String(process.env.REFRESH_TOKEN_SECRET),
  ACCESS_TOKEN_SECRET: String(process.env.ACCESS_TOKEN_SECRET),
  ACCESS_TOKEN_EXPIRY: String(process.env.ACCESS_TOKEN_EXPIRY),
  REFRESH_TOKEN_EXPIRY: String(process.env.REFRESH_TOKEN_EXPIRY),
};
