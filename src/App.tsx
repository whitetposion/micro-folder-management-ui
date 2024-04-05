import React, { useState } from 'react';
import { Breadcrumbs, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { fileData } from "./assets/fileData"
import FileComponent from './components/FileFolder';
import { File, Folder } from './type';


const TopNav: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [path , setPath] = useState<string[]>(["app"])
  const handleFolderClick = (folderName: string) => {
    setPath([...path, folderName]);
  };
  const handleBreadcrumbClick = (index: number) => {
    setPath(path.slice(0, index + 1));
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // Implement logic to select or unselect all files
  };

  const getCurrentData = (): { [key: string ]: File | Folder | {}}   => {
    // Start with the root folder and navigate based on the path
    let currentData: Folder | File = path.reduce((acc: Folder | File , cur: string): Folder | File  => {
      // Check if the current accumulator is a folder and has the child
      if (acc.type === 'folder' && acc.children[cur]) {
        return acc.children[cur];
      }
      return acc; 
    }, fileData.app as Folder | File ); 
    if (currentData.type === 'folder') {
      return currentData.children;
    }
    else {
      return {};
    }
  };

  
  
  
  
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {path.map((folder, index) => (
          <Typography key={index} onClick={() => handleBreadcrumbClick(index)}>{folder}</Typography>
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
              <TableCell>Owner</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Object.keys(getCurrentData()).map((fileName) => {
            const fileOrFolder = getCurrentData()[fileName];
            return(
            <FileComponent
              key={fileName}
              fileName={fileName}
              file={fileOrFolder as Folder | File  }
              click={() => {
                if ('type' in fileOrFolder && fileOrFolder.type === 'folder') {
                  handleFolderClick(fileName);
                } else {
                  console.log('File clicked:', fileName);
                }
              }}
              selected={selectAll}
              onSelect={() => {}} // Implement file selection logic here
            />
          )})}

          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default TopNav;



