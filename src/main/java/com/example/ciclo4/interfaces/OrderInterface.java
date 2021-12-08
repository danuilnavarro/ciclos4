package com.example.ciclo4.interfaces;


import com.example.ciclo4.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OrderInterface extends MongoRepository<Order, Integer> {

    /* Reto3
    Retornar ordenes de pedido que coincida con la zona recibida como parametro
     */
    @Query("{'salesMan.zone': ?0}")
    List<Order> findByZone(final String zone);

    /*Reto3
    Retorna las ordenes segun su estado (status)
     */
    @Query("{status: ?0}")
    List<Order> findByStatus(final String status);
    /* Para seleccionar la orden con el id maximo o ultimo id
     */
    Optional<Order> findTopByOrderByIdDesc();
}
