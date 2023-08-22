import React, { ReactElement } from "react";
import ServerFacadeContext from "./server-facade-context";

const requestJson = async (path: string, options?: object): Promise<object> => {
  return await fetch(path, options).then((response) => response.json());
};

const objectToUrlParams = (obj: object): string => {
  const params = Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join("&");
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");

  return `?${params}`;
};

const get = async (path: string, data?: object) => {
  const params = data ? objectToUrlParams(data) : "";
  const pathWithParams = `${path}${params}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await requestJson(pathWithParams, options);
};

const post = async (path: string, data: object): Promise<object> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await requestJson(path, options);
};

interface ServerFacadeProps {
  children: ReactElement | ReactElement[];
}

const ServerFacade = ({ children }: ServerFacadeProps): ReactElement => {
  return (
    <ServerFacadeContext.Provider value={{ get, post }}>
      {children}
    </ServerFacadeContext.Provider>
  );
};

export default ServerFacade;
