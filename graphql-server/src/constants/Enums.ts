export enum REQ_TYPES {
  GRAPHQL = "graphql-req",
  RESTAPI = "restapi-req",
  SOCKETS = "sockets-req",
}

export enum STATUSCODE {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,

  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type UserRolesEnum = keyof typeof UserRolesEnum;
export const AvailableUserRoles = Object.values(UserRolesEnum);

export const OrderStatusEnum = {
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
} as const;

export type OrderStatusEnum = keyof typeof OrderStatusEnum;
export const AvailableOrderStatuses = Object.values(OrderStatusEnum);

export const PaymentProviderEnum = {
  UNKNOWN: "UNKNOWN",
  RAZORPAY: "RAZORPAY",
  PAYPAL: "PAYPAL",
} as const;

export type PaymentProviderEnum = keyof typeof PaymentProviderEnum;
export const AvailablePaymentProviders = Object.values(PaymentProviderEnum);

export const CouponTypeEnum = {
  FLAT: "FLAT",
} as const;

export type CouponTypeEnum = keyof typeof CouponTypeEnum;
export const AvailableCouponTypes = Object.values(CouponTypeEnum);

export const UserLoginType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
} as const;

export type UserLoginType = keyof typeof UserLoginType;
export const AvailableSocialLogins = Object.values(UserLoginType);

export const YouTubeFilterEnum = {
  MOST_VIEWED: "mostViewed",
  MOST_LIKED: "mostLiked",
  LATEST: "latest",
  OLDEST: "oldest",
} as const;

export type YouTubeFilterEnum = keyof typeof YouTubeFilterEnum;
export const AvailableYouTubeFilters = Object.values(YouTubeFilterEnum);

export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes

export const MAXIMUM_SUB_IMAGE_COUNT = 4;
export const MAXIMUM_SOCIAL_POST_IMAGE_COUNT = 6;

export const paypalBaseUrl = {
  sandbox: "https://api-m.sandbox.paypal.com",
};

export const ChatEventEnum = {
  CONNECTED_EVENT: "connected",
  DISCONNECT_EVENT: "disconnect",
  JOIN_CHAT_EVENT: "joinChat",
  LEAVE_CHAT_EVENT: "leaveChat",
  UPDATE_GROUP_NAME_EVENT: "updateGroupName",
  MESSAGE_RECEIVED_EVENT: "messageReceived",
  NEW_CHAT_EVENT: "newChat",
  SOCKET_ERROR_EVENT: "socketError",
  STOP_TYPING_EVENT: "stopTyping",
  TYPING_EVENT: "typing",
  MESSAGE_DELETE_EVENT: "messageDeleted",
} as const;

export type ChatEventEnum = keyof typeof ChatEventEnum;
export const AvailableChatEvents = Object.values(ChatEventEnum);


export const BullMQ_TOKEN_Enums={
  SEND_NOTIFICATIONS:"send-notifications",
  SEND_AUTH_EMAIL:"send-auth-email"
} as const;
export type BullMQ_TOKEN_Enums = keyof typeof BullMQ_TOKEN_Enums;