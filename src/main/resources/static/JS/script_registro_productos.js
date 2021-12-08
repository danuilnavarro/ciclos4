


function agregarProducto() {


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
        url:"http://localhost:8083/api/accessory/new",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

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
        url:"http://localhost:8083/api/accessory/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}