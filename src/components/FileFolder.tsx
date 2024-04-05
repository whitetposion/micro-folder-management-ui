import { TableRow, TableCell } from "@mui/material";
import { Folder, File } from "@/type";

interface FileComponentProps {
     fileName: string;
     file: File | Folder ;
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
       <TableRow onClick = {click}>
         <TableCell>
           <input
             type="checkbox"
             checked={selected}
             onChange={handleCheckboxChange}
           />
         </TableCell>
         <TableCell>
          {fileName}
         </TableCell>
         <TableCell>{type}</TableCell>
         <TableCell>{size}</TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
       </TableRow>
     );
};
   
export default FileComponent;