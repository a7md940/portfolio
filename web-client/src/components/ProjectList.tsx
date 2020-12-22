import React from 'react';
import { Project } from '../models/project.model';
import ProjectListItem from './ProjectListItem';


interface IProjectListState {
    projects: Project[];
}
class ProjectList extends React.Component {
    state: IProjectListState;
    constructor(props: {}) {
        super(props);

        this.state = {
            projects: [
                {
                    id: 'dsgdfgdfg3554tdsdg3',
                    title: 'Project 1',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam et delectus accusamus consequuntur! Earum quos, perferendis sunt architecto placeat distinctio ratione dolorem corporis vel ipsam neque quam. Eius, aliquid?'
                },
                {
                    id: 'ql2kk4mfffmelt3hrg',
                    title: 'Project 2',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam et delectus accusamus consequuntur! Earum quos, perferendis sunt architecto placeat distinctio ratione dolorem corporis vel ipsam neque quam. Eius, aliquid?'
                },
            ]
        };
    }

    renderList = () => {
        return this.state.projects.map((x) => {
            return (
                <ProjectListItem project={x} />
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Project List</h1>
                { this.renderList() }
            </div>
        );
    }
}

export default ProjectList;