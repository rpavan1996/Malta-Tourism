class X {

    getImages(){
        const file_type=document.getElementById("pageNumber").innerHTML;

        fetch(`http://localhost:3000/getdata${file_type}`).then(res => {
            if(res.status === 200){
                return res.json();
            }
        }).then((data)=>{
            if(data){
                alert("sample");
                const i=0;
                const place_images_container = document.getElementById("place_display_container");
                data.comments.forEach(item => {

                    const div_inner_image_tag=document.createElement("img");
                    div_inner_image_tag.src="uploads/"+item.image;
                    if(file_type=='buskett'){
                        div_inner_image_tag.classList.add('mySlides2');
                    }
                    else if(file_type=='fungus_rock') {
                        div_inner_image_tag.classList.add('mySlides3');
                    }
                    else {
                        div_inner_image_tag.classList.add('mySlides');
                    }
                    place_images_container.appendChild(div_inner_image_tag);
                })
            }
        });
    }

}

const aa=new X();
aa.getImages();