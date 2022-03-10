import * as React from 'react'
import ProjectList from "./ProjectList";
import {projects} from "./projects";
import Toolbar from "./Toolbar";


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: ["All", "Websites", "Flayers", "Business Cards"],
            selected: "All",
            onSelectFilter: (selected) => {
                this.setState({selected: selected})
            }
        };
    }

    render() {
        return (
            <div
                style={{width: 900, margin: '0 auto', height: '100vh'}}
            >
                <Toolbar
                    filters={this.state.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.state.onSelectFilter}/>
                <ProjectList projects={this.filterProjects(projects, this.state.selected)} selected={this.state.selected}/>
            </div>
        )
    }

    filterProjects(projects, selected) {
        return selected === "All" ? projects : projects.filter(project => project.category === selected)
    }

}
