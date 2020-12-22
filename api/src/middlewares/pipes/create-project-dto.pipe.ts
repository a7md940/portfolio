import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateProjectDto } from '../../dtos/project';

@Injectable()
export class CreateProjectDtoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || (!!value && (Object.keys(value).length === 0 ||Object.values(value).length === 0))) {
      throw new Error('Invalid object to map to CreateProjectDto');
    }
    return CreateProjectDto.toDto(value);
  }
}
