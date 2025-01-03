<?php
// Set the content type header to specify UTF-8 encoding
header('Content-Type: text/html; charset=UTF-8');
// Get the origin from the request
$origin = $_SERVER['HTTP_ORIGIN'];

// List of allowed origins
// FIXME: adapt domains to your allowed domains.  
$allowedOrigins = [
    'https://nvlb.fr',
    'https://authorized-domain2.fr',
    'https://authorized-domain2.fr'
    // Add more origins as needed
];

// Check if the request origin is in the allowed list
if (!in_array($origin, $allowedOrigins)) {
    // If not in the allowed list, return a 403 (forbidden) response
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Forbidden. Origin not allowed."]);
    exit;
}

// Allow CORS for the allowed origin
header("Access-Control-Allow-Origin: $origin");
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
    // FIXME: adapt to your email address 
    $recipient = "mail@fake.fr";

    // Set the email subject.
    $subject = "$subject";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the main email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Thank You! Your message has been sent.\nYou will receive a confirmation mail.\n"
        ]);

        // Send confirmation email to the visitor
        $confirmationSubject = "Confirmation - Your Message to Strikelab";
        $confirmationMessage = "Dear $name,\n\nThank you for contacting us! Your message has been received and we will get back to you soon.\n\nBest regards,\nStrikelab Team";
        $confirmationHeaders = "From: Strikelab <contact@strikelab.fr>";

        mail($email, $confirmationSubject, $confirmationMessage, $confirmationHeaders);
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Oops! Something went wrong, and we couldn't send your message."
        ]);
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>
