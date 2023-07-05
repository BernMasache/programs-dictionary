import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import Programs from './components/Programs'

const query = {
    me: {
        resource: 'me',
    },
    programs: {
        resource: 'programs',
        params:{
            fields:["*"]
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
                        <Programs proprams={data.programs.programs}/>
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp