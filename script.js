function handleClick(id){
    console.log("clicked")
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'flex';
    }else{
        document.getElementById(id).style.display = 'none';
    }
}

