import React from "react";
import ProjectList from "./ProjectList";

class HomeComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <span>Home page</span>

                <ProjectList>
                </ProjectList>
            </React.Fragment>
        );
    }
}

export default HomeComponent;