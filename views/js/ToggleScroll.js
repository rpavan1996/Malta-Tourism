function toggle() {
    var element = document.getElementsByTagName("button")[0];
    var theme_name = element.innerHTML;
    theme_name = String(theme_name).toLowerCase();
    var theme = String(localStorage.getItem('theme'));
    if(theme_name == theme){
        element.click();
    }
    setTimeout(toggle, 1000);
}

toggle();


function validateSize() {
    var file = document.getElementById("inputFiles");
    var size = document.getElementById("fileSize");
    var res = document.getElementById("fileRes");
    var msg = document.getElementById("fileMsg");

    msg.style.display = 'none';
    msg.style.color = 'red';
    size.style.color = 'var(--foreground)';
    res.style.color = 'var(--foreground)';

    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.gif)$");
    if (regex.test(file.value.toLowerCase())) {
 
        if (typeof (file.files) != "undefined") {

            var reader = new FileReader();

            reader.readAsDataURL(file.files[0]);
            reader.onload = function (e) {

                var image = new Image();
 
                image.src = e.target.result;
                       
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    if (height > 1440 || width > 2160) {
                        res.style.color = 'red';
                        return false;
                    }
                    var fsize = this.size;
                    fsize = Math.round((fsize / 1024));
                    if (fsize >= (6 * 1024)) {
                        size.style.color = 'red';
                        return false;
                    }
                    return true;
                };
 
            }
        } else {
            msg.innerHTML = 'Image does not meet the requirements.<br>Please try again !';
            console.log(msg.innerHTML);
            msg.style.display = 'inline';
            msg.style.color = 'red';
            return false;
        }
    } else {
        msg.innerHTML = 'Invalid Format. Try again !';
        console.log(msg.innerHTML);
        msg.style.display = 'inline';
        msg.style.color = 'red';
        return false;
    }
}

/* DOM is ready
------------------------------------------------*/
$(function(){

    // Change top navbar on scroll
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".tm-top-bar").addClass("active");
        } else {                    
         $(".tm-top-bar").removeClass("active");
        }
    });

});


