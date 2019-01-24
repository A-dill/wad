<?php
/**
 * Created by PhpStorm.
 * User: Noor Ahmad Zafar
 * Date: 24-Jan-19
 * Time: 2:04 PM
 */
require "server/functions.php";

$e=$_REQUEST['e'];
$query="select *from products where pro_keywords like '%$e%';";
$queryrun=mysqli_query($con,$query);
$count=mysqli_num_rows($queryrun);
if($count>0)
{
    while($row=mysqli_fetch_assoc($queryrun)) {
        echo '<div class=\'col-sm-6 col-md-4 col-lg-3 text-center product-summary\'>
                    <h5 class=\'text-capitalize\'>'.$row['pro_title'].'</h5>
                    <img src=admin/product_images/'.$row['pro_image'].'>
                    <p> <b> '.$row['pro_price'].'</b> </p>
                    <a href=\'detail.php\' class=\'btn btn-info btn-sm\'>Details</a>
                    <a href=\'#\'>
                        <button class=\'btn btn-primary btn-sm\'>
                            <i class=\'fas fa-cart-plus\'></i> Add to Cart
                        </button>
                    </a>
                </div>';
    }
}
