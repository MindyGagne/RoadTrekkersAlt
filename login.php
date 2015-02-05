<?php
session_start();
ob_start();
$_SESSION ["login"] = null;
$page_title = "Login";
require "templates/header.php";
require "templates/dbconnect.php";
$name = $_POST['name'];
$password = $_POST['password'];
$submit = $_POST['submit'];
$failure = "";
if ($submit){
    $sql = "SELECT * FROM users WHERE name = '$name' and password = '$password'";
    $result = $db->query($sql);
    list($user_id, $name, $password) = $result->fetch_row();
    if ($user_id){

        $_SESSION ['name'] = $name;
        ob_clean();
        header("Location: blog.php");
    }else{
        $failure = "<br>Your Login Failed.. Please Try Again.<br>";

    }
}
mysqli_close($db);
?>
<div id="heading">
    <h1>Login to Sync your</h1>

    <h2>Products of the Future!</h2>
</div>
<?php
include "templates/navigation.php";

echo "<h4>Please Login</h4>";
$logon = <<<EOL

<form method="post" action="login.php">
        <p><input type="text" name="name" value="$name" placeholder="name" autofocus></p>
        <p><input type="password" name="password" value="$password" placeholder="password"> </p>
        <p><input type="text" name="email" value="$email" placeholder="email" id="email"></p>
        <p><input type="checkbox" name="email" value="email" $vare_mail>"I wish to receive Email updates"<br/></p>
        <p><input type="checkbox" name="newsletter" value="newsletter" $varnewsletter>"I wish to receive the newsletter"<br/></p>
        <p><input type="submit" name="submit" value="Sign In"> </p>
</form>

EOL;

echo "<h6>$failure</h6>";
echo $logon;
?>
<section id="middle">
    <!--    <img id="next_thing" src="img/login.jpg" alt="login">-->
    <div id="welcome_note">
        <h3>Login to get the Latest</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas mollis justo, in euismod nulla mollis
            id. Vivamus pharetra viverra enim, ac tincidunt tellus pretium non. Cras venenatis et ipsum quis ultrices.
            Integer dignissim, leo eu porta dictum, felis est varius massa, at volutpat risus ipsum ut lectus. Sed
            turpis odio, condimentum id sapien at, pharetra scelerisque erat. Vestibulum vitae posuere urna, a vulputate
            nibh. Etiam vulputate arcu dolor, ac fermentum lectus adipiscing ut. Nunc rhoncus orci quis lacinia
            interdum. Cras venenatis et ipsum quis ultrices. Integer dignissim, leo eu porta dictum, felis est varius
            massa, at volutpat risus ipsum ut lectus. Sed turpis odio, condimentum id sapien at, pharetra scelerisque
            erat. Vestibulum vitae posuere urna, a vulputate nibh. Etiam vulputate arcu dolor, ac fermentum lectus
            adipiscing ut. Nunc rhoncus orci quis lacinia interdum.</p>
    </div>
</section>
<?php
include "templates/footer.php";

?>
