import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config, { EnvVars } from './config';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const { username, password, dbName } = config.get<EnvVars['database']>('database');
        return {
          uri: `mongodb+srv://${username}:${password}@a7md940.2ymqp.mongodb.net/${dbName}?retryWrites=true&w=majority`,
          appname: 'A7md-Portfolio',
          autoCreate: true,
          auth: {
            user: username,
            password: password
          }
        };
      },
      inject: [ConfigService]
    }),
    ProjectModule,
    Logger
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
