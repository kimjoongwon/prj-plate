'use client';

import React from 'react';
import {
  DataGrid,
  OrderByCell,
  Pagination,
  SearchBox,
  SearchInput,
} from '@kimjwally/ui';
import { createColumnHelper } from '@tanstack/react-table';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Box, Paper, TableContainer } from '@mui/material';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const persons: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

function PDFPage() {
  const state = useLocalObservable(() => ({
    firstName: 'asc',
    lastName: 'asc',
    skip: 0,
    page: 1,
  }));
  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor('firstName', {
      id: 'TEST',
      cell: info => <span>{info.getValue()}</span>,
      header: headerContext => (
        <OrderByCell
          headerContext={headerContext}
          mobxProps={{
            state,
            path: 'lastName',
          }}
        />
      ),
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('visits', {
      header: () => <span>Visits</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
    }),
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <SearchBox>
        <SearchInput state={state} path="firstName" />
      </SearchBox>
      <TableContainer component={Paper}>
        <DataGrid data={persons} columns={columns} />
        <Pagination state={state} path="skip" variant="outlined" />
      </TableContainer>
    </Box>
  );
}

export default observer(PDFPage);
