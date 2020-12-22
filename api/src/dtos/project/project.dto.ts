import { Project } from '../../models';

export class ProjectDto {
  id: string;
  title: string;
  body: string;
  creationDate: Date;

  toModel() {
    const result = new Project();
    result.title = this.title;
    result.body = this.body;
    result.creationDate = new Date();
    return result;
  }

  static toDto(toConvert: Project): ProjectDto {
    const result = new ProjectDto();
    result.id = toConvert.id;
    result.title = toConvert.title;
    result.body = toConvert.body;
    result.creationDate = toConvert.creationDate;
    return result;
  }

  static toModel(toConvert): Project {
    const result = new Project();
    if (toConvert.id) {
      result.id = toConvert.id;
    }
    result.title = toConvert.title;
    result.body = toConvert.body;
    result.creationDate = new Date();
    return result;
  }
}