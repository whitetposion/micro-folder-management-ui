import { FileData } from "@/type";

export  const fileData: FileData = {
     "app": {
       "type": "folder",
       "size": "426MB",
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
           "size": "213MB",
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
           "size": "320MB",
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
   