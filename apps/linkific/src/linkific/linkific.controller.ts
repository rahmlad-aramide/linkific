import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkificService } from "./linkific.service";
import { LinkificControllerBase } from "./base/linkific.controller.base";

@swagger.ApiTags("linkifics")
@common.Controller("linkifics")
export class LinkificController extends LinkificControllerBase {
  constructor(
    protected readonly service: LinkificService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
