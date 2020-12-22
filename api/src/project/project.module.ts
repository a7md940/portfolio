import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project } from '../models';
import { ProjectSchema } from '../presistance/mongo';
import { ProjectService } from '../services/project/project.service';
import { ProjectController } from './controllers/project/project.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema
      }
    ])
  ],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule { }
