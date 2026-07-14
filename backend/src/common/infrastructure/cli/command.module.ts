import { Module } from "@nestjs/common";
import { DispatchUserOutboxCommand } from "./command/dispatch.user.outbox.command";
import * as UserCronModule from "src/module/user-module/infrastructure/cron/cron.module";

@Module({
    imports: [
        UserCronModule.CronModule,
    ],
    providers: [DispatchUserOutboxCommand]
})
export class CommandModule { }
