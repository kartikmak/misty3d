        let propindex = 1;
        showProps(slideIndex);

        function plusSlides(c) {
            showProps(propindex += c);
        }
    
        function currentSlide(n) {
            showProps(propindex = c);
        }

        function showProps(c) {
            const sizes = [ [2500, 2000, "16-2-24", 1250], [1920, 1080, "15-10-23", 800]];
            document.getElementById("HpixC").innerHTML = sizes[propindex-1][0];
            document.getElementById("WpixC").innerHTML = sizes[propindex-1][1];
            document.getElementById("DateM").innerHTML = sizes[propindex-1][2];
            document.getElementById("prcing").innerHTML = sizes[propindex-1][3];
        }