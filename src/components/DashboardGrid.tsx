import React from "react";
import { useTable, useSortBy } from 'react-table';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, 
    chakra
  } from '@chakra-ui/react';
  import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
  import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    SortingState,
    getSortedRowModel
  } from "@tanstack/react-table";

const DashboardGrid = ({columns, data}: any): any => {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
        sorting
        }
    });

    return (
        <TableContainer>
            <Table variant='simple' size={'sm'}>
                <TableCaption placement='top' >Pairing Prices</TableCaption>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th key={header.column.columnDef.id} onClick={header.column.getToggleSortingHandler()}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        <chakra.span pl="4">
                                            {header.column.getIsSorted() ? (
                                                header.column.getIsSorted() === "desc" ? (
                                                    <TriangleDownIcon aria-label="sorted descending" />
                                                ) : (
                                                    <TriangleUpIcon aria-label="sorted ascending" />
                                                )
                                            ) : null}
                                        </chakra.span>
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {
                        data.map((data: any) => (
                            <Tr>
                                <Td>{data.currencyPair}</Td>
                                <Td isNumeric>{data.data.ask}</Td>
                                <Td isNumeric>{data.data.changes.price.hour}</Td>
                                <Td isNumeric>{data.data.changes.price.day}</Td>
                                <Td isNumeric>{data.data.changes.price.week}</Td>
                                <Td isNumeric>{data.data.changes.price.month}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )

}

export default DashboardGrid;