# purpose 

to continue automating the rndr process in houdini, and to practice selenium. 

## procedure 

 - scan the folder for .orbx files 
 - if a .orbx is found, open headless. 
 - try a log in, if auto login isnt found, .wait() until you get a login confirmation via command line.

- once logged in, find the upload element. 
- find the area to drag and drop/upload. 
- for each .orbx, duplicate the tab and upload.
- if the signal that uploading is done, fianlly open web browser to inspect before rendering.

# why not use go for this one?

- ~~because its browser automation, sounds like a not fun time in Go~~.
Never mind we did it in Go too. 

# nice to haves
compiling javascript to binary.
