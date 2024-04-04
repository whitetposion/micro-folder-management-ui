import React, { useState } from 'react';
import { Breadcrumbs, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { fileData } from "./assets/fileData"
import FileComponent from './components/FileFolder';

interface File {
  type: string;
  size: string;
}

interface Folder {
  type: string;
  children: { [key: string]: File | Folder | {} };
}

interface TopNavProps {
  path: string[];
  fileData: Folder;
}

const TopNav: React.FC<TopNavProps> = ({ path=["app", "main"], fileData }) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // Implement logic to select or unselect all files
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {path.map((folder, index) => (
          <Typography key={index}>{folder}</Typography>
        ))}
      </Breadcrumbs>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><input type="checkbox" onChange={handleSelectAll}/></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Last Modified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Object.keys(fileData?.children || {}).map((fileName) => (
            <FileComponent
              key={fileName}
              fileName={fileName}
              file={fileData?.children[fileName] as File | Folder | {}  }
              selected={selectAll}
              onSelect={() => {}} // Implement file selection logic here
            />
          ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default TopNav;



