window.onload = ()=>{
    setInterval(()=>{
        changeKilophonePhoto();
    },5000);
}
let kilophotoId = 0;
function changeKilophonePhoto(){
    const photos = [...document.getElementsByClassName("kilophonePhoto")];
    kilophotoId++;
    if(kilophotoId>=photos.length){
        kilophotoId=0;
    }
    photos.map(
        (element,index)=>{
            if(index==kilophotoId){
                element.classList.add("kilophonePhotoActive");
                return;
            }
            element.classList.remove("kilophonePhotoActive");
        }
    );
}