import React, { useEffect } from 'react'
import { Button, DropdownButton, FlyoutMenu, MenuItem, Menu, MenuSectionHeader, MenuDivider, Table, TableHead, TableRow, TableCell, TableBody, TableRowHead, TableCellHead, TableFoot } from '@dhis2/ui'
export default function Programs(props) {
  // useEffect(() => {

  //   console.log(props.proprams);
  // }, [])

  return (
    <div>
      <Menu>
        <MenuSectionHeader label="Programs Dictionary" />
        <MenuDivider />
      </Menu>
      <div className="">
        <DropdownButton
          component={<FlyoutMenu>
            {
              props.proprams.map((program, key) => {
                return <MenuItem label
                  ={program.displayName} key={key} onClick={() => console.log(program)} />
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
      <div className="">
        <Table>
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
              props.proprams.map((program, key) => {
                return <TableRow key={key}>
                  <TableCell>
                    {program.displayName}
                  </TableCell>
                  <TableCell>
                    {
                      program.programType == "WITH_REGISTRATION" ? "Tracker" : "Aggregate"
                    }
                  </TableCell>
                  <TableCell>
                    {program.created.split("T")[0]}
                  </TableCell>
                  <TableCell>
                    {program.lastUpdated.split("T")[0]}
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

              })}



          </TableBody>
          <TableFoot>
            <TableRow>
              <TableCell colSpan="8">
                {/* <TableFooterButton /> */}
              </TableCell>
            </TableRow>
          </TableFoot>
        </Table>
      </div>
    </div>
  )
}
