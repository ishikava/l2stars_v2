<?php

$email_body = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>L2stars.com</title>
</head>

<body>
<table bgcolor="#f9f9f9" border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" width="100%">
<tr>
<td height="100%" align="center">

<table width="600" border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0;" bgcolor="#0b1424">



<tr>
<td>
<img src="https://l2stars.com/img/mailerheader.png" alt="L2stars.com" border="0" width="600" height="177" style="display:block;"/>
</td>
</tr>



<tr>
<td>

<table bgcolor="#141414" border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" width="100%">
<tr>

<td style="padding: 10px;" width="170">
<a href="https://l2stars.com" style="color: #ffb11b; font: 16px Arial, sans-serif; line-height: 30px; -webkit-text-size-adjust:none; display: block;" target="_blank">L2stars.com</a>
</td>

<td style="padding: 10px;" width="120">

</td>


<td style="padding: 10px;" width="10">

</td>

<td align="right">

</td>

<td width="15"></td>

</tr>
</table>

</td>
</tr>

<tr>
<td style="padding: 10px;">
</td>
</tr>

<tr>
<td align="center" style="padding: 10px;">
<span style="color: #f7f7f7; font: 17px Arial, sans-serif; line-height: 30px; -webkit-text-size-adjust:none; display: block;">
Сервер ' . htmlspecialchars($_POST['name'], ENT_QUOTES) . ' отправлен на модерацию и будет добавлен в очередь бесплатных серверов.
</span>
</td>
</tr>

<tr>
<td style="padding: 10px;">
</td>
</tr>

<tr>
<td style="height: 120px;">
</td>
</tr>

</table>

</td>
</tr>

</table>
</td>
</tr>
</table>
</body>
</html>';