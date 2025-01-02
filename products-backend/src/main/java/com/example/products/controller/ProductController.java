package com.example.products.controller;
import com.example.products.model.Product;
import com.example.products.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService service;

    @Autowired
    public ProductController(ProductService service){
        this.service = service;
    }
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String query){
        return ResponseEntity.ok(service.searchProducts(query));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductsById(@PathVariable Long id){
        return ResponseEntity.ok(service.getProductById(id).orElseThrow(() -> new RuntimeException("Product not found")));
    }
}
