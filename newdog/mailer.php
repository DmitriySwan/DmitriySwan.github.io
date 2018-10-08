<?php

$recepient = "dimonswan@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$mail = trim($_POST['mail']);
$text = trim($_POST['text']);

$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");