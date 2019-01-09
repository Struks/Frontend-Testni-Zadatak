
//GET ELEMENTS
//courses for slideshow
const next=document.querySelector("#layerRight"),
      prev=document.querySelector("#layerLeft");
//grid and list layout
const grid=document.getElementById("grid_view"),
      list=document.getElementById("list_view");

images=["left1.png","left2.png", "mid.png","Right2.png","Right1.png"];

//eventListeners
eventListener();

function eventListener(){
    //make nextslide Show 
    next.addEventListener("click",()=>{ 
        //change position all picture in slide
        this.nextImage("current_image");
        this.nextImage("left1");
        this.nextImage("left2");
        this.nextImage("right1");
        this.nextImage("right2");
    });
    //make prevslide
    prev.addEventListener("click",()=>{
        //change position all picture in slide
        this.prevImage("current_image");
        this.prevImage("left1");
        this.prevImage("left2");
        this.prevImage("right1");
        this.prevImage("right2");
    });    
    //init google map
}


function nextImage(imageId) {
    //define index picturre
    var currentImage = document.querySelector("#"+imageId);
    //get src of picture
    currentImageSrc = currentImage.getAttribute("src");
    //change picture in slide show
    currentIndex = images.findIndex((elem) => { return "Images/"+elem === currentImageSrc;}) 
    //when we come to end of array, coming back on start
    if ((currentIndex + 1) == images.length) {
        currentImage.setAttribute("src", "Images/"+images[0]);
    } else {
        currentImage.setAttribute("src", "Images/"+images[currentIndex+1]);
    }
}

function prevImage(imageId) {
    var currentImage = document.querySelector("#"+imageId);
    currentImageSrc = currentImage.getAttribute("src");
    //when we come to start of array, coming back on end
    currentIndex = images.findIndex((elem) => { return "Images/"+elem === currentImageSrc;}) 
    if ((currentIndex - 1) == -1) {
        currentImage.setAttribute("src", "Images/"+images[images.length - 1]);
    } else {
        currentImage.setAttribute("src", "Images/"+images[currentIndex-1]);
    }
}

//TABS
tab = document.querySelector("#tab");
//then click on link(tab)
function showPanel(panelIndex){
    //array for tabs
    tabText=[
        "On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document.",
        "You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks.",
        "When you create pictures, charts, or diagrams, they also coordinate with your current document look.",
        "You can easily change the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab."
    ];
    //show on display
    this.tab.style.display="block"; 
    //change content when click on another tab
    this.tab.textContent = tabText[panelIndex];
}
//FORM
function submitForm(event) {
    //validation message
    var message = document.querySelector("#message");
    //limit on 1000 characters
    if (message.value.length > 1000) {
        event.preventDefault();
        alert("Maximum length for message is 1000 characters.")
    }
}
//a zbog pogresnog Key za API ne radi ni kod za dodavanje markera
/*function initMap() {
    var parametars = {lat: 42.441891, lng: 19.237606};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: parametars
    });

    var marker = new google.maps.Marker({
        position: parametars,
        map: map,
    });
   
}*/


