<?php
require("connection.php");
function getCat()
{
    $query = "select *from categories";
    global $sqlvar;
    $result = mysqli_query($sqlvar, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<option>'.$row['cat_title'].'</option>';
    }
}
function getBrand()
{
    $query = "select *from brands";
    global $sqlvar;
    $result = mysqli_query($sqlvar, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<option>'.$row['brand_title'].'</option>';
    }
}