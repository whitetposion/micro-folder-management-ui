import React, { useState } from 'react';
import {  Breadcrumbs, Checkbox, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, IconButton, CssBaseline  } from '@mui/material';
import { fileData } from "./assets/fileData"
import FileComponent from './components/FileFolder';
import { File, Folder, Jpeg } from './type';
import { ArrowLeft,  RotateCcw } from 'lucide-react';


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

  const getCurrentData = (): { [key: string ]: File | Folder | Jpeg }   => {
    // Start with the root folder and navigate based on the path
    let currentData: Folder | File | Jpeg  = path.reduce((acc: Folder | File | Jpeg  , cur: string): Folder | File | Jpeg   => {
      // Check if the current accumulator is a folder and has the child
      if (acc.type === 'folder' && acc.children[cur]) {
        return acc.children[cur];
      }
      return acc; 
    }, fileData.app as Folder | File| Jpeg  ); 
    if (currentData.type === 'folder') {
      return currentData.children;
    }
    else {
      return {};
    }
  };
  
  return (
    <>
    <CssBaseline />
    <Paper elevation={0}  
      style={{width: "90vw", margin: '20px' }}
      >
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        {path.map((folder, index) => (
          <Typography key={index} variant="body1" onClick={() => handleBreadcrumbClick(index)}>{folder}</Typography>
        ))}
      </Breadcrumbs>
      <div style={{ display: 'flex',alignItems: 'center', marginBottom: '10px' }}>
        <IconButton onClick={() => setPath(path.slice(0, -1))} disabled={path.length === 1}>
          <ArrowLeft/>
        </IconButton>
        <IconButton 
          onClick={() => {
              setPath(["app"])
            }}>
          <RotateCcw />
        </IconButton>
      </div>
      <Table style={{width:"100%"}} >
        <TableHead style={{width:"100%"}} >
          <TableRow style={{width:"100%"}} >
            <TableCell style={{ width: '10%' }}>
              <Checkbox style={{ padding: 0 }} checked={selectAll} onChange={handleSelectAll} />
            </TableCell>
            <TableCell style={{ width: '50%' }}>Name</TableCell>
            <TableCell style={{ width: '10%', textAlign: "center" }}>Size</TableCell>
            <TableCell style={{ width: '10%', textAlign: "center"  }}>Type</TableCell>
            <TableCell style={{ width: '15%', textAlign: "center"  }}>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(getCurrentData()).map((fileName) => {
            const fileOrFolder = getCurrentData()[fileName];
            return (
              <FileComponent
                key={fileName}
                fileName={fileName}
                file={fileOrFolder as Folder | File | Jpeg  }
                click={() => {
                  if ('type' in fileOrFolder && fileOrFolder.type === 'folder') {
                    handleFolderClick(fileName);
                  } else {
                    console.log('File clicked:', fileName);
                  }
                }}
                selected={selectAll}
                onSelect={() => {}}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </>
  );
};
export default TopNav;



