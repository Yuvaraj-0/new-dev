<?php
$uname2 = $_POST['uname2'];
$email = $_POST['email'];
$upswd2 = $_POST['upswd2']; // Corrected to capture password
$upswd22 = $_POST['upswd22']; // Corrected to capture confirm password

if(!empty($uname2) && !empty($email) && !empty($upswd2) && !empty($upswd22)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "project1";

    // Create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
    } else {
        $select = "SELECT email FROM register WHERE email = ? LIMIT 1";
        $insert = "INSERT INTO register (uname2, email, upswd2, upswd22) VALUES (?, ?, ?, ?)";

        // Prepare statement
        $stmt = $conn->prepare($select);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        // Checking if email already exists
        if ($rnum == 0) {
            $stmt->close();

            $stmt = $conn->prepare($insert);
            $stmt->bind_param("ssss", $uname2, $email, $upswd2, $upswd22);
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Someone already registered with this email ID";
        }

        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
