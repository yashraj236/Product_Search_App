package com.example.products.service;

import com.example.products.model.Product;
import com.example.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> searchProducts(String searchText) {
        return repository.searchProducts(searchText);
    }

    public Optional<Product> getProductById(Long id) {
        return repository.findById(id);
    }
}