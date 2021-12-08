function traerInformacionProductos(){
    console.log("test");
    $.ajax({
        url:"http://localhost:8083/api/accessory/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";

        myTable+="<td>"+respuesta[i].reference+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].category+"</td>";
        myTable+="<td>"+respuesta[i].material+"</td>";
        myTable+="<td>"+respuesta[i].gender+"</td>";
        myTable+="<td>"+respuesta[i].size+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].availability+"</td>";
        myTable+="<td>"+respuesta[i].price+"</td>";
        myTable+="<td>"+respuesta[i].quantity+"</td>";
        myTable+="<td>"+respuesta[i].photography+"</td>";

        myTable+="<td> <button onclick='borrarProducto("+JSON.stringify(respuesta[i].reference)+")'>Eliminar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}



function borrarProducto(reference){
    console.log(reference);
    let myData={
        id:reference
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url:"http://localhost:8083/api/accessory/"+reference,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionProductos();
            Swal
                .fire({
                    title: "¿Desea eliminar?",
                    text: "¿Eliminar?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: "Sí, eliminar",
                    cancelButtonText: "Cancelar",
                })
                .then(resultado => {
                    if (resultado.value) {
                        // Hicieron click en "Sí"
                        console.log("*se elimina la venta*");
                    } else {
                        // Dijeron que no
                        console.log("*NO se elimina la venta*");
                    }
                });
        }
    });

}
