class File{
    constructor(name) {
        this.name = name
        this.isDirectory = false
        
    }
}
class Directory{
    constructor(name) {
        this.name = name
        this.isDirectory = true
        this.contents = {}
    }
}
class FileSystem{
    constructor(){
        this.root = new Directory("root")
    }
    _navigateTo(path){
        try{
            let parts = path.split("/").filter(Boolean);
            
            let current = this.root
            
            for (let part of parts){
                console.log('Parts', part, current);
                if(!current?.isDirectory || !current?.contents[part]){
                    throw new Error("Some Error")
                }
                current = current.contents[part]
            }
            return current
        }catch(err){
            console.log(err)
        }
    }
    createFile(path, name){
        try{
            let dir =  this._navigateTo(path);
            if(!dir.isDirectory) throw new Error("Not a directory, incorrect path");
            if(dir.contents[name])throw new Error("File ALready existst");
            dir.contents[name] = new File(name);
        }catch(err){
            console.log('Error', err)
        }
    }
    createDirectory(path, name){
        try{
            let dir =  this._navigateTo(path);
            if(!dir.isDirectory) throw new Error("Not a directory, incorrect path");
            if(dir.contents[name])throw new Error("Direcory ALready existst");
            dir.contents[name] = new Directory(name);
        }catch(err){
            console.log('Error', err)
        }
    }
    delete(path) {
        let parts = path.split('/').filter(Boolean);
        let itemName = parts.pop();
        let dir = this._navigateTo(parts.join('/'));
        if (!dir.contents[itemName]) throw new Error(`"${itemName}" not found in ${path}.`);
        delete dir.contents[itemName];
        console.log(`"${itemName}" deleted from "${path}".`);
    }

    list(path) {
        let dir = this._navigateTo(path);
        console.log('Direcoty', dir);
        if (!dir.isDirectory) throw new Error(`${path} is not a directory.`);
        let items = Object.values(dir.contents);
        return items.map(item => item.name + (item.isDirectory ? '/' : '')).join('\n');
    }
}

// Usage example
const fs = new FileSystem();

// Creating directories
fs.createDirectory("/", "documents");
fs.createDirectory("/documents", "photos");

// // Creating files
fs.createFile("/documents", "resume.txt");
fs.createFile("/documents/photos", "vacation.png");

// // Listing contents
console.log("Listing /documents:");
console.log(fs.list("/documents")); // Outputs: "resume.txt\nphotos/"

// Deleting a file
fs.delete("/documents/resume.txt");

// Listing contents after deletion
console.log("Listing /documents after deletion:");
console.log(fs.list("/documents"));