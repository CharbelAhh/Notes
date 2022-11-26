function deleteNote(note){
    let confirmBox=note.getElementsByClassName("confirm-delete")[0];
    confirmBox.getElementsByClassName("note-name")[0].textContent=note.getElementsByClassName("title")[0].value;
    confirmBox.style.display="flex";
    let choices=note.getElementsByClassName("confirm-delete")[0].getElementsByTagName("button");
    
    choices[0].onclick=()=>{
        note.getElementsByClassName("confirm-delete")[0].style.display="none";
    }
    choices[1].onclick=()=>{
        document.body.getElementsByTagName("main")[0].removeChild(note)
        
        if (document.getElementsByTagName("main")[0].children.length<3)
        document.getElementsByClassName("no-notes")[0].style.display="block";
    }
}

function downloadNote(note){
    let content=note.getElementsByClassName("note-content")[0].getElementsByTagName("textarea")[0].value
    const file = new File([content], note.getElementsByClassName("title")[0].value+".txt");
    const fileURL=URL.createObjectURL(file);
    note.getElementsByTagName("a")[0].href=fileURL;
}

function editNote(note){
    note.getElementsByClassName("note-content")[0].style.display="flex";
    note
    .getElementsByClassName("note-title")[0].value=
    note
    .getElementsByClassName("title")[0].value
    note.getElementsByClassName("note-content")[0].getElementsByClassName("close-note")[0].onclick=()=>{
        note.getElementsByClassName("note-content")[0].style.display="none";
    }
}

function addNote(){
    let newNote=document.getElementsByClassName("note")[0].cloneNode(true);
    newNote.style=`
    display:block;
    animation:popIn 0.5s 1;
    `;

    newNote.getElementsByClassName("edit-note")[0].addEventListener("click",()=>{editNote(newNote)})
    newNote.getElementsByClassName("delete-note")[0].addEventListener("click",()=>{deleteNote(newNote)})
    newNote.getElementsByClassName("download-note")[0].addEventListener("click",()=>{downloadNote(newNote)})

    let title=newNote.getElementsByTagName("input")[0];
    title.onchange=()=>{
        if (title.value.trim().length===0){
            title.value="New Note";
        }
    }
    
    document.getElementsByTagName("main")[0].appendChild(newNote);
    document.getElementsByClassName("no-notes")[0].style.display="none";
}

document.getElementsByClassName("note")[0].style.display="none";