<?php
    if (!empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['subject']) && !empty($_GET['message'])) {
        $name = $_GET['name'];
        $email = $_GET['email'];
        $subject = $_GET['subject'];
        $message = nl2br($_GET['message']);
        $to = "bcodey@hotmail.com";
        $from = $email;
        $message = "<b>Name:</b> " . $name . "<br><b>Email:</b> " . $email . "<p>$message</p>";
        $headers = "From: $from\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";
        if (mail($to, $subject, $message, $headers)) {
            echo "Success";
        } else {
            echo "The server failed to send the message";
        }

    } 
?>