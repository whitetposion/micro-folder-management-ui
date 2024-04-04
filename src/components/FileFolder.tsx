import { TableRow, TableCell } from "@mui/material";
interface Folder {
  type: string;
  children: { [key: string]: File | Folder | {} };
}
interface FileComponentProps {
     fileName: string;
     file: File | Folder | { };
     selected: boolean;
     onSelect: () => void;
}
const FileComponent: React.FC<FileComponentProps> = ({ 
     fileName,
     file,
     selected,
     onSelect 
}) => {
     const { size, type } = file;
   
     const handleCheckboxChange = () => {
       onSelect();
     };
   
     return (
       <TableRow>
         <TableCell>
           <input
             type="checkbox"
             checked={selected}
             onChange={handleCheckboxChange}
           />
           {fileName}
         </TableCell>
         <TableCell>{size}</TableCell>
         <TableCell>{type}</TableCell>
         <TableCell>{/* Last Modified */}</TableCell>
       </TableRow>
     );
};
   
export default FileComponent;