import type { Server, Socket } from "socket.io";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { User } from "./models/User";
import { ApiError } from "../../lib";
import { ChatEventEnum, STATUSCODE } from "../../constants/Enums";

interface DecodedToken {
  _id: string;
}

interface ExtendedSocket extends Socket {
  user?: {
    _id: string;
    [key: string]: any;
  };
}

const initializeSocketIO = (io: Server): void => {
  io.on("connection", async (socket: ExtendedSocket) => {
    try {
      // Parse the cookies from the handshake headers
      const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

      let token = cookies?.accessToken; // Get the access token

      if (!token) {
        // If no access token in cookies, check handshake auth
        token = socket.handshake.auth?.token;
      }

      if (!token) {
        throw ApiError.SocketIOError(
          io,
          STATUSCODE.UNAUTHORIZED,
          "Unauthorized handshake. Token is missing."
        );
      }

      // Verify and decode the token
      const decodedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET!
      ) as DecodedToken;

      // Retrieve the user
      const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
      );

      if (!user) {
        throw ApiError.SocketIOError(
          io,
          STATUSCODE.UNAUTHORIZED,
          "Unauthorized handshake. Token is invalid."
        );
      }

      socket.user = user; // Attach user object to the socket

      // Join a room with the user ID for targeted events
      socket.join(user._id.toString());
      socket.emit(ChatEventEnum.CONNECTED_EVENT); // Notify client of successful connection
      console.log("User connected. UserID:", user._id.toString());

      // Mount event handlers

      socket.on(ChatEventEnum.DISCONNECT_EVENT, () => {
        console.log("User disconnected. UserID:", socket.user?._id);
        if (socket.user?._id) {
          socket.leave(socket.user._id.toString());
        }
      });
    } catch (error: any) {
      socket.emit(
        ChatEventEnum.SOCKET_ERROR_EVENT,
        error?.message || "An error occurred while connecting to the socket."
      );
    }
  });
};

/**
 * Utility function to emit socket events.
 * @param req Express request object containing the `io` instance.
 * @param roomId Room to emit the event to.
 * @param event Event name to emit.
 * @param payload Data to send with the event.
 */
const emitSocketEvent = (
  req: Express.Request,
  roomId: string,
  event: string,
  payload: any
): void => {
  const io = req.app.get("io") as Server;
  io.in(roomId).emit(event, payload);
};

export { initializeSocketIO, emitSocketEvent };
