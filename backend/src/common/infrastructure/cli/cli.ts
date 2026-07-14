import { CommandFactory } from 'nest-commander';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { CommandModule } from './command.module';
import { createSchemas } from '../db/bootstrap/db_schema.create';

async function bootstrap() {
    initializeTransactionalContext();
    await createSchemas();

    await CommandFactory.run(CommandModule, ['log', 'error', 'warn']);
}

bootstrap();