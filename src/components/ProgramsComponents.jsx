import React, { Component } from 'react'
import Programs from './Programs'

export default class ProgramsComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: this.props.programs,
            selectedProgram: [],
            programStagesDataElements: []
        }
    }

    componentDidMount() {

    }
    setSelectedProgram = (program) => {

        this.setState({
            selectedProgram: program
        })
        this.stages(program)
    }

    stages = (stages) => {
        let stagesContainer = []
        let dataElementsStageContainer = []
        let dataElementsContainer = []
        let dataElementsHolder = []

        stages.programStages.map(stg => {
            stagesContainer.push(stg)
        })

        stagesContainer.map(data => {
            dataElementsStageContainer.push(data.programStageDataElements)
        })
        dataElementsStageContainer.map(data => {
            dataElementsContainer.push(data)
        })
        for (let index = 0; index < dataElementsStageContainer.length; index++) {
            const element = dataElementsStageContainer[index];

            for (let x = 0; x < element.length; x++) {
                const dataElements = element[x];
                dataElementsHolder.push(dataElements)
            }
        }
        console.log(dataElementsHolder);
        this.setState({
            programStagesDataElements: dataElementsHolder
        })
    }

    render() {
        return (
            <div>

                <div className="">
                    <Programs proprams={this.state.programs} programStagesDataElements={this.state.programStagesDataElements} style={this.props.style} setSelectedProgram={this.setSelectedProgram} selectedProgram={this.state.selectedProgram} />
                </div>
            </div>
        )
    }
}
