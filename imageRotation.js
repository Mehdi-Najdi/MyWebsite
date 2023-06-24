//Made by JD

imageIndex = 0;

function nextImage(){
    imageIndex++;
    
    switch(imageIndex){
        case 1:
            document.getElementById("#").src = "";
            break;
        
        case 2:
            document.getElementById("#").src = "";
            break;

        case 3:
            document.getElementById("#").src = "";
            break;
        
        default:
            imageIndex = 0;
            document.getElementById("#").src = "";//Original image source
    }
}