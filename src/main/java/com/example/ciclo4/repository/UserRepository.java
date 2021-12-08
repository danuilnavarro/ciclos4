package com.example.ciclo4.repository;

import com.example.ciclo4.interfaces.UserInterface;
import com.example.ciclo4.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {

    @Autowired
    private UserInterface userInterfaceRepository;

    public List<User> getAll() { return (List<User>) userInterfaceRepository.findAll();
    }

    public Optional<User> getUser(int id) {
        return userInterfaceRepository.findById(id);
    }

    public User create(User user) {
        return userInterfaceRepository.save(user);
    }

    public void update(User user) {
        userInterfaceRepository.save(user);
    }

    public void delete(User user) {
        userInterfaceRepository.delete(user);
    }

    public boolean emailExists(String email) {
        Optional<User> usuario = userInterfaceRepository.findByEmail(email);

        return !usuario.isEmpty();
    }

    public Optional<User> authenticateUser(String email, String password) {
        return userInterfaceRepository.findByEmailAndPassword(email, password);
    }

    public Optional<User> lastUserId(){
        return userInterfaceRepository.findTopByOrderByIdDesc();
    }
}
