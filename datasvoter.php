<?php
$servername ="votingdatabase.coispubgurww.us-east-1.rds.amazonaws.com";

$username = "myvotingdatabse";
$password ="Dsafdfwr3r3e3e3edds2#";
$dbname = "votingdatas";

//assigning users datas into variables
//
//Now i am checking if it has the terms box had been checked
//Now, I am going to create a connection 
$conn = new mysqli($servername,$username,$password,$dbname);
//Now,I have to check my connection
if (!$conn)
{
    die("Connection failed:" .mysql.error());
}
else{
      echo"congrats";
}