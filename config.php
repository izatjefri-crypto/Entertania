<?php
// Database configuration
$host = 'localhost';
$user = 'root';  // your MySQL username
$pass = '';      // your MySQL password
$db = 'entertania';

// Create connection
$conn = mysqli_connect($host, $user, $pass, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>