import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;
@Schema()
export class Project {
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: String, required: true })
  body: string;
  @Prop({ type: Date, required: true, default: new Date() })
  creationDate: Date;
}
export const ProjectSchema = SchemaFactory.createForClass<Project>(Project);
ProjectSchema.methods.toJSON = function() {
  const model = this;
  const modelObject = model.toObject();

  modelObject.id = modelObject._id;
  delete modelObject._id;
  delete modelObject.__v;
  return modelObject;
}
