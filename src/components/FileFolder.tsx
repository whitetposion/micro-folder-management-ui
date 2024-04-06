import { TableRow,Typography, TableCell, Checkbox, CssBaseline } from "@mui/material";
import { Folder, File, Jpeg } from "@/type";
import { Folder as FolderIcon, File as FileIcon, Image } from "lucide-react";

interface FileComponentProps {
     fileName: string;
     file: File | Folder | Jpeg ;
     selected: boolean;
     click: () => void;
     onSelect: () => void;
}
const FileComponent: React.FC<FileComponentProps> = ({ 
     fileName,
     file,
     click,
     selected,
     onSelect 
}) => {
     const { type, size } = file;
   
     const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       e.stopPropagation()
       onSelect();
     };
   
     return (
      <>
      <CssBaseline />
      <TableRow onClick={click} style={{ }}>
        <TableCell>
          <Checkbox style={{padding: 0}} checked={selected} onChange={handleCheckboxChange} />
        </TableCell>
        <TableCell style={{display: "flex", gap: "1rem", alignItems: 'center'}}>
          {type === 'file' ? <FileIcon /> : type === 'folder' ? <FolderIcon /> : <Image/>}
          <Typography variant="body1" style={{ fontSize: '0.875rem' }}>{fileName}</Typography>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          <Typography variant="body2" style={{ fontSize: '0.75rem' }}>{size}</Typography>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          <Typography variant="body2" style={{ fontSize: '0.75rem' }}>{type}</Typography>
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      </>
     );
};
   
export default FileComponent;