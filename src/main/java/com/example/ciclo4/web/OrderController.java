package com.example.ciclo4.web;


import com.example.ciclo4.model.Accessory;
import com.example.ciclo4.model.Order;
import com.example.ciclo4.model.User;
import com.example.ciclo4.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Order> getOrder(@PathVariable("id") int id) {
        return orderService.getOrder(id);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Order create(@RequestBody Order gadget) {
        return orderService.create(gadget);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Order update(@RequestBody Order gadget) {
        return orderService.update(gadget);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id) {
        return orderService.delete(id);
    }

    @GetMapping("/zona/{zona}")
    public List<Order> findByZone(@PathVariable("zona") String zone) {
        return orderService.findByZone(zone);
    }

    /*Reto4 desde aca
     Ordenes de pedido de un asesor por id
      */
    @GetMapping("/salesman/{id}")
    public List<Order> ordersSalesManById(@PathVariable("id") Integer id){
        return orderService.ordersSalesManById(id);
    }

    /*
   Ordenes de pedido de un asesor por fecha
   */
    @GetMapping("/date/{date}/{id}")
    public List<Order> ordersSalesManByDate(@PathVariable("date") String dateStr, @PathVariable("id") Integer id) {
        return orderService.ordersSalesManByDate(dateStr, id);
    }

    /*
   Ordenes de pedido de un asesor por estado
   */
    @GetMapping("/state/{state}/{id}")
    public List<Order> ordersSalesManByState(@PathVariable("state") String state, @PathVariable("id") Integer id) {
        return orderService.ordersSalesManByState(state, id);
    }


}
