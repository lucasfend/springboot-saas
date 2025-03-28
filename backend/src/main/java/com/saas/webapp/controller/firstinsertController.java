package com.saas.webapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.saas.webapp.repository.firstinsertRepository;
import com.saas.webapp.model.firstinsert;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class firstinsertController {

    private final firstinsertRepository repository;

    @Autowired //generated constructor
    public firstinsertController(firstinsertRepository repository) { //instancia
        this.repository = repository;
    }

    @PostMapping("/insert-first")
    public firstinsert insertFirst(@RequestBody firstinsert request) {
        return repository.save(request);
    }

    @GetMapping("/stock-first")
    public List<firstinsert> listAll() {
        return repository.findAll();
    }

    @DeleteMapping("/stock-first/{id}")
    public ResponseEntity<?> deleteFirst(@PathVariable Long id) {
        try {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error");
        }
    }
}