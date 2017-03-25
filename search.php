<?php
/**
 * This file queries the karaoke database by name/artist based on the search term.
 */

// Connect to the database
$host = '127.0.0.1';
$db   = 'karaoke';
$user = 'karaoke';
$pass = 'starrtunes';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

$search = $_GET['search'];

$stmt = $pdo->prepare('SELECT artist, name FROM songs WHERE artist LIKE :search OR name LIKE :search2 LIMIT 100');
$stmt->execute(['search' => "%" . $search . "%", 'search2' => "%" . $search . "%"]);
$resultJSON = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
header('Content-Type: application/json');
echo $resultJSON;
