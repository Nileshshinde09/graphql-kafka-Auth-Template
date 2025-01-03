import { Queue, Worker } from "bullmq";
import { redisConnection } from "../../db/redis";
import { BullMQ_TOKEN_Enums } from "../../constants/Enums";
import type { BullMQ_TOKEN_Enums as BullMQ_TOKEN_Enums_TYPE  } from "../../constants/Enums";

export const notificationQueue = new Queue(BullMQ_TOKEN_Enums.SEND_NOTIFICATIONS,{
    connection: redisConnection,
});
export const notificationWorker = new Worker(BullMQ_TOKEN_Enums.SEND_NOTIFICATIONS,{
    connection: redisConnection,
});

export const authEmailQueue = new Queue(BullMQ_TOKEN_Enums.SEND_AUTH_EMAIL,{
    connection: redisConnection,
});
export const authEmailWorker = new Worker(BullMQ_TOKEN_Enums.SEND_AUTH_EMAIL,{
    connection: redisConnection,
});