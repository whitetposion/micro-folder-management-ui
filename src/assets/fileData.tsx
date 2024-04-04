interface File {
  type: string;
  size: string;
  lastModified?: string;
}
   
interface Folder {
     type: string;
     children: {
       [key: string]: File | Folder | {};
     };
}
   
interface FileData {
     [key: string]: Folder;
}
   
export  const fileData: FileData = {
     "app": {
       "type": "folder",
       "children": {
         "file1": {
           "type": "file",
           "size": "106.56MB"
         },
         "file2": {
           "type": "file",
           "size": "106.56MB"
         },
         "main": {
           "type": "folder",
           "children": {
             "src": {
               "type": "folder",
               "children": {
                 "file1": {
                   "type": "file",
                   "size": "106.56MB"
                 },
                 "file2": {
                   "type": "file",
                   "size": "106.56MB"
                 },
                 "main": {
                   "type": "folder",
                   "children": {
                     "public": {
                       "type": "folder",
                       "children": {}
                     }
                   }
                 }
               }
             }
           }
         },
         "components": {
           "type": "folder",
           "children": {
             "file1": {
               "type": "file",
               "size": "106.56MB"
             },
             "file2": {
               "type": "file",
               "size": "106.56MB"
             },
             "file3": {
               "type": "file",
               "size": "106.56MB"
             }
           }
         }
       }
     }
   };
   