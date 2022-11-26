document.getElementsByClassName("note")[0].style.display="none";

document.getElementById("add").onclick=()=>{
    let newNote=document.getElementsByClassName("note")[0].cloneNode(true);
    newNote.style=`
    display:block;
    animation:popIn 0.5s 1;
    `;
    document.getElementsByTagName("main")[0].appendChild(newNote);
    document.getElementsByClassName("no-notes")[0].style.display="none";
}

setInterval(() => {
    Object.keys(document.getElementsByClassName("note")).forEach(element=>{
        let notes=document.getElementsByClassName("note");
        if (notes.length>1){
        document.getElementsByClassName("note")[element].getElementsByTagName("a")[0].onclick=()=>{
            let content=document.getElementsByClassName("note")[element].getElementsByClassName("note-content")[0].getElementsByTagName("textarea")[0].value
            const file = new File([content], document.getElementsByClassName("note")[element].getElementsByClassName("title")[0].value+".txt");
            const fileURL=URL.createObjectURL(file);
            document.getElementsByClassName("note")[element].getElementsByTagName("a")[0].href=fileURL;
        }
        document.getElementsByClassName("note")[element].getElementsByTagName("button")[1].onclick=()=>{
            let confirmBox=document.getElementsByClassName("note")[element].getElementsByClassName("confirm-delete")[0];
            confirmBox.getElementsByClassName("note-name")[0].textContent=document.getElementsByClassName("note")[element].getElementsByClassName("title")[0].value;
            confirmBox.style.display="flex";
            let choices=document.getElementsByClassName("note")[element].getElementsByClassName("confirm-delete")[0].getElementsByTagName("button");
            
            choices[0].onclick=()=>{
                document.getElementsByClassName("note")[element].getElementsByClassName("confirm-delete")[0].style.display="none";
            }
            choices[1].onclick=()=>{
                document.body.getElementsByTagName("main")[0].removeChild(document.getElementsByClassName("note")[element])
            }
        }
        document.getElementsByClassName("note")[element].getElementsByTagName("button")[0].onclick=()=>{
            document.getElementsByClassName("note")[element].getElementsByClassName("note-content")[0].style.display="flex";
            document.getElementsByClassName("note")[element]
            .getElementsByClassName("note-title")[0].value=
            document.getElementsByClassName("note")[element]
            .getElementsByClassName("title")[0].value
            document.getElementsByClassName("note")[element].getElementsByClassName("note-content")[0].getElementsByClassName("close-note")[0].onclick=()=>{
                document.getElementsByClassName("note")[element].getElementsByClassName("note-content")[0].style.display="none";
            }
        }
        
        let title=document.getElementsByClassName("note")[element].getElementsByTagName("input")[0];
        title.onchange=()=>{
            if (title.value.trim().length===0){
                title.value="New Note";
            }
        }
    }
    else{
        document.getElementsByClassName("no-notes")[0].style.display="block";
    }
    })
}, 0);