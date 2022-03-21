var emptyRow = "<tr><td colspan='4' class='text-center'> Belum ada data yang diinputkan. Klik button 'Add New' untuk menambahkan data! </td></tr>";
var emptyNewRow = "<tr class='trNewRow'>"; 
emptyNewRow = emptyNewRow + "    <td class='tdName'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtName' placeholder='Enter Name'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdDepartment'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtDepartment' placeholder='Enter Department'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdPhone'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtPhone' placeholder='Enter Phone'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdActions'>";
emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-success btn-save'> Save</button>";
emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-warning btn-cancel'> Cancel</button>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "</tr>";

var rowButtons ="<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
var rowUpdateButtons ="<button class='btn btn-success btn-sm btn-save' > Update </button>  <button class='btn btn-danger btn-sm btn-save' > Cancel </button> ";

$(document).ready(function () {
	debugger;
	$("#tblData tbody").append(emptyRow); 
	
	$("#btnAdd").click(function () { 
		debugger;
			if ($("#tblData tbody").children().children().length == 1) {
				$("#tblData tbody").html("");
			}
			debugger;
			$("#tblData tbody").append(emptyNewRow);
	});
		
	$('#tblData').on('click', '.btn-save', function () {
		const name =  $(this).parent().parent().find(".txtName").val();
		$(this).parent().parent().find(".tdName").html(""+name+""); 
		const Department =  $(this).parent().parent().find(".txtDepartment").val();
		$(this).parent().parent().find(".tdDepartment").html(""+Department+"");
		const Phone =  $(this).parent().parent().find(".txtPhone").val();
		$(this).parent().parent().find(".tdPhone").html(""+Phone+"");
		$(this).parent().parent().find(".tdActions").html(rowButtons);
	});
		
		
	$('#tblData').on('click', '.btn-danger', function () { 
		$(this).parent().parent().remove();
		if ($("#tblData tbody").children().children().length == 0) {
			$("#tblData tbody").append(emptyRow);
		}
	});
	
	
	$('#tblData').on('click', '.btn-cancel', function () { 
		$(this).parent().parent().remove();
	});
	$('#tblData').on('click', '.btn-edit', function () { 
		const name =$(this).parent().parent().find(".tdName").html();
		
		$(this).parent().parent().find(".tdName").html("<input type='text' value='"+name+"' class='form-control txtName' placeholder='Enter Name'/>"); 
		
		
		const Department =$(this).parent().parent().find(".tdDepartment").html();
		
		$(this).parent().parent().find(".tdDepartment").html("<input type='text' value='"+Department+"' class='form-control txtDepartment' placeholder='Enter Department'/>"); 
		
		
		const Phone =$(this).parent().parent().find(".tdPhone").html();
		
		$(this).parent().parent().find(".tdPhone").html("<input type='text' value='"+Phone+"' class='form-control txtPhone' placeholder='Enter Phone'/>"); 
		
		$(this).parent().parent().find(".tdActions").html(rowUpdateButtons);
		
		
	});
});