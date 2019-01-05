<?php
/**
 * Created by PhpStorm.
 * User: Noor Ahmad Zafar
 * Date: 01-Jan-19
 * Time: 8:34 PM
 */


    $sqlvar = mysqli_connect("localhost", "root", "", "db1");

    if (!$sqlvar) {
        die ("error connecting database");
    }