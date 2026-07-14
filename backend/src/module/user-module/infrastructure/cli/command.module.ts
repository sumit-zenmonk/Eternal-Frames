import { Module } from "@nestjs/common";
import { UserOutboxEntryPublisherCommand } from "./command/outbox-entry-publisher.command";
import { CronModule } from "../cron/cron.module";

@Module({
    imports: [
        CronModule,
    ],
    providers: [UserOutboxEntryPublisherCommand]
})
export class CommandModule { }
