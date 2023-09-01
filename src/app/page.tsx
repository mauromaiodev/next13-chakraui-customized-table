"use client";

import { Column } from "react-table";

import DataTable from "components/data-table";

import users from "../data/users";

import { Container, Heading } from "@chakra-ui/layout";
import { User } from "types/model";

const columns: ReadonlyArray<Column<User>> = [
  {
    Header: "User ID",
    accessor: "id"
  },
  {
    Header: "Empresa",
    accessor: "enterprise"
  },
  {
    Header: "Nome",
    accessor: "name"
  },
  {
    Header: "Cargo",
    accessor: "position"
  },
  {
    Header: "Cidade",
    accessor: "city"
  }
];

export default function Home() {
  return (
    <Container maxW="container.xl" py="12">
      <Heading as="h1" fontSize="4xl">
        Clientes
      </Heading>
      <DataTable data={users} column={columns} />
    </Container>
  );
}
