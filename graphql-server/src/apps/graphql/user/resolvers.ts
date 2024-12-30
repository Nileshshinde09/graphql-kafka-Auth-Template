// import { UserService } from "../../services";

 class Resolvers{
    public static queries={
            hello: () => "Hello, World!", // Returns a static string
    }
    public static mutations={
        setMessage: (_:any, { message }:{message:string}, context:any) => {
            // Store the message in context (or any in-memory store)
            context.message = message;
            return `Message received: ${message}`;
        },
    }
}

export default Resolvers;
