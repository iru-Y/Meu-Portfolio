import { EnvironmentInterface } from "./interfaces/environment.interface";

export const environment: EnvironmentInterface = {
  apiPath: import.meta.env.NG_APP_API_PATH
};