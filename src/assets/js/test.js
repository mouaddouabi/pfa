$(document).ready(function(){
    $(".mytable").DataTable();
    $("select[name*='DataTables_Table_0_length']").css({"width":"50px"});
});

function corps_etr(att){
    if(att==true){
        document.getElementById("blockCorps").style.display="block";
    }
    else{
        document.getElementById("blockCorps").style.display="none";
    }
    return;
}