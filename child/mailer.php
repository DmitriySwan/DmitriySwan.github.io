<?php

$recepient = "heizer.ukraine@gmail.com";
$sitename = "Child Climber";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$product = trim($_POST["product"]);
$message = "Имя: $name \nТелефон: $tel \nТовар: $product";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");