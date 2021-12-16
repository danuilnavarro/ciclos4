package com.example.ciclo4.service;


import com.example.ciclo4.model.Order;
import com.example.ciclo4.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAll() {
        return orderRepository.getAll();
    }

    public Optional<Order> getOrder(int id) {
        return orderRepository.getOrder(id);
    }

    public Order create(Order order) {
        /*
        Obtiene el maximo id existente en la coleccion
         */
        Optional<Order> orderIdMaximo = orderRepository.lastOrderId();

        /*
        Si el Id de la orden que recibe es nulo, entonces valida el maximo id
         */
        if (order.getId() == null) {
            /*
            Valida el maximo Id generado, si no hay ninguno aun el Id sera 1
             */
            if (orderIdMaximo.isEmpty())
                order.setId(1);
            /*
            Si retorna informacion, suma 1 al Id maximo existente y lo asigna codigo de la ornde
             */
            else
                order.setId(orderIdMaximo.get().getId() + 1);

        }
        Optional<Order> e = orderRepository.getOrder(order.getId());
        if (e.isEmpty()) {
            return orderRepository.create(order);
        } else {
            return order;
        }

    }

    public Order update(Order order) {

        if (order.getId() != null) {
            Optional<Order> orderDb = orderRepository.getOrder(order.getId());
            if (!orderDb.isEmpty()) {

                if (order.getStatus() != null) {
                    orderDb.get().setStatus(order.getStatus());
                }

                orderRepository.update(orderDb.get());
                return orderDb.get();
            } else {
                return order;
            }
        } else {
            return order;
        }
    }


    public boolean delete(int id) {
        Boolean aBoolean = getOrder(id).map(order -> {
            orderRepository.delete(order);
            return true;
        }).orElse(false);
        return aBoolean;
    }

    /*
    Ordenes asociadas a los asesores de zona
     */
    public List<Order> findByZone(String zone) {
        return orderRepository.findByZone(zone);
    }

    /*Reto4 desde aca
      Ordenes de pedido de un asesor por id
       */
    public List<Order> ordersSalesManById(Integer id) {
        return orderRepository.ordersSalesManById(id);
    }

    /*
    Ordenes de pedido de un asesor por fecha
    */
    public List<Order> ordersSalesManByDate(String dateStr, Integer id) {
        return orderRepository.ordersSalesManByDate(dateStr, id);
    }

    /*
    Ordenes de pedido de un asesor por estado
    */
    public List<Order> ordersSalesManByState(String state, Integer id) {
        return orderRepository.ordersSalesManByState(state, id);
    }

}
