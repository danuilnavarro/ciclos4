package com.example.ciclo4.interfaces;

import com.example.ciclo4.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface UserInterface extends MongoRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailAndPassword(String email,String password);

    /* Para seleccionar el usuario con el id maximo o ultimo id
     */
    Optional<User> findTopByOrderByIdDesc();


    List<User> findByMonthBirthtDay(String monthBirthtDay);

}
