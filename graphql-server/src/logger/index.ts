import morganMiddleware from "./morgon.logger";
import winstonLogger from "./winston.logger";
export const logger={winstonLogger,morganMiddleware}