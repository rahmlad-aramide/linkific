import { AuthWhereInput } from "./AuthWhereInput";
import { AuthOrderByInput } from "./AuthOrderByInput";

export type AuthFindManyArgs = {
  where?: AuthWhereInput;
  orderBy?: Array<AuthOrderByInput>;
  skip?: number;
  take?: number;
};
