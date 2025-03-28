package com.saas.webapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.saas.webapp.repository.secondinsertRepository;
import com.saas.webapp.model.secondinsert;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class secondinsertController {

    private final secondinsertRepository scndrepository;

    @Autowired //generated constructor
    public secondinsertController(secondinsertRepository scndrepository) {
        this.scndrepository = scndrepository;
    }

    @PostMapping("/insert-second")
    public secondinsert insertSecond(@RequestBody secondinsert request){
        return scndrepository.save(request);
    }

    @GetMapping("/stock-second")
    public List<secondinsert> listAll() {
        return scndrepository.findAll();
    }

    @DeleteMapping("/stock-second/{id}")
    public ResponseEntity<?> deleteScnd(@PathVariable Long id) {
        try {
            scndrepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error");
        }
    }
}