<?php

date_default_timezone_set("Africa/Kigali");

$currentDateTime = date("l, F j, Y");
$currentTime = date("H:i:s");

?>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>NEXORA SCHOOL | Server Date & Time</title>

<link rel="stylesheet" href="style.css">

</head>


<body>

<header class="site-header">

<div class="container nav-container">

<a href="index.html" class="logo">

<span class="logo-icon">N</span>

<span>
NEXORA <small>SCHOOL</small>
</span>

</a>

<nav>

<ul class="nav-links">

<li>
<a href="index.html">Home</a>
</li>

<li>
<a href="about.html">About</a>
</li>

<li>
<a href="academics.html">Academics</a>
</li>

<li>
<a href="contact.html">Contact</a>
</li>

</ul>

</nav>

</div>

</header>


<main>

<section class="time-section">

<div class="time-card">

<div class="card-icon">
🕒
</div>

<span class="section-label">
SERVER INFORMATION
</span>

<h1>Current Server Date & Time</h1>

<div class="server-date">

<?php echo htmlspecialchars($currentDateTime); ?>

</div>


<div class="server-time">

<?php echo htmlspecialchars($currentTime); ?>

</div>


<p>
Timezone: Africa/Kigali
</p>


<a
href="index.html"
class="btn btn-primary">

Back to Home

</a>

</div>

</section>

</main>


<footer class="footer">

<div class="footer-bottom">

<p>
&copy; 2026 NEXORA SCHOOL.
All Rights Reserved.
</p>

</div>

</footer>

</body>

</html>
