import { Module } from "@nestjs/common";
import { CronModule } from "../cron/cron.module";
import { UserOutboxEntryPublisherCommand } from "./command/outbox-entry-publisher/outbox-entry-publisher.command";

@Module({
    imports: [
        CronModule,
    ],
    providers: [UserOutboxEntryPublisherCommand]
})
export class CommandModule { }
