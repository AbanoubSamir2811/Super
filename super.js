function getId(e){
    var id=e.target.id;
    var o=document.getElementById("o-"+id);
    var photosOpecity=document.getElementById("photos-opecity");
    photosOpecity.style.display="grid";
    o.style.visibility="visible"
    o.style.transition="1s"
    var no=document.getElementById("no-"+id);
    no.style.visibility="visible";
    var photosNopecity=document.getElementById("photos-noopecity");
    photosNopecity.style.display="grid";
}

function remove(e){
    var id=e.target.id;
    var o=document.getElementById("o-"+id);
    var photosOpecity=document.getElementById("photos-opecity");
    photosOpecity.style.display="none";
    o.style.visibility="hidden";
    var no=document.getElementById("no-"+id);
    no.style.visibility="hidden";
    var photosNopecity=document.getElementById("photos-noopecity");
    photosNopecity.style.display="none";
}