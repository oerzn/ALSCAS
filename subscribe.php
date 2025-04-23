<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Save to a CSV file
    $file = "subscribers.csv";
    $fp = fopen($file, "a"); // Open CSV file in append mode

    if ($fp) {
        fputcsv($fp, [$email]); // Write email to CSV
        fclose($fp);
    }

    // Send Confirmation Email
    $subject = "Subscription Confirmation";
    $message = "Thank you for subscribing to our newsletter!";
    $headers = "From: harshinprivate@gmail.com"; // Change to your domain email

    if (mail($email, $subject, $message, $headers)) {
        echo "Thank you for subscribing! Please check your email.";
    } else {
        echo "Subscription successful, but confirmation email could not be sent.";
    }
}
?>
