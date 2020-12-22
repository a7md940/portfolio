import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDto, ProjectDto } from '../../../dtos/project';
import { CreateProjectDtoPipe } from '../../../middlewares/pipes/create-project-dto.pipe';
import { ProjectService } from '../../../services/project/project.service';

@Controller('project')
export class ProjectController {
  constructor(private _projectService: ProjectService) {}
  @Post()
  createFirstProject(@Body(CreateProjectDtoPipe) projectDto: CreateProjectDto) {
    return this._projectService.createProject(projectDto.toModel())
      .then(ProjectDto.toDto);
  }

  @Get()
  getProjects() {
    return this._projectService.getAllProject()
      .then(x => x.map(ProjectDto.toDto));
  }
}
