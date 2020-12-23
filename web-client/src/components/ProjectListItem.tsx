import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectListItem.scss'; 
import { Project } from '../models/project.model';

interface IProjectListItemProps {
    project: Project;
}
class ProjectListItem extends React.Component<IProjectListItemProps> {
    render() {
        return (
            <div className="project-wrapper">
                <h4>{this.props.project.title}</h4>
                <article>
                    <p dangerouslySetInnerHTML={{ __html: `${this.props.project.body}` }}></p>
                    <Link to={`/project/${this.props.project.id}`}>see more..</Link>
                </article>
            </div>
        );
    }
}

export default ProjectListItem;