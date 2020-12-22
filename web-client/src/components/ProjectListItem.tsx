import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../models/project.model';

interface IProjectListItemProps {
    project: Project;
}
class ProjectListItem extends React.Component<IProjectListItemProps> {
    constructor(props: IProjectListItemProps) {
        super(props);
    }
    render() {
        return (
            <div className="">
                <h4>Project title</h4>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo nesciunt incidunt suscipit a laborum atque sit doloremque corrupti, ipsa,
                    blanditiis ab magni quisquam tempora placeat dignissimos. Atque magni aspernatur vero.

                    <Link to={`/project/${this.props.project.id}`}>see more..</Link>
                </article>
            </div>
        );
    }
}

export default ProjectListItem;