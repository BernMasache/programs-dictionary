import React, { useEffect } from 'react'
import { DropdownButton, Tag, NoticeBox, FlyoutMenu, MenuItem, Menu, MenuSectionHeader, MenuDivider, Table, TableHead, TableRow, TableCell, TableBody, TableRowHead, TableCellHead, TableFoot } from '@dhis2/ui'

export default function Programs(props) {

  return (
    <div>
      <div className="">
        <Menu>
          <MenuSectionHeader label="Programs Dictionary" />
          <MenuDivider />
        </Menu>
        <div>
          <DropdownButton
            component={<FlyoutMenu>
              {
                props?.proprams?.map((program, key) => {
                  return <MenuItem label
                    ={program?.displayName} key={key} onClick={() => props?.setSelectedProgram(program)} />
                })
              }
            </FlyoutMenu>}

            name="programs"
            value="programs"
          >
            Select program
          </DropdownButton>
        </div>
        <MenuDivider />
      </div>
      <div className="">
        {
          props?.selectedProgram && Object.keys(props?.selectedProgram)?.length > 0 ? <div className={props?.style?.tableCss}>

            <Table>
              <TableHead>
                <TableRowHead>
                  <TableCellHead>
                    Name
                  </TableCellHead>
                  <TableCellHead>
                    ProgramType
                  </TableCellHead>

                  <TableCellHead>
                    DisplayName
                  </TableCellHead>
                  <TableCellHead>
                    ShortName
                  </TableCellHead>
                  <TableCellHead>
                    FormName
                  </TableCellHead>
                  <TableCellHead>
                    CreatedDate
                  </TableCellHead>
                  <TableCellHead>
                    LastUpdated
                  </TableCellHead>
                </TableRowHead>
              </TableHead>
              <TableBody>

                {

                  <TableRow>
                    <TableCell>
                      {props?.selectedProgram?.name}
                    </TableCell>
                    <TableCell>
                      {
                        props?.selectedProgram?.programType == "WITH_REGISTRATION" ? "Tracker" : "Aggregate"
                      }
                    </TableCell>

                    <TableCell>
                      {props?.selectedProgram?.displayName}
                    </TableCell>
                    <TableCell>
                      {
                        props?.selectedProgram?.displayShortName
                      }
                    </TableCell>
                    <TableCell>
                      {props?.selectedProgram?.displayFormName}
                    </TableCell>
                    <TableCell>
                      {props?.selectedProgram?.created?.split("T")[0]}
                    </TableCell>
                    <TableCell>
                      {props?.selectedProgram?.lastUpdated?.split("T")[0]}
                    </TableCell>
                  </TableRow>
                }
              </TableBody>

            </Table>

            <div className={props?.style?.wrapper}>

              <div className={props?.style?.programsCss}>
                <div className={props?.style?.prog}>
                  <NoticeBox>
                    Programs Attibutes
                  </NoticeBox>
                  <div className={props?.style?.padding}>
                    <Table>
                      <TableHead>
                        <TableRowHead>
                          <TableCellHead>
                            Name
                          </TableCellHead>
                          <TableCellHead>
                            DisplayName
                          </TableCellHead>
                          <TableCellHead>
                            ValueType
                          </TableCellHead>
                          <TableCellHead>
                            CreatedDate
                          </TableCellHead>
                          <TableCellHead>
                            LastUpdated
                          </TableCellHead>

                        </TableRowHead>
                      </TableHead>
                      <TableBody>
                        {
                          props?.selectedProgram?.programTrackedEntityAttributes.map((te, key) => {
                            return <TableRow key={key}>
                              <TableCell>
                                {te?.name}
                              </TableCell>
                              <TableCell>
                                {te?.displayName}
                              </TableCell>
                              <TableCell>
                                {
                                  te?.valueType
                                }
                              </TableCell>
                              <TableCell>
                                {te?.created.split("T")[0]}
                              </TableCell>

                              <TableCell>
                                {te?.lastUpdated.split("T")[0]}
                              </TableCell>

                            </TableRow>


                          })
                        }
                      </TableBody>

                    </Table>
                  </div>
                </div>

                <div className={props?.style?.prog}>
                  <NoticeBox>
                    Programs Stages
                  </NoticeBox>
                  <div className={props?.style?.padding}>
                    <Table>
                      <TableHead>
                        <TableRowHead>
                          <TableCellHead>
                            DisplayName
                          </TableCellHead>
                          <TableCellHead>
                            FormType
                          </TableCellHead>
                          <TableCellHead>
                            CreatedDate
                          </TableCellHead>
                          <TableCellHead>
                            LastUpdated
                          </TableCellHead>

                        </TableRowHead>
                      </TableHead>
                      <TableBody>
                        {
                          props?.selectedProgram?.programStages.map((programStage, key) => {
                            return <TableRow key={key}>
                              <TableCell>
                                {programStage?.displayName}
                              </TableCell>
                              <TableCell>
                                {
                                  programStage?.formType
                                }
                              </TableCell>
                              <TableCell>
                                {programStage?.created.split("T")[0]}
                              </TableCell>

                              <TableCell>
                                {programStage?.lastUpdated.split("T")[0]}
                              </TableCell>

                            </TableRow>


                          })
                        }
                      </TableBody>

                    </Table>
                  </div>
                </div>
                <div className={props?.style?.prog}>
                  <NoticeBox>
                    Data Elements
                  </NoticeBox>
                  <div className={props?.style?.padding}>
                    <Table>
                      <TableHead>
                        <TableRowHead>
                          <TableCellHead>
                            Name
                          </TableCellHead>
                          <TableCellHead>
                            DisplayName
                          </TableCellHead>
                          <TableCellHead>
                            ValueType
                          </TableCellHead>
                          <TableCellHead>
                            CreatedDate
                          </TableCellHead>
                          <TableCellHead>
                            LastUpdated
                          </TableCellHead>

                        </TableRowHead>
                      </TableHead>
                      <TableBody>
                        {
                          props?.programStagesDataElements?.map((dataElement, key) => {
                            return <TableRow key={key}>
                              <TableCell>
                                {dataElement?.dataElement?.name}
                              </TableCell>
                              <TableCell>
                                {
                                  dataElement?.dataElement?.formName
                                }
                              </TableCell>
                              <TableCell>
                                {
                                  dataElement.dataElement?.valueType
                                }
                              </TableCell>
                              <TableCell>
                                {dataElement?.dataElement?.created?.split("T")[0]}
                              </TableCell>

                              <TableCell>
                                {dataElement?.dataElement?.lastUpdated?.split("T")[0]}
                              </TableCell>

                            </TableRow>


                          })
                        }
                      </TableBody>

                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
            : <NoticeBox>
              Select a program
            </NoticeBox>
        }


      </div>

    </div>
  )
}
