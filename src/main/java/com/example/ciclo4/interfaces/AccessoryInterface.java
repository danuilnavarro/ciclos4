package com.example.ciclo4.interfaces;

import com.example.ciclo4.model.Accessory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccessoryInterface extends MongoRepository<Accessory, String> {

}
