import React from 'react';
import { Project } from '../models/project.model';
import ProjectListItem from './ProjectListItem';
import { connect } from 'react-redux';
import { fetchProjects } from '../store/actions/fetch-projects.action';
import { RootState } from '../store/action-types';
import './ProjectList.scss'

interface IProjectListProps {
    fetchProjects: () => any;
    projects: Project[];
}
class ProjectList extends React.Component<IProjectListProps> {

    componentDidMount() {
        this.props.fetchProjects();
    }

    renderList = () => {
        return this.props.projects.map((x) => {
            return (
                <ProjectListItem key={x.id} project={x} />
            );
        });
    }

    render() {
        return (
            <div className="ProjectList">
                { this.renderList() }
            </div>
        );
    }
}
const mapStateToProps = (state: RootState) => {
    return { projects: Object.values(state.projects.list) };
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);