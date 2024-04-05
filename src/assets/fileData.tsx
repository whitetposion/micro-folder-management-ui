import { FileData, File, Folder } from "@/type";

// Function to generate a new file with a random size
const generateFile = (): File => {
  const types = ["file", "jpeg"]; // Types including "jpeg"
  const randomType = types[Math.floor(Math.random() * types.length)]; // Randomly select a type
  const size = (Math.random() * 100).toFixed(2) + "MB"; // Generate a random size
  return { type: randomType, size };
};

// Function to generate a new folder with a random size
const generateFolder = (): Folder => {
  const size = (Math.random() * 100).toFixed(2) + "MB"; // Generate a random size
  return { type: "folder", size, children: {} };
};

// Function to generate additional folders and files recursively
const generateAdditionalFoldersAndFiles = (data: Folder["children"], levels: number): void => {
  if (levels <= 0 || !data) return;

  // Generate random number of files and folders to add
  const numFiles = Math.floor(Math.random() * 5) + 1; // Random number of files between 1 and 5
  const numFolders = Math.floor(Math.random() * 3) + 1; // Random number of folders between 1 and 3

  for (let i = 0; i < numFiles; i++) {
    const fileName = `file${i + 1}`;
    data[fileName] = generateFile();
  }

  for (let i = 0; i < numFolders; i++) {
    const folderName = `folder${i + 1}`;
    data[folderName] = generateFolder();
    generateAdditionalFoldersAndFiles(data[folderName]?.children, levels - 1); // Recursively generate folders and files inside this folder
  }
};

// Function to generate or populate more folders and files
const populateFileData = (fileData: FileData, levels: number): void => {
  generateAdditionalFoldersAndFiles(fileData.app.children, levels);
};

// Usage example


export  const fileData: FileData = {
  "app": {
    "type": "folder",
    "size": "426MB",
    "children": {
      "file1": {
        "type": "jpeg",
        "size": "62.45MB"
      },
      "file2": {
        "type": "file",
        "size": "42.12MB"
      },
      "main": {
        "type": "folder",
        "size": "213MB",
        "children": {
          "src": {
            "type": "folder",
            "size": "99.15MB",
            "children": {
              "file1": {
                "type": "jpeg",
                "size": "23.87MB"
              },
              "file2": {
                "type": "file",
                "size": "39.62MB"
              },
              "subfolder1": {
                "type": "folder",
                "size": "32.89MB",
                "children": {
                  "file1": {
                    "type": "file",
                    "size": "17.34MB"
                  },
                  "file2": {
                    "type": "jpeg",
                    "size": "11.55MB"
                  }
                }
              }
            }
          },
          "subfolder2": {
            "type": "folder",
            "size": "63.45MB",
            "children": {
              "file1": {
                "type": "file",
                "size": "37.22MB"
              },
              "file2": {
                "type": "jpeg",
                "size": "26.23MB"
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
            "size": "69.29MB"
          },
          "file2": {
            "type": "file",
            "size": "86.37MB"
          },
          "file3": {
            "type": "jpeg",
            "size": "17.84MB"
          },
          "folder1": {
            "type": "folder",
            "size": "51.73MB",
            "children": {
              "file1": {
                "type": "file",
                "size": "45.90MB"
              },
              "file2": {
                "type": "jpeg",
                "size": "5.83MB"
              }
            }
          }
        }
      }
    }
  }
}


// populateFileData(fileData, 2); // Generate additional folders and files up to 2 levels deep

console.log(fileData); // Updated file data with additional folders and files
