import React, { Component } from 'react'
import Programs from './Programs'

export default class ProgramsComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: this.props.programs,
            selectedProgram: []
        }
    }

    componentDidMount() {

    }
    setSelectedProgram = (program) => {
        console.log(program);
        this.setState({
            selectedProgram: program
        })
    }
    render() {
        return (
            <div>

                <div className="">
                    <Programs proprams={this.state.programs} style={this.props.style} setSelectedProgram={this.setSelectedProgram} selectedProgram={this.state.selectedProgram} />
                </div>
            </div>
        )
    }
}
