import React, { useEffect } from 'react'
import { DropdownButton, FlyoutMenu, MenuItem, Menu, MenuSectionHeader, MenuDivider, Table, TableHead, TableRow, TableCell, TableBody, TableRowHead, TableCellHead, TableFoot } from '@dhis2/ui'

export default function Programs(props) {

  return (
    <div>
      <div className="">
        <Menu>
          <MenuSectionHeader label="Programs Dictionary" />
          <MenuDivider />
        </Menu>
        <div className={props.style.padding}>
          <DropdownButton
            component={<FlyoutMenu>
              {
                props.proprams.map((program, key) => {
                  return <MenuItem label
                    ={program.displayName} key={key} onClick={() => props.setSelectedProgram(program)} />
                })
              }
            </FlyoutMenu>}

            name
            ="programs"
            value
            ="programs"
          >
            Programs
          </DropdownButton>
        </div>
        <MenuDivider />
      </div>
      <div className="">
        {
          props.selectedProgram && Object.keys(props.selectedProgram).length > 0 ? <Table>
            <TableHead>
              <TableRowHead>
                <TableCellHead>
                  Name
                </TableCellHead>
                <TableCellHead>
                  Domain
                </TableCellHead>
                <TableCellHead>
                  Created Date
                </TableCellHead>
                <TableCellHead>
                  Last updated
                </TableCellHead>
                <TableCellHead>
                  Age
                </TableCellHead>
                <TableCellHead>
                  Registering unit
                </TableCellHead>
                <TableCellHead>
                  Assigned user
                </TableCellHead>
                <TableCellHead>
                  Status
                </TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody>

              {

                <TableRow >
                  <TableCell>
                    {props?.selectedProgram?.displayName}
                  </TableCell>
                  <TableCell>
                    {
                      props?.selectedProgram?.programsType == "WITH_REGISTRATION" ? "Tracker" : "Aggregate"
                    }
                  </TableCell>
                  <TableCell>
                    {props?.selectedProgram?.created.split("T")[0]}
                  </TableCell>
                  <TableCell>
                    {props?.selectedProgram?.lastUpdated.split("T")[0]}
                  </TableCell>
                  <TableCell>
                    66
                  </TableCell>
                  <TableCell>
                    Jawi
                  </TableCell>
                  <TableCell>
                    Sofie Hubert
                  </TableCell>
                  <TableCell>
                    Incomplete
                  </TableCell>
                </TableRow>


              }



            </TableBody>
            <TableFoot>
              <TableRow>
                <TableCell colSpan="8">
                  {/* <TableFooterButton /> */}
                </TableCell>
              </TableRow>
            </TableFoot>
          </Table> : "Select one program"
        }
      </div>
    </div>
  )
}
