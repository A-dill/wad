<?php
require ("connection.php");
function getCat()
{
    $query = "select *from categories";
    global $sqlvar;
    $result = mysqli_query($sqlvar, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<li><a class="nav-link"  href="#">'.$row['cat_title'].'</a></li>';
    }
}
function getBrand()
{
    $query = "select *from brands";
    global $sqlvar;
    $result = mysqli_query($sqlvar, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<li><a class="nav-link"  href="#">'.$row['brand_title'].'</a></li>';
    }
}