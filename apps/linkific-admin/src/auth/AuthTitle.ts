import { Auth as TAuth } from "../api/auth/Auth";

export const AUTH_TITLE_FIELD = "username";

export const AuthTitle = (record: TAuth): string => {
  return record.username?.toString() || String(record.id);
};
