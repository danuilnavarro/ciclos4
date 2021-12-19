package com.example.ciclo4.interfaces;

import com.example.ciclo4.model.Accessory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AccessoryInterface extends MongoRepository<Accessory, String> {
    public List<Accessory> findByPriceLessThanEqual(double price);
    public List<Accessory> findByDescriptionContainingIgnoreCase(String description);
}
