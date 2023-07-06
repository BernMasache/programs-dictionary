import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import Programs from './components/Programs'
import ProgramsComponents from './components/ProgramsComponents'

const query = {
    me: {
        resource: 'me',
    },
    programs: {
        resource: 'programs',
        params: {
            fields: ["id,name,displayName,displayShortName,displayFormName,formName,programType,created,lastUpdated,shortName,formName,programTrackedEntityAttributes('valueType,name,formName,displayFormname,displayName,displayShortName,created,lastUpdated'),programStages('id,created,name,lastUpdated,displayName,displayFormName,formType,programStageDataElements('id,created,name,lastUpdate,dataElement('*')')')"]
        }
    },
}

const MyApp = () => (
    <div className={classes.container}>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        {/* <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3> */}
                        <div className={classes.padding}>
                            <ProgramsComponents programs={data.programs.programs} style={classes} />


                        </div>
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
