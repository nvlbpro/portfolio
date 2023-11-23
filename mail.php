<?php
// mail.php
// Enable Cross-Origin Resource Sharing (CORS) for a specific origin
// FIXME: Update this with your domain address.
header("Access-Control-Allow-Origin: https://fakehost.com/mail.php"); 
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"), array(" "," "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete the form and try again."]);
        exit;
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    $recipient = "fakemail@test.tld";

    // Set the email subject.
    $subject = "$subject";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank You! Your message has been sent."]);
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong, and we couldn't send your message."]);
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}

// Instructions on how to use this mail.php script:
// echo "\n";
// echo "Usage Instructions:\n";
// echo "1. Set the 'Access-Control-Allow-Origin' header to the origin of your web application.\n";
// echo "2. Customize the recipient email address by updating the \$recipient variable.\n";
// echo "3. Adjust the email subject and content based on your requirements.\n";
// echo "4. Ensure your web server has mail functionality enabled for the 'mail()' function to work.\n";
// echo "5. Integrate this mail.php script with your web application's contact form.\n";
