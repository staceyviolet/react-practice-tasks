import * as React from 'react'
import './projectList.css';

export default class ProjectList extends React.Component {
    render() {
        const {projects, selected} = this.props
        return (
            <div className={'list-container'} style={
                selected === "Websites" ? {height: 1100}
                    : selected === "Flayers" ? {height: 450}
                        : selected === "Business Cards" ? {height: 650}
                            : {height: 1670}}>
                {projects.map((project, index) => {
                    return (
                        <div key={index}
                             className={'list-item'}>
                            <img src={project.img} alt={project.category}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
