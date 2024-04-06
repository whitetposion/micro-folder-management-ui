import { TableRow,Typography, TableCell, Checkbox, CssBaseline } from "@mui/material";
import { Folder, File, Jpeg } from "@/type";
import { Folder as FolderIcon, File as FileIcon, Image } from "lucide-react";
import ThreeDotMenu from "./ThreeDotsOptions";
import { useState } from "react";


interface FileComponentProps {
     fileName: string;
     file: File | Folder | Jpeg ;
     click: () => void;
    
}
const FileComponent: React.FC<FileComponentProps> = ({ 
    fileName,
    file,
    click
}) => {
      const { type, size } = file;
      const [selectAll, setSelectAll] = useState<boolean>(false);
      const handleCheckboxChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setSelectAll(!selectAll)
      };
   
     return (
      <>
      <CssBaseline />
      <TableRow onClick={click} style={{ }}>
        <TableCell>
          <Checkbox style={{padding: 0}} checked={selectAll} onClick={(e)=>handleCheckboxChange(e)} />
        </TableCell>
        <TableCell style={{display: "flex", gap: "1rem", alignItems: 'center'}}>
          {type === 'file' ? <FileIcon /> : type === 'folder' ? <FolderIcon /> : <Image/>}
          <Typography variant="body1" style={{ fontSize: '0.875rem' }}>{fileName}</Typography>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          <Typography variant="body1" style={{ fontSize: '0.75rem' }}>{size}</Typography>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          <Typography variant="body1" style={{ fontSize: '0.75rem' }}>{type}</Typography>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}> 
        </TableCell>
        <TableCell>
          <ThreeDotMenu/>
        </TableCell>
      </TableRow>
      </>
     );
};
   
export default FileComponent;