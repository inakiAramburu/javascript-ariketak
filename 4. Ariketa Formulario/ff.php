<?php





						$host_db = "localhost";
						$user_db = "karritoa";
						$pass_db = "Zubiri19";
						$db_name = "karritoa";
			$conexion = mysqli_connect('localhost', 'karritoa', 'Zubiri19', 'karritoa');

      $nombre=$_POST['Izena'];
      $korreoa=$_POST['korreo'];
      $NAN=$_POST['NAN'];
      $probintzia=$_POST['probintzia'];
      $telefonoa=$_POST['Telefonoa'];
      $urteak=$_POST['JaioData'];


//,'$NAN','$probintzia','$telefonoa','$urteak'
//,NAN,Probintzia,Telefono,Urteak
//$my_Insert_Statement = $my_Db_Connection->prepare("INSERT INTO Students (name, lastname, email) VALUES (:first_name, :last_name, :email)");

	#---------------------Insertar------------------------
			$insert= mysqli_query($conexion,"INSERT INTO datuak (Izen_abizenak,Korreo,NAN,Probintzia,Telefono,Urteak)VALUES ('$nombre','$korreoa','$NAN','$probintzia','$telefonoa', '$urteak');");
			$insertar= mysqli_fetch_row($insert);



		    header('Location: index.html');

		#-----------------------------------------------------


?>
