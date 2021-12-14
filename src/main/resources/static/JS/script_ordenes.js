function traerInformacionOrdenes(){
    console.log("test");
    $.ajax({
        url:"http://localhost:8083/api/order/all",
        type:"GET",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaOrden(respuesta);
        }
    });
}
function pintarRespuestaOrden(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";

        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].registerDay+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";

        myTable+="<td> <button onclick='borrarOrden("+JSON.stringify(respuesta[i].id)+")'>Eliminar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function borrarOrden(id){
    console.log(id);
    let myData={
        id:id
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url:"http://localhost:8083/api/order/"+id,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionOrdenes();
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