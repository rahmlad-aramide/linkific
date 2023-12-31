import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LinkificModuleBase } from "./base/linkific.module.base";
import { LinkificService } from "./linkific.service";
import { LinkificController } from "./linkific.controller";
import { LinkificResolver } from "./linkific.resolver";

@Module({
  imports: [LinkificModuleBase, forwardRef(() => AuthModule)],
  controllers: [LinkificController],
  providers: [LinkificService, LinkificResolver],
  exports: [LinkificService],
})
export class LinkificModule {}
