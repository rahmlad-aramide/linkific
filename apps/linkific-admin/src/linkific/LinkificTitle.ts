import { Linkific as TLinkific } from "../api/linkific/Linkific";

export const LINKIFIC_TITLE_FIELD = "id";

export const LinkificTitle = (record: TLinkific): string => {
  return record.id?.toString() || String(record.id);
};
