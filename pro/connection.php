<?php

$sqlvar = mysqli_connect("localhost", "root", "", "db1");
if (!$sqlvar) {
    die ("error connecting database");
}