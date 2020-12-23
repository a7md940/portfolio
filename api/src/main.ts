import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvVars } from './config';
import * as cors from 'cors';

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(cors());
    const config = app.get<ConfigService<EnvVars>>(ConfigService);
    const PORT = config.get('port');
    const logger = app.get(Logger);
    await app.listen(PORT);
    logger.log('App listening on port ' + PORT, 'Bootstrapping');
  } catch (exc) {
    console.error(exc);
  }

}
bootstrap();
