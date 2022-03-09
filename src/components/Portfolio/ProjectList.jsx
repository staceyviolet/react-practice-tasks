import * as React from 'react'
import './projectList.css';

export default class ProjectList extends React.Component {
    render() {
        const {projects} = this.props
        return (
            <div className={'list-container'}>
                {projects.map((project, index) => {
                    return (
                        <div  key={index}
                              className={'list-item'}>
                            <img src={project.img} alt={project.category}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
