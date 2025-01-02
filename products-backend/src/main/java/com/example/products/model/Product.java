package com.example.products.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String brand;
    private String sku;
    private Double price;
    private Double rating;


    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
}
