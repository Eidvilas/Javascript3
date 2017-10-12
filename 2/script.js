
        var klaidos =[];


    
        function rodyti_fizini() {
            document.getElementById('div_fizinis').style.display = "flex";
            document.getElementById('div_imone').style.display = "none";
            document.getElementById('btn_1').style.backgroundColor = "#C70726";
            document.getElementById('btn_2').style.backgroundColor = "white";
            document.getElementById('btn_1').style.color = "white";
            document.getElementById('btn_2').style.color = "black";

        }

        function rodyti_imone() {
            document.getElementById('div_imone').style.display = "flex";
            document.getElementById('div_fizinis').style.display = "none";
            document.getElementById('btn_2').style.backgroundColor = "#C70726"
            document.getElementById('btn_1').style.backgroundColor = "white";
            document.getElementById('btn_2').style.color = "white";
            document.getElementById('btn_1').style.color = "black";
        }

        function validate_activity() {
            if (document.getElementById('imones_kodas') !== document.getElementById('pakartotinis_kodas')) {
                document.getElementById('imones_kodas').style.backgroundColor = "red";
                document.getElementById('pakartotinis_kodas').style.backgroundColor = "red";

                var klaidos[]="neivestas arba nesutampa imones kodas";

            } else {
                document.getElementById('imones_kodas').style.backgroundColor = "white";
                document.getElementById('pakartotinis_kodas').style.backgroundColor = "white";
            }

            function checkEmail() {

            var email = document.getElementById('email');
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                if (!filter.test(email.value)) {
                email.style.backgroundColor = "red";
                email.style.color = "white";
                var klaidos[]="neteisingai ivestas el. pastas";
                return false;
                } else {
                   email.style.backgroundColor = "white";

                }
            }

            if (klaidos[] == "" ) {

            } else {
                
            }

            checkEmail();
        }

