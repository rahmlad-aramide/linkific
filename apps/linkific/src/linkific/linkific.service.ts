import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LinkificServiceBase } from "./base/linkific.service.base";

@Injectable()
export class LinkificService extends LinkificServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
