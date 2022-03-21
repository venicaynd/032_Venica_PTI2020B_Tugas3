<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nilai Akhir Mahasiswa</title>
  </head>
  
  <body bgcolor="#faebd7">
  <center>
	<h1>Nilai Akhir Mahasiswa</h1>
	<p>Berdasarkan nilai yang diinputkan sebelumnya, maka dapat diperoleh data sebagai berikut :</p>
  </center>
  <form id="akhir" name="akhir" method="post" action="hitungnilai.php">
  <table width="320" border="1" align="center" bordercolor="#cd853f" bgcolor="#deb887">
  
  <tr>
  <td><?php
  $nim=$_POST['nim'];
  $nama=$_POST['nama'];
  $jurusan=$_POST['jurusan'];
  $matkul=$_POST['matkul'];
  $absen=$_POST['absen'];
  $tugas=$_POST['tugas'];
  $uts=$_POST['uts'];
  $uas=$_POST['uas'];
  
  $nilai_absen = $absen*0.2;
  $nilai_tugas = $tugas*0.3;
  $nilai_uts = $uts*0.2;
  $nilai_uas = $uas*0.3;
  
  $akhir = $nilai_absen + $nilai_tugas + $nilai_uts + $nilai_uas;
  
  if(($akhir<=100)&&($akhir>=86)) {$angka="A" and $ket="LULUS";}
  else if(($akhir<=85)&&($akhir>=81)) {$angka="A-" and $ket="LULUS";}
  else if(($akhir<=80)&&($akhir>=76)) {$angka="B+" and $ket="LULUS";}
  else if(($akhir<=75)&&($akhir>=71)) {$angka="B" and $ket="LULUS";}
  else if(($akhir<=70)&&($akhir>=66)) {$angka="B-" and $ket="LULUS";}
  else if(($akhir<=65)&&($akhir>=61)) {$angka="C+" and $ket="LULUS";}
  else if(($akhir<=60)&&($akhir>=56)) {$angka="C" and $ket="LULUS";}
  else if(($akhir<=55)&&($akhir>=41)) {$angka="D" and $ket="TIDAK LULUS";}
  else if(($akhir<=40)&&($akhir>=0)) {$angka="E" and $ket="TIDAK LULUS";}
  
  echo"NIM : $nim<br>";
  echo"Nama Mahasiswa : $nama<br>";
  echo"Jurusan : $jurusan<br>";
  echo"Nilai Akhir : $akhir<br>";
  echo"Mata Kuliah : $matkul<br>";
  echo"Grade : $angka<br>";
  echo"Keterangan : $ket<br>";
  
  ?></td>
  </tr>
  
  </table><br>
  
  <center><input type="submit" name="Submit" value="Back" /></center>
  
  </form>
  </body>
 </html>
  