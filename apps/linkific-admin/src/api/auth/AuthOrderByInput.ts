import { SortOrder } from "../../util/SortOrder";

export type AuthOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
