import React, {  useState } from 'react';
import {  Breadcrumbs, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, IconButton, CssBaseline  } from '@mui/material';
import { fileData  } from "./assets/fileData"
import FileComponent from './components/FileFolder';
import { File, Folder, Jpeg } from './type';
import { ArrowLeft, RotateCcw} from 'lucide-react';


const TopNav: React.FC = () => {

  // const [fileData, setFileData] = useState(FolderJson)
  const [path , setPath] = useState<string[]>(["app"])
  const handleFolderClick = (folderName: string) => {
    setPath([...path, folderName]);
  };
  const handleBreadcrumbClick = (index: number) => {
    setPath(path.slice(0, index + 1));
  };
  
  const getCurrentData = (): { [key: string ]: File | Folder | Jpeg }   => {
    let currentData: Folder | File | Jpeg  = path.reduce((acc: Folder | File | Jpeg  , cur: string): Folder | File | Jpeg   => {
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
      <div style={{ display: 'flex',alignItems: 'center', marginBottom: '10px' }}>
        <IconButton 
          onClick={() => {
              setPath(["app"])
            }}>
          <RotateCcw />
        </IconButton>
        <IconButton onClick={() => setPath(path.slice(0, -1))} disabled={path.length === 1}>
          <ArrowLeft/>
        </IconButton>
        <Breadcrumbs style={{paddingLeft: 20}} aria-label="breadcrumb" separator="›">
        {path.map((folder, index) => (
          <Typography key={index} variant="body1" onClick={() => handleBreadcrumbClick(index)}>{folder}</Typography>
        ))}
      </Breadcrumbs>
      </div>
      <Table style={{width:"100%"}} >
        <TableHead style={{width:"100%"}} >
          <TableRow style={{width:"100%"}} >
            <TableCell style={{ width: '10%' }}>
              {/* <Checkbox style={{ padding: 0 }} checked={true} onClick={handleSelectAll} /> */}
            </TableCell>
            <TableCell style={{ width: '50%' }}>Name</TableCell>
            <TableCell style={{ width: '10%', textAlign: "center" }}>Size</TableCell>
            <TableCell style={{ width: '10%', textAlign: "center"  }}>Type</TableCell>
            <TableCell style={{ width: '15%', textAlign: "center"  }}>Last Modified</TableCell>
            <TableCell style={{ width: '5%', textAlign: "center"  }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(getCurrentData()).map((fileName, index) => {
            const fileOrFolder = getCurrentData()[fileName];
            return (
              <FileComponent
                key={index}
                fileName={fileName}
                file={fileOrFolder as Folder | File | Jpeg  }
                click={() => {
                  if ('type' in fileOrFolder && fileOrFolder.type === 'folder') {
                    handleFolderClick(fileName);
                  } else {
                    console.log('File clicked:', fileName);
                  }
                }}
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



