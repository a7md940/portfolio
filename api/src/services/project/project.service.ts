import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../../models';
import { ProjectDocument } from '../../presistance/mongo';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private _projectRepo: Model<ProjectDocument>
    ) { }

    async createProject(project: Project) {
        const p = new this._projectRepo(project);
        const createdProject = await p.save();
        return createdProject;
    }

    async getAllProject() {
        return this._projectRepo.find({ });
    }
}
