<?php
    if(isset($_POST["subscrever"])){
        $email = $_POST["email"];

        echo "Olá $email !";

        echo "<script>
        var email = '" . addslashes($email) . "';
        console.log(email);
        </script>";
        }
?>