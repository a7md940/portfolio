import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { Project } from '../../../models';
import { ProjectSchema } from '../../../presistance/mongo';
import { closeInMongodConnection, rootMongooseTestModule } from '../../../../test/mongo/mongoose-memory';
import { ProjectService } from '../../../services/project/project.service';
import { ProjectController } from './project.controller';

describe('ProjectController', () => {
  let controller: ProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
      ],
      controllers: [ProjectController],
      providers: [ProjectService]
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  afterAll(async () => {
    await closeInMongodConnection();
  });
});
