package com.example.ciclo4;

import com.example.ciclo4.interfaces.AccessoryInterface;
import com.example.ciclo4.interfaces.UserInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@Component
@SpringBootApplication
public class Ciclo4Application implements CommandLineRunner {

    @Autowired
    private AccessoryInterface accessoryInterface;
    @Autowired
    private UserInterface userInterface;

    public static void main(String[] args) {
        SpringApplication.run(Ciclo4Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        accessoryInterface.deleteAll();
        userInterface.deleteAll();
    }
}
