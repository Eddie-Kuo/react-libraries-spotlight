import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import '../../node_modules/rsuite-table/dist/css/rsuite-table.css';
import data from '../tableData.json';

export default function DataTable() {
  return (
    <Table data={data}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="first_name" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="last_name"/>
      </Column>
    </Table>
  );
}
