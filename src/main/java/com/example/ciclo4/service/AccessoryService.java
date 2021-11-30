package com.example.ciclo4.service;

import com.example.ciclo4.model.Accessory;
import com.example.ciclo4.repository.AccessoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccessoryService {


    @Autowired
    private AccessoryRepository accessoryRepository;

    public List<Accessory> getAll() {
        return accessoryRepository.getAll();
    }

    public Optional<Accessory> getAccessory(String reference) {
        return accessoryRepository.getAccessory(reference);
    }

    public Accessory create(Accessory accessory) {
        if (accessory.getReference() == null) {
            return accessory;
        } else {
            return accessoryRepository.create(accessory);
        }
    }

    public Accessory update(Accessory accessory) {

        if (accessory.getReference() != null) {
            Optional<Accessory> accessoryDb = accessoryRepository.getAccessory(accessory.getReference());
            if (!accessoryDb.isEmpty()) {

                if (accessory.getBrand()!= null) {
                    accessoryDb.get().setBrand(accessory.getBrand());
                }

                if (accessory.getCategory() != null) {
                    accessoryDb.get().setCategory(accessory.getCategory());
                }

                if (accessory.getMaterial() != null) {
                    accessoryDb.get().setCategory(accessory.getCategory());
                }

                if (accessory.getGender() != null) {
                    accessoryDb.get().setCategory(accessory.getCategory());
                }
                if (accessory.getSize() != null) {
                    accessoryDb.get().setCategory(accessory.getCategory());
                }

                if (accessory.getDescription() != null) {
                    accessoryDb.get().setDescription(accessory.getDescription());
                }
                if (accessory.getPrice() != 0.0) {
                    accessoryDb.get().setPrice(accessory.getPrice());
                }
                if (accessory.getQuantity() != 0) {
                    accessoryDb.get().setQuantity(accessory.getQuantity());
                }
                if (accessory.getPhotography() != null) {
                    accessoryDb.get().setPhotography(accessory.getPhotography());
                }
                accessoryDb.get().setAvailability(accessory.isAvailability());
                accessoryRepository.update(accessoryDb.get());
                return accessoryDb.get();
            } else {
                return accessory;
            }
        } else {
            return accessory;
        }
    }

    public boolean delete(String reference) {
        Boolean aBoolean = getAccessory(reference).map(accessory -> {
            accessoryRepository.delete(accessory);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
