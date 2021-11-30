function traerInformacionProductos(){
    console.log("test");
    $.ajax({
        url:"http://129.159.49.212:8083/api/accessory/all",
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
        myTable+="<td> <button onclick=' agregarProducto("+respuesta[i].reference+")'>Agregar</button>";
        myTable+="<td> <button onclick='editarProducto("+JSON.stringify(respuesta[i].reference)+")'>Editar</button>";
        myTable+="<td> <button onclick='borrarProducto("+JSON.stringify(respuesta[i].reference)+")'>Eliminar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function agregarProducto(){



    var elemento={
        reference:$("#reference").val(),
        brand:$("#brand").val(),
        category:$("#category").val(),
        material:$("#material").val(),
        gender:$("#gender").val(),
        size:$("#size").val(),
        description:$("#description").val(),
        price:$("#price").val(),
        quantity:$("#quantity").val(),
        availibility:$("#availibility").val(),
        photography:$("#photography").val(),
    }

    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:elemento,
        url:"http://129.159.49.212:8083/api/accessory/new",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function borrarProducto(reference){
    console.log(reference);
    let myData={
        id:reference
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url:"http://129.159.49.212:8083/api/accessory/"+reference,
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
function editarProducto() {


    var elemento={
        reference:$("#reference").val(),
        brand:$("#brand").val(),
        category:$("#category").val(),
        material:$("#material").val(),
        gender:$("#gender").val(),
        size:$("#size").val(),
        description:$("#description").val(),
        price:$("#price").val(),
        quantity:$("#quantity").val(),
        photography:$("#photography").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://129.159.49.212:8083/api/accessory/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}