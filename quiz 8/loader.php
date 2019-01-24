<?php

require "server/functions.php";
$e=$_REQUEST["e"];
$check_search="select * from products where products.pro_title like %e%";
$run_search=mysqli_query($con,$check_search);
$check_rows=mysqli_num_rows($run_search);

if($count>0) {
    while ($row = mysqli_fetch_assoc($run_search)) {
        echo '<div class=\'col-sm-6 col-md-4 col-lg-3 text-center product-summary\'>
                    <h5 class=\'text-capitalize\'>' . $row['pro_title'] . '</h5>
                    <img src=admin/product_images/' . $row['pro_image'] . '>
                    <p> <b> ' . $row['pro_price'] . '</b> </p>

                
                     </div>';
    }

}
