import { CreateProjectDtoPipe } from './create-project-dto.pipe';

describe('CreateProjectDtoPipe', () => {
  it('should be defined', () => {
    expect(new CreateProjectDtoPipe()).toBeDefined();
  })
  it('should throw error when receiving invalid object', () => {
    const pipe = new CreateProjectDtoPipe();
    const obj = { };
    expect(() => pipe.transform(obj, null)).toThrowError();
  })
});
