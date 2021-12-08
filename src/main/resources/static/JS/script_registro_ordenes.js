

function agregarOrden() {


    var elemento={
        id:$("#id").val(),
        registerDay:$("#registerDay").val(),
        status:$("#status").val(),
        salesMan:$("#formSalesMan").val(),
        products:$("#products").val(),
        quantities:$("#quantities").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8083/api/order/new",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}

function editarOrden() {


    var elemento={
        id:$("#id").val(),
        registerDay:$("#registerDay").val(),
        status:$("#status").val(),
        salesMan:$("#formSalesMan").val(),
        products:$("#products").val(),
        quantities:$("#quantities").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8083/api/order/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}