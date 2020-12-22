import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { ProjectSchema } from '../../presistance/mongo';
import { closeInMongodConnection, rootMongooseTestModule } from '../../../test/mongo/mongoose-memory';
import { ProjectService } from './project.service';
import { Project } from '../../models';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
      ],
      providers: [ProjectService],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
