import { createContext } from "react";

interface ServerFacadeContextInterface {
  get: (path: string, data?: object) => Promise<object>;
  post: (path: string, data: object) => Promise<object>;
}

const ServerFacadeContext = createContext<ServerFacadeContextInterface>({
  get: async () => new Promise(() => null),
  post: async () => new Promise(() => null),
});

export default ServerFacadeContext;
