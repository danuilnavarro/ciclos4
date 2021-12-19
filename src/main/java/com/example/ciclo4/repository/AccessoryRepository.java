package com.example.ciclo4.repository;


import com.example.ciclo4.interfaces.AccessoryInterface;
import com.example.ciclo4.model.Accessory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AccessoryRepository {

    @Autowired
    private AccessoryInterface accessoryInterfaceRepository;

    public List<Accessory> getAll() {
        return accessoryInterfaceRepository.findAll();
    }

    public Optional<Accessory> getAccessory(String reference) { return accessoryInterfaceRepository.findById(reference);
    }
    public Accessory create(Accessory accessory) {
        return accessoryInterfaceRepository.save(accessory);
    }

    public void update(Accessory accessory) {
        accessoryInterfaceRepository.save(accessory);
    }

    public void delete(Accessory accessory) {
        accessoryInterfaceRepository.delete(accessory);
    }

    public List<Accessory> getByPriceLessThanEqual(double price){
        return accessoryInterfaceRepository.findByPriceLessThanEqual(price);
    }

    public List<Accessory> getByDescriptionContains(String description){
        return accessoryInterfaceRepository.findByDescriptionContainingIgnoreCase(description);
    }

}
