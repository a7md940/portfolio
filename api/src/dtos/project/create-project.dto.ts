import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Project } from '../../models';

export class CreateProjectDto {
  @IsNotEmpty({ message: 'errors:createProject:titleIsRequired' })
  @MaxLength(200, { message: 'errors:createProject:titleExceededMaxLength' })
  @IsString({ message: 'errors:createProject:titleMustBeString' })
  title: string;

  @IsNotEmpty({ message: 'errors:createProject:bodyIsRequired' })
  @IsString({ message: 'errors:createProject:bodyMustBeString' })
  body: string;

  toModel() {
    const result = new Project();
    result.title = this.title;
    result.body = this.body;
    result.creationDate = new Date();
    return result;
  }

  static toDto(val) {
    const result = new CreateProjectDto();
    result.body = val.body;
    result.title = val.title;
    return result;
  }

  static toModel(val) {
    const result = new Project();
    result.creationDate = new Date();
    result.body = val.body;
    result.title = val.title;
    return result;
  }
}