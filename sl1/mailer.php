<?php

$recepient = "efremov-web@yandex.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email= trim($_POST["mail"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");