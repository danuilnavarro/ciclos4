package com.example.ciclo4.repository;


import com.example.ciclo4.interfaces.OrderInterface;

import com.example.ciclo4.model.Order;

import com.example.ciclo4.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Repository
public class OrderRepository {

    @Autowired
    private OrderInterface orderInterfaceRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Order> getAll() {
        return (List<Order>) orderInterfaceRepository.findAll();
    }

    public Optional<Order> getOrder(int id) {
        return orderInterfaceRepository.findById(id);
    }

    public Order create(Order order) {
        return orderInterfaceRepository.save(order);
    }

    public void update(Order order) { orderInterfaceRepository.save(order); }

    public void delete(Order order) {
        orderInterfaceRepository.delete(order);
    }

    public Optional<Order> lastOrderId(){
        return orderInterfaceRepository.findTopByOrderByIdDesc();
    }

    public List<Order> findByZone(String zone) {
        return orderInterfaceRepository.findByZone(zone);
    }

    public List<Order> ordersSalesManByDate(String dateStr, Integer id) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Query query = new Query();
        Criteria dateCriteria = Criteria.where("registerDay").gte(LocalDate.parse(dateStr, dtf).minusDays(1).atStartOfDay()).lt(LocalDate.parse(dateStr, dtf).plusDays(2).atStartOfDay()).and("salesMan.id").is(id);

        query.addCriteria(dateCriteria);
        List<Order> orders = mongoTemplate.find(query, Order.class);

        return orders;
    }

    public List<Order> ordersSalesManBySate(String state, Integer id) {

        Query query = new Query();
        Criteria dateCriteria = Criteria.where("salesMan.id").is(id).and("status").is(state);

        query.addCriteria(dateCriteria);
        List<Order> orders = mongoTemplate.find(query, Order.class);

        return orders;
    }

}
