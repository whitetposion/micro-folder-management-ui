export interface File {
     type: "file";
     size: string;
     lastModified?: string;
}
export interface Jpeg {
     type: "jpeg";
     size: string;
     lastModified?: string;
}
      
export interface Folder {
     type: "folder";
     size: string;
     children: {
          [key: string]: File | Folder | Jpeg ;
     } ;
}
      
export interface FileData {
     [key: string]: Folder;
}