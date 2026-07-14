import { Module } from "@nestjs/common";
import { CronCommand } from "./command/cron.command";
import { ScheduleModule } from "@nestjs/schedule";
import * as UserCronModule from "src/module/user-module/infrastructure/cron/cron.module";
import * as BillingCronModule from "src/module/billing-module/infrastructure/cron/cron.module";
import * as EventCronModule from "src/module/event-module/infrastructure/cron/cron.module";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        UserCronModule.CronModule,
        BillingCronModule.CronModule,
        EventCronModule.CronModule,
    ],
    providers: [CronCommand]
})
export class CommandModule { }
