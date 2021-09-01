package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.CartRepository;
import com.example.model.CartModel;
import com.example.model.ProductModel;
import com.example.service.ProductService;
import com.example.tempmodel.TmpCartModel;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartController {
	
	@Autowired
	public CartRepository cartRepo;
	
	@Autowired
	public ProductService productService;
	
	@GetMapping("/user/{id}/cartitems")
	public List<CartModel> getAllCartItemsFromUser(@PathVariable String id) {
		//return the cartItem
		//Enter your code here ...
	}
	
	@PostMapping("/user/addcart")
	public String addtoCart(@RequestBody CartModel cart) {
		//Create a API for addtoCart operation.
		//Need to check all the posibile conditions and return success or insufficient stock
		//Enter your code here ...
	}
	
	@DeleteMapping("/user/deleteCart/{id}")
	public void deleteCart(@PathVariable String id) {
		//Create a API for Delete Cart Item
		//Enter your code here ...
	}
	
	@DeleteMapping("/user/deleteallcartitems")
	public void deleteAll() {
		//Create a API for Delete Cart Items
		//Enter your code here ...
	}
}
