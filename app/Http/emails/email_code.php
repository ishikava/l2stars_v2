<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer();
//подготовим мейлер, если почтовый адрес корректен
//if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
if (1) {
    try {
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                 //Enable verbose debug output
        $mail->isSMTP();                                       // Set mailer to use SMTP
        $mail->Host = 'ssl://smtp.yandex.ru';                        // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                // Enable SMTP authentication
        $mail->Username = 'support@l2stars.com';                // SMTP username
        $mail->Password = 'HamloTramvaynoe';                      // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;    //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port = 465;                                     // TCP port to connect to
        $mail->SMTPOptions = array (
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true)
        );
        //Recipients
        $mail->setFrom('support@l2stars.com', 'l2stars.com');
        //$mail->addAddress($_POST['email']);     // Add a recipient
        //$mail->addAddress('support@l2stars.com');
        $mail->addAddress('magnumru@yandex.ru');
        $mail->CharSet = 'UTF-8';
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML

        //require_once __DIR__ . '/../emails/free_server_moderate.php';
        //$mail->Subject = '=?utf-8?B?' . base64_encode('💌 Сервер ' . htmlspecialchars($_POST['name'], ENT_QUOTES) . ' отправлен на модерацию') . '?=';
        $mail->Subject = '=?utf-8?B?' . base64_encode('💌 Сервер l2stars отправлен на модерацию') . '?=';

        $mail->Body = 'Проверка';//$email_body;
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

}

exit();
